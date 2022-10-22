import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  ReadAllMockExamQuery,
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

export const useReadMockExams = () => {
  const router = useRouter();
  return useQuery<ReadAllMockExamQuery>(ReadAllMockExam_QUERY, {
    variables: {
      input: {
        query: router.query.s || '',
      },
    },
  });
};

export const useSearchMockExams = () =>
  useLazyQuery<SearchMockExamQuery, SearchMockExamQueryVariables>(
    SearchMockExam_QUERY
  );
