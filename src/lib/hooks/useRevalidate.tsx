import { useMutation } from '@apollo/client';
import { Revalidate_MUTATION } from '../grapql/mutation';
import {
  RevalidateMutation,
  RevalidateMutationVariables,
} from '../grapql/mutation.generated';

export const useRevalidate = () =>
  useMutation<RevalidateMutation, RevalidateMutationVariables>(
    Revalidate_MUTATION
  );
