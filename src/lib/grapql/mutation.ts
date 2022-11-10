import { gql } from '@apollo/client';

export const CreateMockExam_Mutation = gql`
  mutation CreateMockExam($input: CreateMockExamInput!) {
    createMockExam(input: $input) {
      error
      ok
    }
  }
`;

export const Delet_Mock_Exam_Question_Feedback_Mutation = gql`
  mutation DeleteMockExamQuestionFeedback(
    $input: DeleteMockExamQuestionFeedbackInput!
  ) {
    deleteMockExamQuestionFeedback(input: $input) {
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
    }
  }
`;
