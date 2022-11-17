import { Alert, Button, Space } from 'antd';
import React, { useState } from 'react';
import { ReadMockExamQuery } from '../../lib/grapql/query.generated';
import { useDeleteMockExamQuestionFeedBack } from '../../lib/hooks/useMockExamQuestion';

interface MockExamQuestionFeedbackDeleteButtonProps {
  feedBack: ReadMockExamQuery['readMockExam']['mockExam']['mockExamQuestion'][0]['mockExamQuestionFeedback'][0];
}

const MockExamQuestionFeedbackDeleteButton: React.FC<
  MockExamQuestionFeedbackDeleteButtonProps
> = ({ feedBack }) => {
  const [questionFeedbackMutation] = useDeleteMockExamQuestionFeedBack();
  const [deleteAlertState, setDeleteAlertState] = useState(false);
  const onToggleDeleteAlert = () => setDeleteAlertState((state) => !state);
  const onDelete = (id: number) => {
    questionFeedbackMutation({ variables: { input: { id } } });
  };
  return (
    <li key={feedBack.id} className="flex gap-4 justify-between ">
      <div className="w-10/12">{feedBack.content}</div>
      <div className="flex flex-col w-4/12 gap-4">
        <span
          className="text-red-500 text-right cursor-pointer"
          onClick={onToggleDeleteAlert}
        >
          삭제하기
        </span>
        {deleteAlertState && (
          <Alert
            message="삭제하시겠습니까?"
            type="info"
            action={
              <Space>
                <Button onClick={() => onDelete(feedBack.id)}>삭제하기</Button>
                <Button onClick={onToggleDeleteAlert}>취소하기</Button>
              </Space>
            }
          />
        )}
      </div>
    </li>
  );
};

export default MockExamQuestionFeedbackDeleteButton;
