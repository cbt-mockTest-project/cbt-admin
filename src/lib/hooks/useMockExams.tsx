import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { CreateMockExam_Mutation } from '../grapql/mutation';
import { CreateMockExamMutation, CreateMockExamMutationVariables } from '../grapql/mutation.generated';
import { ReadAllMockExamCategory_Query, ReadAllMockExam_QUERY, ReadMockExam_Query, SearchMockExam_QUERY } from '../grapql/query';
import { ReadAllMockExamCategoriesQuery, ReadAllMockExamCategoriesQueryVariables, ReadAllMockExamQuery, ReadAllMockExamQueryVariables, ReadMockExamQuery, ReadMockExamQueryVariables, SearchMockExamQuery, SearchMockExamQueryVariables } from '../grapql/query.generated';




export const useReadAllMockExamCategory = () => {
  return useQuery<
    ReadAllMockExamCategoriesQuery,
    ReadAllMockExamCategoriesQueryVariables
  >(ReadAllMockExamCategory_Query);
};

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

export const useReadAllMockExams = () => {
  const router = useRouter();
  return useQuery<ReadAllMockExamQuery, ReadAllMockExamQueryVariables>(
    ReadAllMockExam_QUERY,
    {
      variables: {
        input: {
          query: router.query.s === undefined ? '' : String(router.query.s),
          category: router.query.c === undefined ? '' : String(router.query.c),
        },
      },
    }
  );
};

export const useReadAllMockExamsByCategory = () => {
  return useLazyQuery<ReadAllMockExamQuery, ReadAllMockExamQueryVariables>(
    ReadAllMockExam_QUERY
  );
};

export const useSearchMockExams = () =>
  useLazyQuery<SearchMockExamQuery, SearchMockExamQueryVariables>(
    SearchMockExam_QUERY
  );

export const useCreateMockExam = () => {
  return useMutation<CreateMockExamMutation, CreateMockExamMutationVariables>(
    CreateMockExam_Mutation
  );
};
