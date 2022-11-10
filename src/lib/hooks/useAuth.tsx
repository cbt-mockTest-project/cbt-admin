import { useMutation, useQuery } from '@apollo/client';
import { setCookie } from 'cookies-next';
import { authTokenVar } from '../../modules/apollo';
import { LOGIN_MUTATION } from '../grapql/mutation';
import {
  LoginMutation,
  LoginMutationVariables,
} from '../grapql/mutation.generated';
import { ME_QUERY } from '../grapql/query';
import { MeQuery, MeQueryVariables } from '../grapql/query.generated';

export const useMe = () => {
  return useQuery<MeQuery, MeQueryVariables>(ME_QUERY, {
    fetchPolicy: 'network-only',
  });
};

export const useLogin = () => {
  const onCompleted = (data: LoginMutation) => {
    if (data.login.token) {
      setCookie('jwt-token', data.login.token);
      authTokenVar(data.login.token);
    }
  };
  return useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION, {
    onCompleted,
  });
};
