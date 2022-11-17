import React, { useState } from 'react';
import { useUpdateApprovedStateOfQuestion } from '../../lib/hooks/useMockExamQuestion';
import ConfirmButton from '../common/ConfirmButton';

interface MockExamQuestionApproveButtonProps {
  questionId: number;
  disabled?: boolean;
}

const MockExamQuestionApproveButton: React.FC<
  MockExamQuestionApproveButtonProps
> = ({ questionId, disabled }) => {
  const [deleteConfirmState, setDeleteConfirmState] = useState(false);
  const [updateApprovedStateOfQuestionMutation, { loading }] =
    useUpdateApprovedStateOfQuestion();
  const onButtonClick = () => setDeleteConfirmState(true);
  const onCancle = () => setDeleteConfirmState(false);
  const onUpdateApprovedState = async () => {
    try {
      await updateApprovedStateOfQuestionMutation({
        variables: {
          input: {
            questionId,
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
      buttonLabel="승인"
      buttonClassName="w-20"
      popupTitle="문제를 승인하시겠습니까?"
      onButtonClick={onButtonClick}
      onCancel={onCancle}
      onConfirm={onUpdateApprovedState}
      confirmLoading={loading}
      disabled={disabled}
    />
  );
};

export default MockExamQuestionApproveButton;
