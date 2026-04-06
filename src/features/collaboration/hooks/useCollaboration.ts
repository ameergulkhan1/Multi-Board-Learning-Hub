import { useState } from 'react';

export const useCollaboration = () => {
  const [data, setData] = useState(null);
  return { data };
};
