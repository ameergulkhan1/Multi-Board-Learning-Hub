import { useState } from 'react';

export const useTextbook = () => {
  const [data, setData] = useState(null);
  return { data };
};
