import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  ReadAllMockExamQuery,
  ReadAllMockExamQueryVariables,
  ReadMockExamQuery,
  ReadMockExamQueryVariables,
  SearchMockExamQuery,
  SearchMockExamQueryVariables,
} from './useMockExams.generated';

const ReadAllMockExam_QUERY = gql`
  query ReadAllMockExam($input: ReadAllMockExamsInput!) {
    readAllMockExam(input: $input) {
      mockExams {
        title
        id
      }
    }
  }
`;

const SearchMockExam_QUERY = gql`
  query SearchMockExam($input: SearchMockExamInput!) {
    searchMockExam(input: $input) {
      mockExams {
        id
        title
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
        }
      }
    }
  }
`;

export const useReadMockExam = () => {
  const router = useRouter();
  return useQuery<ReadMockExamQuery, ReadMockExamQueryVariables>(
    ReadMockExam_Query,
    {
      variables: {
        input: {
          id: Number(router.query.id) || 0,
        },
      },
    }
  );
};
export const useReadMockExams = () => {
  const router = useRouter();
  return useQuery<ReadAllMockExamQuery, ReadAllMockExamQueryVariables>(
    ReadAllMockExam_QUERY,
    {
      variables: {
        input: {
          query: router.query.s === undefined ? '' : String(router.query.s),
        },
      },
    }
  );
};

export const useSearchMockExams = () =>
  useLazyQuery<SearchMockExamQuery, SearchMockExamQueryVariables>(
    SearchMockExam_QUERY
  );
