import React, { useState } from 'react';
import { MainLayout } from '../../../../components/layout/MainLayout.tsx';
import { getAdminSidebarItems } from '../../../../config/sidebarConfig.ts';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

const PageContainer = styled.div`
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.bg.secondary};
  min-height: 100vh;
  
  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
  }
`;

const HeaderSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }
`;

const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  
  @media (min-width: 768px) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const PageSubtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    font-size: ${theme.typography.fontSize.base};
  }
`;

const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacing.xl};
    gap: ${theme.spacing.lg};
  }
`;

const SearchInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  width: 100%;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: ${theme.spacing.md};
  }
  
  @media (min-width: 768px) {
    flex: 1;
    width: auto;
    min-width: 300px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.sm};
  width: 100%;
  transition: all ${theme.transition.fast};
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize.base};
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}20;
  }
`;

const FilterSelect = styled.select`
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.sm};
  background-color: white;
  cursor: pointer;
  transition: all ${theme.transition.fast};
  flex: 1;
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize.base};
    flex: auto;
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}20;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  width: 100%;
  
  @media (min-width: 768px) {
    width: auto;
  }
`;

const CreateButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary.main} 0%, ${theme.colors.primary.dark} 100%);
  color: ${theme.colors.primary.contrast};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  font-size: ${theme.typography.fontSize.sm};
  flex: 1;
  white-space: nowrap;
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize.base};
    flex: auto;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const TableContainer = styled.div`
  background-color: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  
  thead {
    background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.bg.secondary} 100%);
    border-bottom: 2px solid ${theme.colors.border.light};
  }
  
  th {
    padding: ${theme.spacing.md};
    text-align: left;
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.xs};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    @media (min-width: 640px) {
      padding: ${theme.spacing.lg};
      font-size: ${theme.typography.fontSize.sm};
    }
  }
  
  td {
    padding: ${theme.spacing.md};
    border-bottom: 1px solid ${theme.colors.border.light};
    color: ${theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.sm};
    
    @media (min-width: 640px) {
      padding: ${theme.spacing.lg};
      font-size: ${theme.typography.fontSize.base};
    }
  }
  
  tbody tr:hover {
    background-color: ${theme.colors.bg.secondary};
  }
`;

const UserRow = styled.tr`
  transition: background-color ${theme.transition.fast};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  @media (min-width: 640px) {
    gap: ${theme.spacing.md};
  }
`;

const UserAvatar = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.sm};
  flex-shrink: 0;
  
  @media (min-width: 640px) {
    width: 40px;
    height: 40px;
    font-size: ${theme.typography.fontSize.base};
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const UserName = styled.div`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xs};
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize.sm};
  }
`;

const UserEmail = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize.sm};
  }
`;

const Badge = styled.span<{ status: 'active' | 'inactive' | 'student' | 'teacher' | 'parent' | 'admin' }>`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  
  @media (min-width: 640px) {
    padding: ${theme.spacing.xs} ${theme.spacing.md};
  }
  
  ${props => {
    switch (props.status) {
      case 'active':
        return `background-color: ${theme.colors.success.bg}; color: ${theme.colors.success.main};`;
      case 'inactive':
        return `background-color: ${theme.colors.warning.bg}; color: ${theme.colors.warning.main};`;
      case 'student':
        return `background-color: ${theme.colors.primary.lighter}; color: ${theme.colors.primary.main};`;
      case 'teacher':
        return `background-color: ${theme.colors.success.bg}; color: ${theme.colors.success.main};`;
      case 'parent':
        return `background-color: ${theme.colors.info.bg}; color: ${theme.colors.info.main};`;
      case 'admin':
        return `background-color: ${theme.colors.danger.bg}; color: ${theme.colors.danger.main};`;
      default:
        return '';
    }
  }}
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
  flex-wrap: wrap;
  
  @media (min-width: 640px) {
    gap: ${theme.spacing.sm};
    flex-wrap: nowrap;
  }
`;

const ActionButton = styled.button<{ variant: 'edit' | 'reset' | 'deactivate' | 'activate' }>`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  white-space: nowrap;
  
  @media (min-width: 640px) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
  }
  
  ${props => {
    switch (props.variant) {
      case 'edit':
        return `
          background-color: ${theme.colors.primary.main};
          color: white;
          &:hover { background-color: ${theme.colors.primary.dark}; }
        `;
      case 'reset':
        return `
          background-color: ${theme.colors.warning.main};
          color: white;
          &:hover { background-color: ${theme.colors.warning.dark}; }
        `;
      case 'deactivate':
        return `
          background-color: ${theme.colors.danger.main};
          color: white;
          &:hover { background-color: ${theme.colors.danger.dark}; }
        `;
      case 'activate':
        return `
          background-color: ${theme.colors.success.main};
          color: white;
          &:hover { background-color: ${theme.colors.success.dark}; }
        `;
      default:
        return '';
    }
  }}
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.xl};
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div<{ $color?: string; $borderColor?: string }>`
  background: linear-gradient(135deg, ${props => props.$color || theme.colors.primary.lighter} 0%, ${theme.colors.bg.primary} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.md};
  border-left: 4px solid ${props => props.$borderColor || theme.colors.primary.main};
  
  @media (min-width: 640px) {
    padding: ${theme.spacing.lg};
  }
`;

const StatValue = styled.div`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize['2xl']};
    margin-bottom: ${theme.spacing.sm};
  }
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.secondary};
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize.sm};
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.border.light};
  flex-wrap: wrap;
  
  @media (min-width: 640px) {
    gap: ${theme.spacing.sm};
    margin-top: ${theme.spacing.xl};
  }
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border: 1px solid ${props => props.active ? theme.colors.primary.main : theme.colors.border.light};
  background-color: ${props => props.active ? theme.colors.primary.main : 'white'};
  color: ${props => props.active ? 'white' : theme.colors.text.primary};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.xs};
  
  @media (min-width: 640px) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.typography.fontSize.sm};
  }
  
  &:hover {
    border-color: ${theme.colors.primary.main};
    background-color: ${props => props.active ? theme.colors.primary.dark : theme.colors.bg.secondary};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.lg};
  color: ${theme.colors.text.secondary};
  
  @media (min-width: 640px) {
    padding: ${theme.spacing.xl};
  }
`;

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'parent' | 'admin';
  status: 'active' | 'inactive';
  joinedDate: string;
  lastActive: string;
}

const UserManagement: React.FC = () => {
  const sidebarItems = getAdminSidebarItems('/admin/users');
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock user data
  const allUsers: User[] = [
    {
      id: '1',
      name: 'Ahmed Ali',
      email: 'ahmed.ali@example.com',
      role: 'student',
      status: 'active',
      joinedDate: '2024-01-15',
      lastActive: '2 hours ago'
    },
    {
      id: '2',
      name: 'Fatima Khan',
      email: 'fatima.khan@example.com',
      role: 'teacher',
      status: 'active',
      joinedDate: '2023-08-20',
      lastActive: '30 minutes ago'
    },
    {
      id: '3',
      name: 'Hassan Ibrahim',
      email: 'hassan.ibrahim@example.com',
      role: 'parent',
      status: 'active',
      joinedDate: '2024-02-10',
      lastActive: '1 day ago'
    },
    {
      id: '4',
      name: 'Dr. Amina',
      email: 'dr.amina@example.com',
      role: 'admin',
      status: 'active',
      joinedDate: '2023-01-01',
      lastActive: '5 minutes ago'
    },
    {
      id: '5',
      name: 'Zainab Malik',
      email: 'zainab.malik@example.com',
      role: 'student',
      status: 'inactive',
      joinedDate: '2024-03-05',
      lastActive: '15 days ago'
    },
    {
      id: '6',
      name: 'Muhammad Hasan',
      email: 'm.hasan@example.com',
      role: 'teacher',
      status: 'active',
      joinedDate: '2023-09-12',
      lastActive: '3 hours ago'
    },
    {
      id: '7',
      name: 'Saira Ahmed',
      email: 'saira.ahmed@example.com',
      role: 'parent',
      status: 'active',
      joinedDate: '2024-01-20',
      lastActive: '2 days ago'
    },
    {
      id: '8',
      name: 'Ali Raza',
      email: 'ali.raza@example.com',
      role: 'student',
      status: 'active',
      joinedDate: '2024-02-28',
      lastActive: '4 hours ago'
    },
  ];

  // Filter users
  let filteredUsers = allUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const usersPerPage = 5;
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIdx = (currentPage - 1) * usersPerPage;
  const paginatedUsers = filteredUsers.slice(startIdx, startIdx + usersPerPage);

  const stats = {
    total: allUsers.length,
    active: allUsers.filter(u => u.status === 'active').length,
    students: allUsers.filter(u => u.role === 'student').length,
    teachers: allUsers.filter(u => u.role === 'teacher').length,
  };

  const avatarColors: Record<string, string> = {
    student: theme.colors.primary.main,
    teacher: theme.colors.success.main,
    parent: theme.colors.info.main,
    admin: theme.colors.danger.main,
  };

  const handleCreateUser = () => {
    alert('Create user modal would open here');
  };

  const handleEditUser = (userId: string) => {
    alert(`Edit user ${userId}`);
  };

  const handleResetPassword = (userId: string) => {
    alert(`Password reset email sent for user ${userId}`);
  };

  const handleToggleStatus = (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    alert(`User ${userId} status changed to ${newStatus}`);
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <HeaderSection>
          <PageTitle>👥 User Management</PageTitle>
          <PageSubtitle>Manage and monitor all users in the system</PageSubtitle>
        </HeaderSection>

        <StatsGrid>
          <StatCard $color={theme.colors.primary.lighter} $borderColor={theme.colors.primary.main}>
            <StatValue>{stats.total}</StatValue>
            <StatLabel>Total Users</StatLabel>
          </StatCard>
          <StatCard $color={theme.colors.success.bg} $borderColor={theme.colors.success.main}>
            <StatValue>{stats.active}</StatValue>
            <StatLabel>Active Users</StatLabel>
          </StatCard>
          <StatCard $color={theme.colors.info.bg} $borderColor={theme.colors.info.main}>
            <StatValue>{stats.students}</StatValue>
            <StatLabel>Students</StatLabel>
          </StatCard>
          <StatCard $color={theme.colors.warning.bg} $borderColor={theme.colors.warning.main}>
            <StatValue>{stats.teachers}</StatValue>
            <StatLabel>Teachers</StatLabel>
          </StatCard>
        </StatsGrid>

        <ControlPanel>
          <SearchInputGroup>
            <SearchInput
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <FilterSelect value={roleFilter} onChange={(e) => {
              setRoleFilter(e.target.value);
              setCurrentPage(1);
            }}>
              <option value="all">All Roles</option>
              <option value="student">Students</option>
              <option value="teacher">Teachers</option>
              <option value="parent">Parents</option>
              <option value="admin">Admin</option>
            </FilterSelect>
            <FilterSelect value={statusFilter} onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}>
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </FilterSelect>
          </SearchInputGroup>
          <ButtonGroup>
            <CreateButton onClick={handleCreateUser}>
              + Create User
            </CreateButton>
          </ButtonGroup>
        </ControlPanel>

        <TableContainer>
          {paginatedUsers.length > 0 ? (
            <>
              <Table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Joined</th>
                    <th>Last Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsers.map((user) => (
                    <UserRow key={user.id}>
                      <td>
                        <UserInfo>
                          <UserAvatar color={avatarColors[user.role]}>
                            {user.name.charAt(0)}
                          </UserAvatar>
                          <UserDetails>
                            <UserName>{user.name}</UserName>
                            <UserEmail>{user.email}</UserEmail>
                          </UserDetails>
                        </UserInfo>
                      </td>
                      <td>
                        <Badge status={user.role}>{user.role}</Badge>
                      </td>
                      <td>
                        <Badge status={user.status}>{user.status}</Badge>
                      </td>
                      <td>{user.joinedDate}</td>
                      <td>{user.lastActive}</td>
                      <td>
                        <ActionButtons>
                          <ActionButton variant="edit" onClick={() => handleEditUser(user.id)}>
                            Edit
                          </ActionButton>
                          <ActionButton variant="reset" onClick={() => handleResetPassword(user.id)}>
                            Reset PWD
                          </ActionButton>
                          <ActionButton
                            variant={user.status === 'active' ? 'deactivate' : 'activate'}
                            onClick={() => handleToggleStatus(user.id, user.status)}
                          >
                            {user.status === 'active' ? 'Deactivate' : 'Activate'}
                          </ActionButton>
                        </ActionButtons>
                      </td>
                    </UserRow>
                  ))}
                </tbody>
              </Table>
              {totalPages > 1 && (
                <PaginationContainer>
                  <PaginationButton
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    ← Previous
                  </PaginationButton>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <PaginationButton
                      key={page}
                      active={currentPage === page}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationButton>
                  ))}
                  <PaginationButton
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next →
                  </PaginationButton>
                </PaginationContainer>
              )}
            </>
          ) : (
            <EmptyState>
              <p>No users found matching your filters.</p>
            </EmptyState>
          )}
        </TableContainer>
      </PageContainer>
    </MainLayout>
  );
};

export default UserManagement;
