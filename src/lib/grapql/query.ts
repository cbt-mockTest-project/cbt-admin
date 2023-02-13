import { gql } from '@apollo/client';
import { FULL_QUESTION_FRAGMENT } from './fragment';

export const ReadAllMockExamCategory_Query = gql`
  query ExampleQuery($input: ReadAllMockExamCategoriesInput) {
    readAllMockExamCategories(input: $input) {
      categories {
        name
      }
    }
  }
`;

export const ReadAllMockExam_QUERY = gql`
  query ReadAllMockExam($input: ReadAllMockExamsInput!) {
    readAllMockExam(input: $input) {
      mockExams {
        title
        id
        approved
      }
    }
  }
`;

export const SearchMockExam_QUERY = gql`
  query SearchMockExam($input: SearchMockExamInput!) {
    searchMockExam(input: $input) {
      mockExams {
        id
        title
      }
    }
  }
`;

export const ReadMockExamQuestion_Query = gql`
  query ReadMockExamQuestion($input: ReadMockExamQuestionInput!) {
    readMockExamQuestion(input: $input) {
      mockExamQusetion {
        id
        question
        question_img {
          url
          name
          uid
        }
        solution
        solution_img {
          name
          uid
          url
        }
        number
        mockExam {
          title
        }
      }
    }
  }
`;

export const ReadMockExam_Query = gql`
  query ReadMockExam($input: ReadMockExamInput!) {
    readMockExam(input: $input) {
      mockExam {
        title
        approved
        mockExamQuestion {
          ...FullQuestionParts
        }
      }
    }
  }
  ${FULL_QUESTION_FRAGMENT}
`;

export const ME_QUERY = gql`
  query Me {
    me {
      ok
      user {
        nickname
      }
      error
    }
  }
`;

export const ReadMockExamQuestionNumbers_Query = gql`
  query ReadMockExamQuestionNumbers($input: ReadMockExamQuestionNumbersInput!) {
    readMockExamQuestionNumbers(input: $input) {
      questionNumbers
    }
  }
`;
