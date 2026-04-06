import { useState } from 'react';

export const useExamination = () => {
  const [data, setData] = useState(null);
  return { data };
};
