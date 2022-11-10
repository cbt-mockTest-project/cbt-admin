export const generateArrayForSelect = <T>(array: T[]) => {
  return array.map((data) => ({ label: data, value: data }));
};

export const generateArrayForSelectInclueId = <T>(array: T[]) => {
  return array.map((data: any) => ({
    label: data.title,
    value: data.id,
  }));
};
