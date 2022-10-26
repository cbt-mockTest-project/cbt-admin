import * as Types from '../../types';

import gql from 'graphql-tag';
import { FullQuestionPartsFragmentDoc } from './fragment.generated';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ReadAllMockExamCategoriesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type ReadAllMockExamCategoriesQuery = {
  __typename?: 'Query';
  readAllMockExamCategories: {
    __typename?: 'ReadAllMockExamCategoriesOutput';
    categories: Array<{ __typename?: 'MockExamCategory'; name: string }>;
  };
};

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

export type ReadMockExamQueryVariables = Types.Exact<{
  input: Types.ReadMockExamInput;
}>;

export type ReadMockExamQuery = {
  __typename?: 'Query';
  readMockExam: {
    __typename?: 'ReadMockExamOutput';
    mockExam: {
      __typename?: 'MockExam';
      title: string;
      approved: boolean;
      mockExamQuestion: Array<{
        __typename?: 'MockExamQuestion';
        question: string;
        solution: string;
        id: number;
        question_img?: Array<{
          __typename?: 'MockExamQuestionImage';
          url: string;
        }> | null;
        solution_img?: Array<{
          __typename?: 'MockExamQuestionImage';
          url: string;
        }> | null;
        mockExamQuestionFeedback: Array<{
          __typename?: 'MockExamQuestionFeedback';
          content: string;
          id: number;
        }>;
      }>;
    };
  };
};

export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me: { __typename?: 'User'; id: number; nickname: string };
};

export const ReadAllMockExamCategoriesDocument = gql`
  query ReadAllMockExamCategories {
    readAllMockExamCategories {
      categories {
        name
      }
    }
  }
`;

export function useReadAllMockExamCategoriesQuery(
  options?: Omit<
    Urql.UseQueryArgs<ReadAllMockExamCategoriesQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    ReadAllMockExamCategoriesQuery,
    ReadAllMockExamCategoriesQueryVariables
  >({ query: ReadAllMockExamCategoriesDocument, ...options });
}
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
export const ReadMockExamDocument = gql`
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
  ${FullQuestionPartsFragmentDoc}
`;

export function useReadMockExamQuery(
  options: Omit<Urql.UseQueryArgs<ReadMockExamQueryVariables>, 'query'>
) {
  return Urql.useQuery<ReadMockExamQuery, ReadMockExamQueryVariables>({
    query: ReadMockExamDocument,
    ...options,
  });
}
export const MeDocument = gql`
  query Me {
    me {
      id
      nickname
    }
  }
`;

export function useMeQuery(
  options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>
) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({
    query: MeDocument,
    ...options,
  });
}
