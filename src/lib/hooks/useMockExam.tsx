import { gql, useMutation } from '@apollo/client';
import {
  DeleteMockExamQuestionFeedbackMutation,
  DeleteMockExamQuestionFeedbackMutationVariables,
} from './useMockExam.generated';

import { ReadMockExam_Query } from './useMockExams';

const DELETE_MOCK_EXAM_QUESTION_FEEDBACK_MUTATION = gql`
  mutation DeleteMockExamQuestionFeedback(
    $input: DeleteMockExamQuestionFeedbackInput!
  ) {
    deleteMockExamQuestionFeedback(input: $input) {
      error
      ok
    }
  }
`;

export const useDeleteMockExamQuestion = (id: number) => {
  return useMutation<
    DeleteMockExamQuestionFeedbackMutation,
    DeleteMockExamQuestionFeedbackMutationVariables
  >(DELETE_MOCK_EXAM_QUESTION_FEEDBACK_MUTATION, {
    refetchQueries: [{ query: ReadMockExam_Query }, 'ReadMockExam'],
  });
};
