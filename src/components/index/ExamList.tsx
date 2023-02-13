import { Button, message } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { ReadAllMockExamQuery } from '../../lib/grapql/query.generated';
import { useEditMocmExam } from '../../lib/hooks/useMockExams';
import { useRevalidate } from '../../lib/hooks/useRevalidate';
import { MockExamRoutes } from '../../lib/routes';
import { convertWithErrorHandlingFunc } from '../../lib/utils/utils';
import { useApollo } from '../../modules/apollo';
import ConfirmButton from '../common/ConfirmButton';

export interface ExamListProps {
  exam: ReadAllMockExamQuery['readAllMockExam']['mockExams'][0];
}

const ExamList: React.FC<ExamListProps> = ({ exam }) => {
  const client = useApollo({}, '');
  const [editConfirmState, setEditConfirmState] = useState(false);
  const [editMockExamMutation] = useEditMocmExam();
  const [revalidateMutation] = useRevalidate();
  const onToggleEditConfirmState = () => setEditConfirmState(!editConfirmState);
  const requestSolutionPageRevalidate = async (id: number) => {
    const res = await revalidateMutation({
      variables: {
        input: {
          path: `/exam/solution/${id}`,
        },
      },
    });
    if (res.data?.revalidate.ok) {
      return message.success(`/exam/solution/${id} revalidation success`);
    }
    return message.error(res.data?.revalidate.error);
  };
  const trySolutionPageRevalidate = (id: number) =>
    convertWithErrorHandlingFunc({
      callback: () => requestSolutionPageRevalidate(id),
    });
  const requestEditApprovedState = async (state: boolean, id: number) => {
    const res = await editMockExamMutation({
      variables: { input: { approved: state, id } },
    });
    if (res.data?.editMockExam.ok) {
      setEditConfirmState(false);
      client.cache.modify({
        id: `MockExam:${id}`,
        fields: {
          approved() {
            return state;
          },
        },
      });
      return message.success(state ? '승인되었습니다' : '승인취소되었습니다.');
    }
    message.error(res.data?.editMockExam.error);
  };
  const tryEditApprovedState = (state: boolean, id: number) =>
    convertWithErrorHandlingFunc({
      callback: () => requestEditApprovedState(state, id),
    });

  return (
    <li
      className="border-b cursor-pointer flex flex-row items-center "
      key={exam.id}
    >
      <Link href={MockExamRoutes.detail(exam.id)}>
        <div className="pt-5 pb-2 hover:bg-neutral-50 w-full">
          <span className="">{exam.title}</span>
        </div>
      </Link>
      <ConfirmButton
        buttonClassName="mr-4 mt-2"
        popupTitle={exam.approved ? '승인취소' : '승인'}
        buttonLabel={exam.approved ? '승인됨' : '승인대기'}
        buttonType={exam.approved ? 'primary' : 'default'}
        onConfirm={() =>
          tryEditApprovedState(exam.approved ? false : true, exam.id)()
        }
        open={editConfirmState}
        onCancel={onToggleEditConfirmState}
        onButtonClick={onToggleEditConfirmState}
      />

      <Button
        className="mt-2"
        type="primary"
        onClick={() => trySolutionPageRevalidate(exam.id)()}
      >
        Solution-Revalidate
      </Button>
    </li>
  );
};

export default ExamList;
