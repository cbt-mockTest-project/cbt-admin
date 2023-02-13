import { ChangeEvent, useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState<string | number>('');
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange, setValue };
};

export default useInput;
