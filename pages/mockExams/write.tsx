import { Button, message } from 'antd';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Layout from '../../src/components/layout/Layout';
import ExamSelect from '../../src/components/mockExamsWrite/ExamSelect';
import QuestionAndSolution from '../../src/components/mockExamsWrite/QuestionAndSolution';
import { useCreateMockExamQuestion } from '../../src/lib/hooks/useMockExamQuestion';
import { CreateMockExamQuestionInput } from '../../src/types';

const Write = () => {
  const methods = useForm<CreateMockExamQuestionInput>();
  const [createMockExamQuestionMutation] = useCreateMockExamQuestion();
  const onSubmit = async (data: CreateMockExamQuestionInput) => {
    try {
      const res = await createMockExamQuestionMutation({
        variables: { input: data },
      });
      if (res.data?.createMockExamQuestion.error) {
        return message.error(res.data?.createMockExamQuestion.error);
      }
      message.success('문제가 등록되었습니다.');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <ExamSelect />
            <QuestionAndSolution />
            <Button type="primary" htmlType="submit">
              문제등록
            </Button>
          </div>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default Write;
