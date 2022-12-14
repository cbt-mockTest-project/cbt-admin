import { gql } from '@apollo/client';

export const FULL_QUESTION_FRAGMENT = gql`
  fragment FullQuestionParts on MockExamQuestion {
    question
    solution
    question_img {
      url
    }
    solution_img {
      url
    }
    id
    mockExamQuestionFeedback {
      content
      id
    }
    number
    approved
  }
`;
