import { useMutation } from '@apollo/client';
import { Delet_Mock_Exam_Question_Feedback_Mutation } from '../grapql/mutation';
import { DeleteMockExamQuestionFeedbackMutation, DeleteMockExamQuestionFeedbackMutationVariables } from '../grapql/mutation.generated';
import { ReadMockExam_Query } from '../grapql/query';



export const useDeleteMockExamQuestion = () => {
  return useMutation<
    DeleteMockExamQuestionFeedbackMutation,
    DeleteMockExamQuestionFeedbackMutationVariables
  >(Delet_Mock_Exam_Question_Feedback_Mutation, {
    refetchQueries: [{ query: ReadMockExam_Query }, 'ReadMockExam'],
  });
};
