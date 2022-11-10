import { useState } from 'react';

interface UseSelectChange {
  defaultValue?: any;
}

const useSelectChange = <T>({ defaultValue }: UseSelectChange) => {
  const [value, setValue] = useState<T>(defaultValue);
  const onSelectChange = (input: T) => setValue(input);

  return { value, onSelectChange };
};

export default useSelectChange;
