import { Button, message } from 'antd';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Layout from '../../src/components/layout/Layout';
import ExamSelect from '../../src/components/mockExamsWrite/ExamSelect';
import QuestionAndSolution from '../../src/components/mockExamsWrite/QuestionAndSolution';
import useInput from '../../src/lib/hooks/useInput';
import { useCreateMockExamQuestion } from '../../src/lib/hooks/useMockExamQuestion';
import { CreateMockExamQuestionInput } from '../../src/types';

const Write = () => {
  const methods = useForm<CreateMockExamQuestionInput>();
  const {
    value: number,
    onChange: onChangeNumber,
    setValue: setNumber,
  } = useInput();
  const [createMockExamQuestionMutation] = useCreateMockExamQuestion();
  const [submitState, setSubmitState] = useState(false);
  const onSubmit = async (data: CreateMockExamQuestionInput) => {
    try {
      const res = await createMockExamQuestionMutation({
        variables: { input: data },
      });
      if (res.data?.createMockExamQuestion.error) {
        return message.error(res.data?.createMockExamQuestion.error);
      }
      message.success('문제가 등록되었습니다.');
      setSubmitState(true);
      setNumber(Number(number) + 1);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <ExamSelect
              number={Number(number)}
              onChangeNumber={onChangeNumber}
            />
            <QuestionAndSolution
              submitState={submitState}
              setSubmitState={setSubmitState}
            />
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
