import { Button, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import useInput from '../../lib/hooks/useInput';
import UploadImages from './UploadImages';

interface MultipleChoiceProps {
  questionId: number;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ questionId }) => {
  const { value: choice_01, onChange: onChangeChoice_01 } = useInput();
  const { value: choice_02, onChange: onChangeChoice_02 } = useInput();
  const { value: choice_03, onChange: onChangeChoice_03 } = useInput();
  const { value: choice_04, onChange: onChangeChoice_04 } = useInput();
  const { value: choice_05, onChange: onChangeChoice_05 } = useInput();
  const { value: choiceImg_01, onChange: onChangeChoiceImg_01 } = useInput();
  const { value: choiceImg_02, onChange: onChangeChoiceImg_02 } = useInput();
  const { value: choiceImg_03, onChange: onChangeChoiceImg_03 } = useInput();
  const { value: choiceImg_04, onChange: onChangeChoiceImg_04 } = useInput();
  const { value: choiceImg_05, onChange: onChangeChoiceImg_05 } = useInput();
  const onCreateMultipeChoice = () => {
    console.log('choice_01', choice_01);
    console.log('choice_02', choice_02);
    console.log('choice_03', choice_03);
    console.log('choice_04', choice_04);
    console.log('choice_05', choice_05);
  };
  return (
    <div className="flex flex-col">
      <label>문제번호</label>
      <Input value={questionId} />
      <div className="flex gap-3 mt-4 items-center">
        <label className="w-20">1번 문항</label>
        <TextArea
          className="w-6/12"
          value={choice_01}
          onChange={onChangeChoice_01}
        />
        <UploadImages
          onFileChange={(fileList) => {
            console.log(fileList);
          }}
          defaultValues={[]}
        />
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <label className="w-20">2번 문항</label>
        <TextArea
          className="w-6/12"
          value={choice_02}
          onChange={onChangeChoice_02}
        />
        <UploadImages
          onFileChange={(fileList) => {
            console.log(fileList);
          }}
          defaultValues={[]}
        />
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <label className="w-20">3번 문항</label>
        <TextArea
          className="w-6/12"
          value={choice_03}
          onChange={onChangeChoice_03}
        />
        <UploadImages
          onFileChange={(fileList) => {
            console.log(fileList);
          }}
          defaultValues={[]}
        />
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <label className="w-20">4번 문항</label>
        <TextArea
          className="w-6/12"
          value={choice_04}
          onChange={onChangeChoice_04}
        />
        <UploadImages
          onFileChange={(fileList) => {
            console.log(fileList);
          }}
          defaultValues={[]}
        />
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <label className="w-20">5번 문항</label>
        <TextArea
          className="w-6/12"
          value={choice_05}
          onChange={onChangeChoice_05}
        />
        <UploadImages
          onFileChange={(fileList) => {
            console.log(fileList);
          }}
          defaultValues={[]}
        />
      </div>
      <Button type="primary" htmlType="button" onClick={onCreateMultipeChoice}>
        객관식 문항 등록
      </Button>
    </div>
  );
};

export default MultipleChoice;
