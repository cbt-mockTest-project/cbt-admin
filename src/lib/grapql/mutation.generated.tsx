import * as Types from '../../types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CreateMockExamMutationVariables = Types.Exact<{
  input: Types.CreateMockExamInput;
}>;


export type CreateMockExamMutation = { __typename?: 'Mutation', createMockExam: { __typename?: 'CreateMockExamOutput', error?: string | null, ok: boolean } };

export type DeleteMockExamQuestionFeedbackMutationVariables = Types.Exact<{
  input: Types.DeleteMockExamQuestionFeedbackInput;
}>;


export type DeleteMockExamQuestionFeedbackMutation = { __typename?: 'Mutation', deleteMockExamQuestionFeedback: { __typename?: 'DeleteMockExamQuestionFeedbackOutput', error?: string | null, ok: boolean } };

export type UpdateApprovedStateOfMockExamQuestionMutationVariables = Types.Exact<{
  input: Types.UpdateApprovedStateOfMockExamQuestionInput;
}>;


export type UpdateApprovedStateOfMockExamQuestionMutation = { __typename?: 'Mutation', updateApprovedStateOfMockExamQuestion: { __typename?: 'UpdateApprovedStateOfMockExamQuestionOutput', ok: boolean, error?: string | null, currentApprovedState: boolean, questionId: number } };

export type DeleteMockExamQuestionMutationVariables = Types.Exact<{
  input: Types.DeleteMockExamQuestionInput;
}>;


export type DeleteMockExamQuestionMutation = { __typename?: 'Mutation', deleteMockExamQuestion: { __typename?: 'DeleteMockExamQuestionOutput', error?: string | null, ok: boolean } };

export type LoginMutationVariables = Types.Exact<{
  input: Types.LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, error?: string | null, token?: string | null } };

export type CreateMockExamQuestionMutationVariables = Types.Exact<{
  input: Types.CreateMockExamQuestionInput;
}>;


export type CreateMockExamQuestionMutation = { __typename?: 'Mutation', createMockExamQuestion: { __typename?: 'CreateMockExamQuestionOutput', ok: boolean, error?: string | null, questionId?: number | null } };

export type EditMockExamQuestionMutationVariables = Types.Exact<{
  input: Types.EditMockExamQuestionInput;
}>;


export type EditMockExamQuestionMutation = { __typename?: 'Mutation', editMockExamQuestion: { __typename?: 'EditMockExamQuestionOutput', ok: boolean, error?: string | null } };

export type RevalidateMutationVariables = Types.Exact<{
  input: Types.RevalidateInput;
}>;


export type RevalidateMutation = { __typename?: 'Mutation', revalidate: { __typename?: 'RevalidateOutput', error?: string | null, ok: boolean } };

export type EditMockExamMutationVariables = Types.Exact<{
  input: Types.EditMockExamInput;
}>;


export type EditMockExamMutation = { __typename?: 'Mutation', editMockExam: { __typename?: 'EditMockExamOutput', error?: string | null, ok: boolean } };


export const CreateMockExamDocument = gql`
    mutation CreateMockExam($input: CreateMockExamInput!) {
  createMockExam(input: $input) {
    error
    ok
  }
}
    `;

export function useCreateMockExamMutation() {
  return Urql.useMutation<CreateMockExamMutation, CreateMockExamMutationVariables>(CreateMockExamDocument);
};
export const DeleteMockExamQuestionFeedbackDocument = gql`
    mutation DeleteMockExamQuestionFeedback($input: DeleteMockExamQuestionFeedbackInput!) {
  deleteMockExamQuestionFeedback(input: $input) {
    error
    ok
  }
}
    `;

export function useDeleteMockExamQuestionFeedbackMutation() {
  return Urql.useMutation<DeleteMockExamQuestionFeedbackMutation, DeleteMockExamQuestionFeedbackMutationVariables>(DeleteMockExamQuestionFeedbackDocument);
};
export const UpdateApprovedStateOfMockExamQuestionDocument = gql`
    mutation UpdateApprovedStateOfMockExamQuestion($input: UpdateApprovedStateOfMockExamQuestionInput!) {
  updateApprovedStateOfMockExamQuestion(input: $input) {
    ok
    error
    currentApprovedState
    questionId
  }
}
    `;

export function useUpdateApprovedStateOfMockExamQuestionMutation() {
  return Urql.useMutation<UpdateApprovedStateOfMockExamQuestionMutation, UpdateApprovedStateOfMockExamQuestionMutationVariables>(UpdateApprovedStateOfMockExamQuestionDocument);
};
export const DeleteMockExamQuestionDocument = gql`
    mutation DeleteMockExamQuestion($input: DeleteMockExamQuestionInput!) {
  deleteMockExamQuestion(input: $input) {
    error
    ok
  }
}
    `;

export function useDeleteMockExamQuestionMutation() {
  return Urql.useMutation<DeleteMockExamQuestionMutation, DeleteMockExamQuestionMutationVariables>(DeleteMockExamQuestionDocument);
};
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    ok
    error
    token
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const CreateMockExamQuestionDocument = gql`
    mutation CreateMockExamQuestion($input: CreateMockExamQuestionInput!) {
  createMockExamQuestion(input: $input) {
    ok
    error
    questionId
  }
}
    `;

export function useCreateMockExamQuestionMutation() {
  return Urql.useMutation<CreateMockExamQuestionMutation, CreateMockExamQuestionMutationVariables>(CreateMockExamQuestionDocument);
};
export const EditMockExamQuestionDocument = gql`
    mutation EditMockExamQuestion($input: EditMockExamQuestionInput!) {
  editMockExamQuestion(input: $input) {
    ok
    error
  }
}
    `;

export function useEditMockExamQuestionMutation() {
  return Urql.useMutation<EditMockExamQuestionMutation, EditMockExamQuestionMutationVariables>(EditMockExamQuestionDocument);
};
export const RevalidateDocument = gql`
    mutation Revalidate($input: RevalidateInput!) {
  revalidate(input: $input) {
    error
    ok
  }
}
    `;

export function useRevalidateMutation() {
  return Urql.useMutation<RevalidateMutation, RevalidateMutationVariables>(RevalidateDocument);
};
export const EditMockExamDocument = gql`
    mutation EditMockExam($input: EditMockExamInput!) {
  editMockExam(input: $input) {
    error
    ok
  }
}
    `;

export function useEditMockExamMutation() {
  return Urql.useMutation<EditMockExamMutation, EditMockExamMutationVariables>(EditMockExamDocument);
};