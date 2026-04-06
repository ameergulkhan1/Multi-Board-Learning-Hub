import { useState } from 'react';

export const useAssessment = () => {
  const [data, setData] = useState(null);
  return { data };
};
