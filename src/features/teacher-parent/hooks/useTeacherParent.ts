import { useState } from 'react';

export const useTeacherParent = () => {
  const [data, setData] = useState(null);
  return { data };
};
