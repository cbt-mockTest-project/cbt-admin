import React, { SetStateAction, useEffect } from 'react';
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
  submitState?: boolean;
  setSubmitState?: React.Dispatch<SetStateAction<boolean>>;
}

const QuestionAndSolution: React.FC<QuestionAndSolutionProps> = ({
  type = 'write',
  prevData,
  submitState,
  setSubmitState,
}) => {
  const { control, setValue, formState, getValues } = useFormContext();
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
  useEffect(() => {
    if (submitState) {
      onQuestionImageChange([]);
      onSolutionImageChange([]);
      setSubmitState && setSubmitState(false);
    }
  }, [submitState]);

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
          <span>??????</span>
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
            <ErrorText content="????????? ???????????????." />
          )}
          <UploadImages
            onFileChange={onQuestionImageChange}
            defaultValues={question_img}
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <span>??????</span>
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
            <ErrorText content="????????? ???????????????." />
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
