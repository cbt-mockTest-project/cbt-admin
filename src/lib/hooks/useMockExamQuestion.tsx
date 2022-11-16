import { useLazyQuery, useMutation } from '@apollo/client';
import {
  CreateMockExamQuestion_MUTATION,
  DeleteMockExamQuestionFeedback_MUTATION,
  DeleteMockExamQuestion_MUTATION,
  UpdateApprovedStateOfMockExamQuestion_MUTATION,
} from '../grapql/mutation';
import {
  CreateMockExamQuestionMutation,
  CreateMockExamQuestionMutationVariables,
  DeleteMockExamQuestionFeedbackMutation,
  DeleteMockExamQuestionFeedbackMutationVariables,
  DeleteMockExamQuestionMutation,
  UpdateApprovedStateOfMockExamQuestionMutation,
  UpdateApprovedStateOfMockExamQuestionMutationVariables,
} from '../grapql/mutation.generated';
import {
  ReadMockExamQuestionNumbers_Query,
  ReadMockExam_Query,
} from '../grapql/query';
import {
  ReadMockExamQuestionNumbersQuery,
  ReadMockExamQuestionNumbersQueryVariables,
} from '../grapql/query.generated';

export const useDeleteMockExamQuestionFeedBack = () => {
  return useMutation<
    DeleteMockExamQuestionFeedbackMutation,
    DeleteMockExamQuestionFeedbackMutationVariables
  >(DeleteMockExamQuestionFeedback_MUTATION, {
    refetchQueries: [{ query: ReadMockExam_Query }, 'ReadMockExam'],
  });
};

export const useDeleteMockExamQuestion = () => {
  return useMutation<
    DeleteMockExamQuestionMutation,
    DeleteMockExamQuestionFeedbackMutationVariables
  >(DeleteMockExamQuestion_MUTATION, {
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

export const useUpdateApprovedStateOfQuestion = () => {
  return useMutation<
    UpdateApprovedStateOfMockExamQuestionMutation,
    UpdateApprovedStateOfMockExamQuestionMutationVariables
  >(UpdateApprovedStateOfMockExamQuestion_MUTATION, {
    refetchQueries: [{ query: ReadMockExam_Query }, 'ReadMockExam'],
  });
};
