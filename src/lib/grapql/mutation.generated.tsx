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

export type LoginMutationVariables = Types.Exact<{
  input: Types.LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, error?: string | null, token?: string | null } };

export type CreateMockExamQuestionMutationVariables = Types.Exact<{
  input: Types.CreateMockExamQuestionInput;
}>;


export type CreateMockExamQuestionMutation = { __typename?: 'Mutation', createMockExamQuestion: { __typename?: 'CreateMockExamQuestionOutput', ok: boolean, error?: string | null } };


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
  }
}
    `;

export function useCreateMockExamQuestionMutation() {
  return Urql.useMutation<CreateMockExamQuestionMutation, CreateMockExamQuestionMutationVariables>(CreateMockExamQuestionDocument);
};