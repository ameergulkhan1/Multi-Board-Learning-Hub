import { useState } from 'react';

export const useMultilingual = () => {
  const [data, setData] = useState(null);
  return { data };
};
