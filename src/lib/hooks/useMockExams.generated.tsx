import * as Types from '../../types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ReadAllMockExamQueryVariables = Types.Exact<{
  input: Types.ReadAllMockExamsInput;
}>;

export type ReadAllMockExamQuery = {
  __typename?: 'Query';
  readAllMockExam: {
    __typename?: 'ReadAllMockExamsOutput';
    mockExams: Array<{ __typename?: 'MockExam'; title: string; id: number }>;
  };
};

export type SearchMockExamQueryVariables = Types.Exact<{
  input: Types.SearchMockExamInput;
}>;

export type SearchMockExamQuery = {
  __typename?: 'Query';
  searchMockExam: {
    __typename?: 'SearchMockExamOutput';
    mockExams: Array<{ __typename?: 'MockExam'; id: number; title: string }>;
  };
};

export const ReadAllMockExamDocument = gql`
  query ReadAllMockExam($input: ReadAllMockExamsInput!) {
    readAllMockExam(input: $input) {
      mockExams {
        title
        id
      }
    }
  }
`;

export function useReadAllMockExamQuery(
  options: Omit<Urql.UseQueryArgs<ReadAllMockExamQueryVariables>, 'query'>
) {
  return Urql.useQuery<ReadAllMockExamQuery, ReadAllMockExamQueryVariables>({
    query: ReadAllMockExamDocument,
    ...options,
  });
}
export const SearchMockExamDocument = gql`
  query SearchMockExam($input: SearchMockExamInput!) {
    searchMockExam(input: $input) {
      mockExams {
        id
        title
      }
    }
  }
`;

export function useSearchMockExamQuery(
  options: Omit<Urql.UseQueryArgs<SearchMockExamQueryVariables>, 'query'>
) {
  return Urql.useQuery<SearchMockExamQuery, SearchMockExamQueryVariables>({
    query: SearchMockExamDocument,
    ...options,
  });
}
