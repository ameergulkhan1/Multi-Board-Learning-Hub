import { useState } from 'react';

export const useDashboard = () => {
  const [data, setData] = useState(null);
  return { data };
};
