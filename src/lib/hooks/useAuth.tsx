import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_MUTATION } from '../grapql/mutation';
import {
  LoginMutation,
  LoginMutationVariables,
} from '../grapql/mutation.generated';
import { ME_QUERY } from '../grapql/query';
import { MeQuery, MeQueryVariables } from '../grapql/query.generated';

export const useMe = () => useQuery<MeQuery, MeQueryVariables>(ME_QUERY);

export const useLogin = () =>
  useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION);
