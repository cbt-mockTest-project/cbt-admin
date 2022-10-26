import { Button, Input } from 'antd';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ErrorText from '../../src/components/common/ErrorText';
import Layout from '../../src/components/layout/Layout';
import { useLogin } from '../../src/lib/hooks/useAuth';
import { authTokenVar } from '../../src/modules/apollo';

interface LoginForm {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const { handleSubmit, control, formState } = useForm<LoginForm>();
  const [loginMutation, { data: loginMutationData }] = useLogin();
  const onSubmit = (data: LoginForm) => {
    loginMutation({
      variables: {
        input: data,
      },
    });
  };
  useEffect(() => {
    if (authTokenVar()) router.push('/');
  }, [authTokenVar()]);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center flex-col gap-6 mt-36 mx-auto xl:w-96 lg:w-4/12 md:w-6/12 w-10/12">
          <div className="flex gap-6 items-center w-full">
            <label className="w-4/12">Email</label>
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({ field }) => (
                <Input onChange={field.onChange} type="email" />
              )}
            />
          </div>
          {formState.errors.email?.type === 'required' && (
            <ErrorText content="이메일을 입력해주세요" />
          )}
          <div className="flex gap-6 items-center w-full">
            <label className="w-4/12">Password</label>
            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({ field }) => (
                <Input onChange={field.onChange} type="password" />
              )}
            />
          </div>
          {formState.errors.password?.type === 'required' && (
            <ErrorText content="비밀번호를 입력해주세요" />
          )}
          <Button className="w-full" htmlType="submit">
            로그인
          </Button>
          {loginMutationData?.login.error && (
            <ErrorText content={loginMutationData?.login.error} />
          )}
        </div>
      </form>
    </Layout>
  );
};

export default Login;
