import { useLazyQuery, useMutation } from '@apollo/client';
import {
  CreateMockExamQuestion_MUTATION,
  Delet_Mock_Exam_Question_Feedback_Mutation,
} from '../grapql/mutation';
import {
  CreateMockExamQuestionMutation,
  CreateMockExamQuestionMutationVariables,
  DeleteMockExamQuestionFeedbackMutation,
  DeleteMockExamQuestionFeedbackMutationVariables,
} from '../grapql/mutation.generated';
import {
  ReadMockExamQuestionNumbers_Query,
  ReadMockExam_Query,
} from '../grapql/query';
import {
  ReadMockExamQuestionNumbersQuery,
  ReadMockExamQuestionNumbersQueryVariables,
} from '../grapql/query.generated';

export const useDeleteMockExamQuestion = () => {
  return useMutation<
    DeleteMockExamQuestionFeedbackMutation,
    DeleteMockExamQuestionFeedbackMutationVariables
  >(Delet_Mock_Exam_Question_Feedback_Mutation, {
    refetchQueries: [{ query: ReadMockExam_Query }, 'ReadMockExam'],
  });
};

export const useLazyReadMockExamQuestionNumbers = () => {
  return useLazyQuery<
    ReadMockExamQuestionNumbersQuery,
    ReadMockExamQuestionNumbersQueryVariables
  >(ReadMockExamQuestionNumbers_Query);
};

export const useCreateMockExamQuestion = () => {
  return useMutation<
    CreateMockExamQuestionMutation,
    CreateMockExamQuestionMutationVariables
  >(CreateMockExamQuestion_MUTATION, {
    refetchQueries: [
      { query: ReadMockExamQuestionNumbers_Query },
      'ReadMockExamQuestionNumbers',
    ],
  });
};
