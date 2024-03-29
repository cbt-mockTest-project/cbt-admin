import * as Types from '../../types';

import gql from 'graphql-tag';
import { FullQuestionPartsFragmentDoc } from './fragment.generated';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ExampleQueryQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.ReadAllMockExamCategoriesInput>;
}>;


export type ExampleQueryQuery = { __typename?: 'Query', readAllMockExamCategories: { __typename?: 'ReadAllMockExamCategoriesOutput', categories: Array<{ __typename?: 'MockExamCategory', name: string }> } };

export type ReadAllMockExamQueryVariables = Types.Exact<{
  input: Types.ReadAllMockExamsInput;
}>;


export type ReadAllMockExamQuery = { __typename?: 'Query', readAllMockExam: { __typename?: 'ReadAllMockExamsOutput', mockExams: Array<{ __typename?: 'MockExam', title: string, id: number, approved: boolean }> } };

export type SearchMockExamQueryVariables = Types.Exact<{
  input: Types.SearchMockExamInput;
}>;


export type SearchMockExamQuery = { __typename?: 'Query', searchMockExam: { __typename?: 'SearchMockExamOutput', mockExams: Array<{ __typename?: 'MockExam', id: number, title: string }> } };

export type ReadMockExamQuestionQueryVariables = Types.Exact<{
  input: Types.ReadMockExamQuestionInput;
}>;


export type ReadMockExamQuestionQuery = { __typename?: 'Query', readMockExamQuestion: { __typename?: 'ReadMockExamQuestionOutput', mockExamQusetion: { __typename?: 'MockExamQuestion', id: number, question: string, solution?: string | null, number: number, question_img?: Array<{ __typename?: 'MockExamImageType', url: string, name: string, uid: string }> | null, solution_img?: Array<{ __typename?: 'MockExamImageType', name: string, uid: string, url: string }> | null, mockExam: { __typename?: 'MockExam', title: string } } } };

export type ReadMockExamQueryVariables = Types.Exact<{
  input: Types.ReadMockExamInput;
}>;


export type ReadMockExamQuery = { __typename?: 'Query', readMockExam: { __typename?: 'ReadMockExamOutput', mockExam: { __typename?: 'MockExam', title: string, approved: boolean, mockExamQuestion: Array<{ __typename?: 'MockExamQuestion', question: string, solution?: string | null, id: number, number: number, approved: boolean, question_img?: Array<{ __typename?: 'MockExamImageType', url: string }> | null, solution_img?: Array<{ __typename?: 'MockExamImageType', url: string }> | null, mockExamQuestionFeedback: Array<{ __typename?: 'MockExamQuestionFeedback', content: string, id: number }> }> } } };

export type MeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeOutput', ok: boolean, error?: string | null, user?: { __typename?: 'User', nickname: string } | null } };

export type ReadMockExamQuestionNumbersQueryVariables = Types.Exact<{
  input: Types.ReadMockExamQuestionNumbersInput;
}>;


export type ReadMockExamQuestionNumbersQuery = { __typename?: 'Query', readMockExamQuestionNumbers: { __typename?: 'ReadMockExamQuestionNumbersOutput', questionNumbers: Array<number> } };


export const ExampleQueryDocument = gql`
    query ExampleQuery($input: ReadAllMockExamCategoriesInput) {
  readAllMockExamCategories(input: $input) {
    categories {
      name
    }
  }
}
    `;

export function useExampleQueryQuery(options?: Omit<Urql.UseQueryArgs<ExampleQueryQueryVariables>, 'query'>) {
  return Urql.useQuery<ExampleQueryQuery, ExampleQueryQueryVariables>({ query: ExampleQueryDocument, ...options });
};
export const ReadAllMockExamDocument = gql`
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

export function useReadAllMockExamQuery(options: Omit<Urql.UseQueryArgs<ReadAllMockExamQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadAllMockExamQuery, ReadAllMockExamQueryVariables>({ query: ReadAllMockExamDocument, ...options });
};
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

export function useSearchMockExamQuery(options: Omit<Urql.UseQueryArgs<SearchMockExamQueryVariables>, 'query'>) {
  return Urql.useQuery<SearchMockExamQuery, SearchMockExamQueryVariables>({ query: SearchMockExamDocument, ...options });
};
export const ReadMockExamQuestionDocument = gql`
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

export function useReadMockExamQuestionQuery(options: Omit<Urql.UseQueryArgs<ReadMockExamQuestionQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadMockExamQuestionQuery, ReadMockExamQuestionQueryVariables>({ query: ReadMockExamQuestionDocument, ...options });
};
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
    ${FullQuestionPartsFragmentDoc}`;

export function useReadMockExamQuery(options: Omit<Urql.UseQueryArgs<ReadMockExamQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadMockExamQuery, ReadMockExamQueryVariables>({ query: ReadMockExamDocument, ...options });
};
export const MeDocument = gql`
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

export function useMeQuery(options?: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};
export const ReadMockExamQuestionNumbersDocument = gql`
    query ReadMockExamQuestionNumbers($input: ReadMockExamQuestionNumbersInput!) {
  readMockExamQuestionNumbers(input: $input) {
    questionNumbers
  }
}
    `;

export function useReadMockExamQuestionNumbersQuery(options: Omit<Urql.UseQueryArgs<ReadMockExamQuestionNumbersQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadMockExamQuestionNumbersQuery, ReadMockExamQuestionNumbersQueryVariables>({ query: ReadMockExamQuestionNumbersDocument, ...options });
};