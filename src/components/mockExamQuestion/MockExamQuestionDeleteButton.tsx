import React, { useState } from 'react';
import { useDeleteMockExamQuestion } from '../../lib/hooks/useMockExamQuestion';
import ConfirmButton from '../common/ConfirmButton';

interface MockExamQuestionDeleteButtonProps {
  questionId: number;
}

const MockExamQuestionDeleteButton: React.FC<
  MockExamQuestionDeleteButtonProps
> = ({ questionId }) => {
  const [deleteConfirmState, setDeleteConfirmState] = useState(false);
  const [deleteQuestionMutation, { loading: onDeleteLoading }] =
    useDeleteMockExamQuestion();
  const onDeleteButtonClick = () => setDeleteConfirmState(true);
  const onDeleteCancle = () => setDeleteConfirmState(false);
  const onDeleteConfirm = async () => {
    try {
      await deleteQuestionMutation({
        variables: {
          input: {
            id: questionId,
          },
        },
      });
      setDeleteConfirmState(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ConfirmButton
      open={deleteConfirmState}
      buttonLabel="삭제"
      buttonClassName="w-20"
      popupTitle="문제를 삭제하시겠습니까?"
      onButtonClick={onDeleteButtonClick}
      onCancel={onDeleteCancle}
      onConfirm={onDeleteConfirm}
      confirmLoading={onDeleteLoading}
    />
  );
};

export default MockExamQuestionDeleteButton;
