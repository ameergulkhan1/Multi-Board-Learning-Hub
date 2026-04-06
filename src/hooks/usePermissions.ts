// usePermissions.ts
import { useState } from 'react';
import { Roles } from '../routes/roles';

export const usePermissions = (user) => {
  const [permissions, setPermissions] = useState([]);

  const hasPermission = (permission) => {
    return permissions.includes(permission);
  };

  return { permissions, hasPermission };
};
