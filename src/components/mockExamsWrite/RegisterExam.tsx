import { Button, Input, message, Select } from 'antd';
import React from 'react';
import { SearchOptionType } from '../../../pages';
import { useCreateMockExam } from '../../lib/hooks/useMockExams';
import useSelectChange from '../../lib/hooks/useSelectChange';
import useInput from '../../lib/hooks/useInput';
import { generateArrayForSelect } from '../../lib/utils/generateArrayForSelect';
import { OptionType } from './ExamSelect';

interface RegisterExamProps {
  examCategories: OptionType[];
}

const RegisterExam: React.FC<RegisterExamProps> = ({ examCategories }) => {
  const [createMockExamMutation] = useCreateMockExam();
  const { value: subTitleValue, onChange: onChangeSubTitleValue } = useInput();
  const { value: year, onSelectChange: onSelectYear } = useSelectChange<string>(
    { defaultValue: '' }
  );
  const { value: time, onSelectChange: onSelectTime } = useSelectChange<string>(
    { defaultValue: '' }
  );

  const {
    value: categoryForRegister,
    onSelectChange: onSelectCategoryForRegister,
  } = useSelectChange<string>({ defaultValue: '' });

  const yearArray = Array.from(
    { length: 23 },
    (_, index) => `${2000 + index}년`
  );
  const timeArray = Array.from({ length: 4 }, (_, index) => `${1 + index}회차`);
  const examYears: SearchOptionType[] =
    generateArrayForSelect<string>(yearArray);
  const examTimes: SearchOptionType[] =
    generateArrayForSelect<string>(timeArray);
  const onCreateMockExam = async () => {
    if (!categoryForRegister) return message.error('카테고리를 선택해주세요.');
    let title = '';
    if (year && time) {
      title = year + '-' + categoryForRegister + '-' + time;
    } else if (subTitleValue) {
      title = categoryForRegister + '-' + subTitleValue;
    }
    const { data } = await createMockExamMutation({
      variables: {
        input: {
          title,
          categoryName: categoryForRegister,
        },
      },
    });
    if (data?.createMockExam.ok) {
      return message.success('시험이 등록되었습니다.');
    }
    return message.error(data?.createMockExam.error);
  };
  return (
    <div className="flex gap-4 items-center">
      <div>시험등록</div>
      <Select
        options={examCategories}
        onSelect={onSelectCategoryForRegister}
        className="w-52"
      />
      <Select options={examYears} onSelect={onSelectYear} className="w-32" />
      <Select options={examTimes} onSelect={onSelectTime} className="w-32" />
      <Input
        value={subTitleValue}
        onChange={onChangeSubTitleValue}
        className="w-32"
      />
      <Button onClick={onCreateMockExam} htmlType="button">
        시험등록
      </Button>
    </div>
  );
};

export default RegisterExam;
