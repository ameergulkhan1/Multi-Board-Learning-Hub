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

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SettingCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
`;

const SettingTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.label`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const Toggle = styled.input`
  width: 50px;
  height: 28px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  background-color: white;
  cursor: pointer;
  font-size: ${theme.typography.fontSize.base};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
  }
`;

const SaveButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.success.main} 0%, ${theme.colors.success.dark} 100%);
  color: white;
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  margin-top: ${theme.spacing.lg};
  width: 100%;
  
  @media (min-width: 640px) {
    width: auto;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const AdminSettings: React.FC = () => {
  const sidebarItems = getAdminSidebarItems('/admin/settings');
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    userRegistration: true,
    emailNotifications: true,
    autoBackup: true,
    language: 'english',
    timezone: 'UTC',
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSelectChange = (key: keyof typeof settings, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <HeaderSection>
          <PageTitle>⚙️ System Settings</PageTitle>
          <PageSubtitle>Configure system-wide settings and preferences</PageSubtitle>
        </HeaderSection>

        <SettingsGrid>
          <SettingCard>
            <SettingTitle>🔧 System</SettingTitle>
            <SettingItem>
              <SettingLabel htmlFor="maintenance">Maintenance Mode</SettingLabel>
              <Toggle id="maintenance" type="checkbox" checked={settings.maintenanceMode} onChange={() => handleToggle('maintenanceMode')} />
            </SettingItem>
            <SettingItem>
              <SettingLabel htmlFor="registration">Allow User Registration</SettingLabel>
              <Toggle id="registration" type="checkbox" checked={settings.userRegistration} onChange={() => handleToggle('userRegistration')} />
            </SettingItem>
            <SettingItem>
              <SettingLabel htmlFor="backup">Auto Backup</SettingLabel>
              <Toggle id="backup" type="checkbox" checked={settings.autoBackup} onChange={() => handleToggle('autoBackup')} />
            </SettingItem>
          </SettingCard>

          <SettingCard>
            <SettingTitle>📧 Notifications</SettingTitle>
            <SettingItem>
              <SettingLabel htmlFor="emails">Email Notifications</SettingLabel>
              <Toggle id="emails" type="checkbox" checked={settings.emailNotifications} onChange={() => handleToggle('emailNotifications')} />
            </SettingItem>
            <SettingItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <SettingLabel style={{ marginBottom: theme.spacing.md }}>Language</SettingLabel>
              <Select value={settings.language} onChange={(e) => handleSelectChange('language', e.target.value)}>
                <option value="english">English</option>
                <option value="urdu">Urdu</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </Select>
            </SettingItem>
            <SettingItem style={{ flexDirection: 'column', alignItems: 'flex-start', borderTop: `1px solid ${theme.colors.border.light}`, marginTop: theme.spacing.md, paddingTop: theme.spacing.md }}>
              <SettingLabel style={{ marginBottom: theme.spacing.md }}>Timezone</SettingLabel>
              <Select value={settings.timezone} onChange={(e) => handleSelectChange('timezone', e.target.value)}>
                <option value="UTC">UTC</option>
                <option value="PKT">Pakistan (PKT)</option>
                <option value="IST">India (IST)</option>
                <option value="EST">US Eastern (EST)</option>
              </Select>
            </SettingItem>
          </SettingCard>
        </SettingsGrid>

        <SaveButton onClick={() => alert('Settings saved successfully!')}>💾 Save Settings</SaveButton>
      </PageContainer>
    </MainLayout>
  );
};

export default AdminSettings;
