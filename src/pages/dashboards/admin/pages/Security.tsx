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
  
  @media (min-width: 768px) {
    font-size: ${theme.typography.fontSize.base};
  }
`;

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SecurityCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
`;

const CardTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const StatusBadge = styled.span<{ status: 'secure' | 'warning' | 'alert' }>`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  
  ${props => {
    switch (props.status) {
      case 'secure':
        return `background-color: ${theme.colors.success.bg}; color: ${theme.colors.success.main};`;
      case 'warning':
        return `background-color: ${theme.colors.warning.bg}; color: ${theme.colors.warning.main};`;
      case 'alert':
        return `background-color: ${theme.colors.danger.bg}; color: ${theme.colors.danger.main};`;
      default:
        return '';
    }
  }}
`;

const SecurityItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const SecurityItem = styled.div`
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemLabel = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const ActionButton = styled.button`
  background-color: ${theme.colors.primary.main};
  color: white;
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  transition: all ${theme.transition.fast};
  white-space: nowrap;
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

const Security: React.FC = () => {
  const sidebarItems = getAdminSidebarItems('/admin/security');
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <HeaderSection>
          <PageTitle>🔒 Security & Privacy</PageTitle>
          <PageSubtitle>Manage security protocols and privacy settings</PageSubtitle>
        </HeaderSection>

        <SecurityGrid>
          <SecurityCard>
            <CardTitle>
              🛡️ Threat Detection
              <StatusBadge status="secure">Secure</StatusBadge>
            </CardTitle>
            <SecurityItems>
              <SecurityItem>
                <ItemLabel>Firewall Status</ItemLabel>
                <ActionButton>View Logs</ActionButton>
              </SecurityItem>
              <SecurityItem>
                <ItemLabel>Intrusion Detection</ItemLabel>
                <ActionButton>Configure</ActionButton>
              </SecurityItem>
              <SecurityItem>
                <ItemLabel>Last Security Audit</ItemLabel>
                <span style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.text.secondary }}>2 days ago</span>
              </SecurityItem>
            </SecurityItems>
          </SecurityCard>

          <SecurityCard>
            <CardTitle>
              🔑 Authentication
              <StatusBadge status={twoFAEnabled ? 'secure' : 'warning'}>{twoFAEnabled ? 'Enabled' : 'Disabled'}</StatusBadge>
            </CardTitle>
            <SecurityItems>
              <SecurityItem>
                <ItemLabel>Two-Factor Authentication</ItemLabel>
                <ActionButton onClick={() => setTwoFAEnabled(!twoFAEnabled)}>{twoFAEnabled ? 'Disable' : 'Enable'}</ActionButton>
              </SecurityItem>
              <SecurityItem>
                <ItemLabel>Password Policy</ItemLabel>
                <ActionButton>Edit</ActionButton>
              </SecurityItem>
              <SecurityItem>
                <ItemLabel>Session Timeout</ItemLabel>
                <span style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.text.secondary }}>30 minutes</span>
              </SecurityItem>
            </SecurityItems>
          </SecurityCard>

          <SecurityCard>
            <CardTitle>📋 Activity Logs</CardTitle>
            <SecurityItems>
              <SecurityItem>
                <ItemLabel>Admin Actions Log</ItemLabel>
                <ActionButton>Download</ActionButton>
              </SecurityItem>
              <SecurityItem>
                <ItemLabel>User Activity Log</ItemLabel>
                <ActionButton>Download</ActionButton>
              </SecurityItem>
              <SecurityItem>
                <ItemLabel>System Events Log</ItemLabel>
                <ActionButton>Download</ActionButton>
              </SecurityItem>
            </SecurityItems>
          </SecurityCard>

          <SecurityCard>
            <CardTitle>🔍 Data Protection</CardTitle>
            <SecurityItems>
              <SecurityItem>
                <ItemLabel>Encryption Status</ItemLabel>
                <StatusBadge status="secure">Active</StatusBadge>
              </SecurityItem>
              <SecurityItem>
                <ItemLabel>Backup Schedule</ItemLabel>
                <ActionButton>Configure</ActionButton>
              </SecurityItem>
              <SecurityItem>
                <ItemLabel>Data Retention Policy</ItemLabel>
                <ActionButton>Edit</ActionButton>
              </SecurityItem>
            </SecurityItems>
          </SecurityCard>
        </SecurityGrid>
      </PageContainer>
    </MainLayout>
  );
};

export default Security;
