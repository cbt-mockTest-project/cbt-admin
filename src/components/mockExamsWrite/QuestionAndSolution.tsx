import React from 'react';
import { UploadFile } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorText from '../common/ErrorText';
import UploadImages from './UploadImages';

const QuestionAndSolution = () => {
  const { control, setValue, formState } = useFormContext();
  const onQuestionImageChange = (questionImages: UploadFile[]) => {
    setValue('question_img', questionImages);
  };
  const onSolutionImageChange = (solutionImages: UploadFile[]) => {
    setValue('solution_img', solutionImages);
  };

  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col flex-1 gap-2">
          <span>문제</span>
          <Controller
            name="question"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextArea onChange={field.onChange} className="h-60" />
            )}
          />
          {formState.errors.question?.type === 'required' && (
            <ErrorText content="문제는 필수입니다." />
          )}
          <UploadImages onFileChange={onQuestionImageChange} />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <span>정답</span>
          <Controller
            name="solution"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextArea onChange={field.onChange} className="h-60" />
            )}
          />
          {formState.errors.question?.type === 'required' && (
            <ErrorText content="정답은 필수입니다." />
          )}
          <UploadImages onFileChange={onSolutionImageChange} />
        </div>
      </div>
    </>
  );
};

export default QuestionAndSolution;
