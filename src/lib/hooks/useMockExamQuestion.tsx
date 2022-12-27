import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  CreateMockExamQuestion_MUTATION,
  DeleteMockExamQuestionFeedback_MUTATION,
  DeleteMockExamQuestion_MUTATION,
  EditMockExamQuestion_MUTATION,
  UpdateApprovedStateOfMockExamQuestion_MUTATION,
} from '../grapql/mutation';
import {
  CreateMockExamQuestionMutation,
  CreateMockExamQuestionMutationVariables,
  DeleteMockExamQuestionFeedbackMutation,
  DeleteMockExamQuestionFeedbackMutationVariables,
  DeleteMockExamQuestionMutation,
  EditMockExamQuestionMutation,
  EditMockExamQuestionMutationVariables,
  UpdateApprovedStateOfMockExamQuestionMutation,
  UpdateApprovedStateOfMockExamQuestionMutationVariables,
} from '../grapql/mutation.generated';
import {
  ReadMockExamQuestionNumbers_Query,
  ReadMockExamQuestion_Query,
  ReadMockExam_Query,
} from '../grapql/query';
import {
  ReadMockExamQuestionNumbersQuery,
  ReadMockExamQuestionNumbersQueryVariables,
  ReadMockExamQuestionQuery,
  ReadMockExamQuestionQueryVariables,
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

export const useLazyReadMockExamQuestion = () => {
  return useLazyQuery<
    ReadMockExamQuestionQuery,
    ReadMockExamQuestionQueryVariables
  >(ReadMockExamQuestion_Query);
};

export const useReadMockExamQuestion = () => {
  const router = useRouter();
  return useQuery<
    ReadMockExamQuestionQuery,
    ReadMockExamQuestionQueryVariables
  >(ReadMockExamQuestion_Query, {
    variables: {
      input: {
        questionId: Number(router.query.id),
        examId: Number(router.query.e),
      },
    },
    fetchPolicy: 'no-cache',
  });
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

export const useEditMockExamQuestion = () => {
  return useMutation<
    EditMockExamQuestionMutation,
    EditMockExamQuestionMutationVariables
  >(EditMockExamQuestion_MUTATION);
};
