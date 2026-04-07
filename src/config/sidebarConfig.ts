/**
 * Centralized Sidebar Configuration
 * All pages share the same navigation structure with different active states
 */

export interface SidebarItem {
  label: string;
  href: string;
  icon: string;
  active?: boolean;
}

export const DEFAULT_SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: '📊' },
  { label: 'Textbook', href: '/textbook', icon: '📚' },
  { label: 'Assessment', href: '/assessment', icon: '✅' },
  { label: 'Examination', href: '/examination', icon: '📝' },
  { label: 'Assistant', href: '/assistant', icon: '🤖' },
  { label: 'Collaboration', href: '/collaboration', icon: '👥' },
  { label: 'Teacher-Parent', href: '/teacher-parent', icon: '👨‍🏫' },
];

/**
 * Get sidebar items with active state set for the current page
 * @param currentPath - The current page path (e.g., '/dashboard', '/textbook')
 */
export const getSidebarItems = (currentPath: string): SidebarItem[] => {
  return DEFAULT_SIDEBAR_ITEMS.map((item) => ({
    ...item,
    active: item.href === currentPath,
  }));
};

/**
 * Student Dashboard Sidebar (Role-specific)
 */
export const STUDENT_SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: '📊' },
  { label: 'Textbooks', href: '/textbook', icon: '📚' },
  { label: 'Assessments', href: '/assessment', icon: '✅' },
  { label: 'Exams', href: '/examination', icon: '📝' },
  { label: 'AI Assistant', href: '/assistant', icon: '🤖' },
  { label: 'Community', href: '/collaboration', icon: '👥' },
];

/**
 * Get student sidebar items with active state
 */
export const getStudentSidebarItems = (currentPath: string): SidebarItem[] => {
  return STUDENT_SIDEBAR_ITEMS.map((item) => ({
    ...item,
    active: item.href === currentPath || (item.href === '/dashboard' && currentPath === '/dashboard'),
  }));
};

/**
 * Teacher Dashboard Sidebar (Role-specific)
 */
export const TEACHER_SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: '📊' },
  { label: 'Course Content', href: '/textbook', icon: '📚' },
  { label: 'Assignments', href: '/assessment', icon: '✅' },
  { label: 'Exams', href: '/examination', icon: '📝' },
  { label: 'AI Tools', href: '/assistant', icon: '🤖' },
  { label: 'Class Discussion', href: '/collaboration', icon: '👥' },
];

/**
 * Get teacher sidebar items with active state
 */
export const getTeacherSidebarItems = (currentPath: string): SidebarItem[] => {
  return TEACHER_SIDEBAR_ITEMS.map((item) => ({
    ...item,
    active: item.href === currentPath,
  }));
};

/**
 * Parent Dashboard Sidebar (Role-specific)
 */
export const PARENT_SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: '📊' },
  { label: 'Reports', href: '/textbook', icon: '📋' },
  { label: 'Progress', href: '/assessment', icon: '📈' },
  { label: 'Assignments', href: '/examination', icon: '📝' },
  { label: 'Messages', href: '/assistant', icon: '💬' },
  { label: 'Teacher Contact', href: '/collaboration', icon: '👥' },
];

/**
 * Get parent sidebar items with active state
 */
export const getParentSidebarItems = (currentPath: string): SidebarItem[] => {
  return PARENT_SIDEBAR_ITEMS.map((item) => ({
    ...item,
    active: item.href === currentPath,
  }));
};

/**
 * Admin Dashboard Sidebar (Role-specific)
 */
export const ADMIN_SIDEBAR_ITEMS: SidebarItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { label: 'User Management', href: '/admin/users', icon: '👥' },
  { label: 'Courses', href: '/admin/courses', icon: '📚' },
  { label: 'Analytics', href: '/admin/analytics', icon: '📈' },
  { label: 'Content Moderation', href: '/admin/moderation', icon: '🛡️' },
  { label: 'Settings', href: '/admin/settings', icon: '⚙️' },
  { label: 'Security', href: '/admin/security', icon: '🔒' },
  { label: 'Reports', href: '/admin/reports', icon: '📋' },
];

/**
 * Get admin sidebar items with active state
 */
export const getAdminSidebarItems = (currentPath: string): SidebarItem[] => {
  return ADMIN_SIDEBAR_ITEMS.map((item) => ({
    ...item,
    active: item.href === currentPath,
  }));
};

/**
 * Get role-aware sidebar items based on user role
 * This is used by feature pages to show appropriate sidebar based on the user's role
 */
export const getRoleAwareSidebarItems = (currentPath: string, userRole?: string): SidebarItem[] => {
  const role = userRole || 'student';
  
  switch (role) {
    case 'teacher':
      return getTeacherSidebarItems(currentPath);
    case 'parent':
      return getParentSidebarItems(currentPath);
    case 'admin':
      return getAdminSidebarItems(currentPath);
    case 'student':
    default:
      return getStudentSidebarItems(currentPath);
  }
};
