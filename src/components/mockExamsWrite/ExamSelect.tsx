import { Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SearchOptionType } from '../../../pages';
import useInput from '../../lib/hooks/useInput';
import { useLazyReadMockExamQuestionNumbers } from '../../lib/hooks/useMockExamQuestion';
import {
  useReadAllMockExamCategory,
  useReadAllMockExamsByCategory,
} from '../../lib/hooks/useMockExams';
import {
  generateArrayForSelect,
  generateArrayForSelectInclueId,
} from '../../lib/utils/generateArrayForSelect';
import RegisterExam from './RegisterExam';

export type OptionType = {
  value: string | object;
};

export interface ExamSelectInterface {
  number: number;
  onChangeNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ExamSelect: React.FC<ExamSelectInterface> = ({
  number,
  onChangeNumber,
}) => {
  const { setValue } = useFormContext();
  const { data: allCategories } = useReadAllMockExamCategory();
  const [mockExams, setMockExams] = useState<SearchOptionType[]>([]);
  const [readMockExamsByCategory] = useReadAllMockExamsByCategory();
  const [getQuestionNumbers, { data: ReadMockExamQuestionNumbersData }] =
    useLazyReadMockExamQuestionNumbers();
  const questionNumbers =
    ReadMockExamQuestionNumbersData?.readMockExamQuestionNumbers
      .questionNumbers;
  useEffect(() => {
    if (number) {
      setValue('number', number);
    }
  }, [number]);
  if (!allCategories) return null;
  const categoryArray: string[] =
    allCategories.readAllMockExamCategories.categories.map(
      (category) => category.name
    );
  const examCategories: OptionType[] =
    generateArrayForSelect<string>(categoryArray);

  const onSelectCategory = async (value: string) => {
    const { data } = await readMockExamsByCategory({
      variables: {
        input: {
          category: value,
          all: true,
        },
      },
    });

    if (data) {
      type MockExamOption = { title: string; id: number };
      const mockExamsArray: MockExamOption[] =
        data.readAllMockExam.mockExams.map((mockExam) => ({
          title: mockExam.title,
          id: mockExam.id,
        }));
      const mockExamsList =
        generateArrayForSelectInclueId<MockExamOption>(mockExamsArray);
      setMockExams(mockExamsList);
    }
  };
  const onSelectMockExams = async (id: string) => {
    setValue('mockExamId', Number(id));
    await getQuestionNumbers({
      variables: {
        input: {
          mockExamId: Number(id),
        },
      },
    });
  };

  return (
    <>
      <RegisterExam examCategories={examCategories} />
      <div className="flex gap-4 items-center">
        <div>시험선택</div>
        <Select
          className="w-52"
          options={examCategories}
          onSelect={onSelectCategory}
        />
        <Select
          className="w-72"
          options={mockExams}
          onSelect={onSelectMockExams}
        />
      </div>
      <div className="flex gap-4 items-center">
        <div>문제번호</div>
        <Input
          className="w-52"
          type="number"
          onChange={onChangeNumber}
          value={number}
        />
      </div>
      <div className="flex gap-4 items-center">
        <div>등록된 문제</div>
        <div>
          {questionNumbers?.map((number, index) => (
            <span key={index}>{number},</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExamSelect;
