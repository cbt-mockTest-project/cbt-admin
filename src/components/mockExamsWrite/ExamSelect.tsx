import { Select } from 'antd';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SearchOptionType } from '../../../pages';
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

const ExamSelect: React.FC = () => {
  const { setValue } = useFormContext();
  const { data: allCategories } = useReadAllMockExamCategory();
  const [mockExams, setMockExams] = useState<SearchOptionType[]>([]);
  const [readMockExamsByCategory] = useReadAllMockExamsByCategory();

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
    </>
  );
};

export default ExamSelect;
