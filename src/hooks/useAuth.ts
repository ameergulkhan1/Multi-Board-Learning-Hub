// useAuth.ts
import { useState, useCallback } from 'react';

export type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    // Try to get user from localStorage
    const savedUser = localStorage.getItem('authUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = useCallback((userData: AuthUser) => {
    setUser(userData);
    localStorage.setItem('authUser', JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('authUser');
  }, []);

  const isAuthenticated = user !== null;

  const getDashboardRoute = useCallback((role?: UserRole): string => {
    const userRole = role || user?.role;
    switch (userRole) {
      case 'student':
        return '/student-dashboard';
      case 'teacher':
        return '/teacher-dashboard';
      case 'parent':
        return '/parent-dashboard';
      case 'admin':
        return '/admin-dashboard';
      default:
        return '/';
    }
  }, [user]);

  return { 
    user, 
    login, 
    logout, 
    isAuthenticated,
    getDashboardRoute,
  };
};
