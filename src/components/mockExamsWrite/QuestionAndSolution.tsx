import React, { useEffect } from 'react';
import { UploadFile } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorText from '../common/ErrorText';
import UploadImages from './UploadImages';
import _ from 'lodash';
import { EditMockExamQuestionInput } from '../../types';

interface QuestionAndSolutionProps {
  type?: 'edit' | 'write';
  prevData?: Omit<EditMockExamQuestionInput, 'id'>;
}

const QuestionAndSolution: React.FC<QuestionAndSolutionProps> = ({
  type = 'write',
  prevData,
}) => {
  const { control, setValue, formState } = useFormContext();
  let question = '';
  let solution = '';
  let question_img: UploadFile[] = [];
  let solution_img: UploadFile[] = [];
  if (prevData) {
    const convertedQuestionImages = prevData.question_img?.map((el) =>
      _.pick(el, ['name', 'url', 'uid'])
    );
    const convertedSolutionImages = prevData.solution_img?.map((el) =>
      _.pick(el, ['name', 'url', 'uid'])
    );
    question = String(prevData.question);
    solution = String(prevData.solution);
    question_img = convertedQuestionImages || [];
    solution_img = convertedSolutionImages || [];
  }
  useEffect(() => {
    if (prevData && type === 'edit') {
      setValue('question', question);
      setValue('solution', solution);
      setValue('question_img', question_img);
      setValue('solution_img', solution_img);
    }
  }, []);

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
              <TextArea
                onChange={field.onChange}
                className="h-60"
                defaultValue={question}
              />
            )}
          />
          {formState.errors.question?.type === 'required' && (
            <ErrorText content="문제는 필수입니다." />
          )}
          <UploadImages
            onFileChange={onQuestionImageChange}
            defaultValues={question_img}
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <span>정답</span>
          <Controller
            name="solution"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextArea
                onChange={field.onChange}
                className="h-60"
                defaultValue={solution}
              />
            )}
          />
          {formState.errors.question?.type === 'required' && (
            <ErrorText content="정답은 필수입니다." />
          )}
          <UploadImages
            onFileChange={onSolutionImageChange}
            defaultValues={solution_img}
          />
        </div>
      </div>
    </>
  );
};

export default QuestionAndSolution;
