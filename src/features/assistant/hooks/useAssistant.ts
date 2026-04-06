import { useState } from 'react';

export const useAssistant = () => {
  const [data, setData] = useState(null);
  return { data };
};
