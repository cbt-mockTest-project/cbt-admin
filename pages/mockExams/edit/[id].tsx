import { Button, message } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Layout from '../../../src/components/layout/Layout';
import QuestionAndSolution from '../../../src/components/mockExamsWrite/QuestionAndSolution';
import {
  useEditMockExamQuestion,
  useReadMockExamQuestion,
} from '../../../src/lib/hooks/useMockExamQuestion';
import { EditMockExamQuestionInput } from '../../../src/types';
import _ from 'lodash';

const Edit = () => {
  const router = useRouter();
  const [editMockExamQuestionMutation] = useEditMockExamQuestion();
  const prevDataShema: Omit<EditMockExamQuestionInput, 'id'> = {
    question: '',
    question_img: [],
    solution: '',
    solution_img: [],
  };
  const methods = useForm<EditMockExamQuestionInput>({
    defaultValues: prevDataShema,
  });
  const { data, loading } = useReadMockExamQuestion();
  if (!data || loading) {
    return null;
  }
  const { mockExamQusetion } = data.readMockExamQuestion;
  const prevData = _.pick(mockExamQusetion, [
    'question',
    'question_img',
    'solution',
    'solution_img',
  ]);
  const onSubmit = async (data: EditMockExamQuestionInput) => {
    try {
      const res = await editMockExamQuestionMutation({
        variables: { input: { ...data, id: Number(router.query.id) } },
      });
      if (res.data?.editMockExamQuestion.error) {
        return message.error(res.data?.editMockExamQuestion.error);
      }
      message.success('문제가 수정되었습니다.');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <h1 className=" text-2xl">
              {mockExamQusetion.mockExam.title} {mockExamQusetion.number}번 문제
            </h1>
            <QuestionAndSolution prevData={prevData} type="edit" />
            <Button type="primary" htmlType="submit">
              문제수정
            </Button>
          </div>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default Edit;
