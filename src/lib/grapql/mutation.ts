import { gql } from '@apollo/client';

export const CreateMockExam_MUTATION = gql`
  mutation CreateMockExam($input: CreateMockExamInput!) {
    createMockExam(input: $input) {
      error
      ok
    }
  }
`;

export const DeleteMockExamQuestionFeedback_MUTATION = gql`
  mutation DeleteMockExamQuestionFeedback(
    $input: DeleteMockExamQuestionFeedbackInput!
  ) {
    deleteMockExamQuestionFeedback(input: $input) {
      error
      ok
    }
  }
`;

export const UpdateApprovedStateOfMockExamQuestion_MUTATION = gql`
  mutation UpdateApprovedStateOfMockExamQuestion(
    $input: UpdateApprovedStateOfMockExamQuestionInput!
  ) {
    updateApprovedStateOfMockExamQuestion(input: $input) {
      ok
      error
      currentApprovedState
      questionId
    }
  }
`;

export const DeleteMockExamQuestion_MUTATION = gql`
  mutation DeleteMockExamQuestion($input: DeleteMockExamQuestionInput!) {
    deleteMockExamQuestion(input: $input) {
      error
      ok
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ok
      error
      token
    }
  }
`;

export const CreateMockExamQuestion_MUTATION = gql`
  mutation CreateMockExamQuestion($input: CreateMockExamQuestionInput!) {
    createMockExamQuestion(input: $input) {
      ok
      error
      questionId
    }
  }
`;

export const EditMockExamQuestion_MUTATION = gql`
  mutation EditMockExamQuestion($input: EditMockExamQuestionInput!) {
    editMockExamQuestion(input: $input) {
      ok
      error
    }
  }
`;

export const Revalidate_MUTATION = gql`
  mutation Revalidate($input: RevalidateInput!) {
    revalidate(input: $input) {
      error
      ok
    }
  }
`;

export const EditMockExam_MUTATION = gql`
  mutation EditMockExam($input: EditMockExamInput!) {
    editMockExam(input: $input) {
      error
      ok
    }
  }
`;
