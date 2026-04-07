import React from 'react';
import { Text } from '@fluentui/react';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface DashboardPanelProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  maxWidth?: string;
  loading?: boolean;
}

interface DashboardLayoutProps {
  title: string;
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

// ============================================
// STYLED FLUENT UI COMPONENTS
// Professional Fluent UI Dashboard Layout
// ============================================

const PanelContainer = styled.div<{
  $variant: DashboardPanelProps['variant'];
  $padding: DashboardPanelProps['padding'];
}>`
  background-color: ${theme.colors.bg.primary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${(props) => {
    switch (props.$padding) {
      case 'sm':
        return theme.spacing.lg;
      case 'lg':
        return theme.spacing['2xl'];
      case 'md':
      default:
        return theme.spacing.xl;
    }
  }};
  transition: all ${theme.transition.base};

  ${(props) => {
    switch (props.$variant) {
      case 'elevated':
        return `
          box-shadow: ${theme.shadows.md};
          border: 1px solid ${theme.colors.border.light};
        `;
      case 'outlined':
        return `
          border: 2px solid ${theme.colors.border.light};
        `;
      case 'default':
      default:
        return `
          box-shadow: ${theme.shadows.sm};
          border: 1px solid ${theme.colors.border.light};
        `;
    }
  }}

  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const PanelHeader = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border.light};
`;

const PanelTitle = styled.h3`
  margin: 0;
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.base};
`;

const PanelSubtitle = styled.p`
  margin: ${theme.spacing.sm} 0 0;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.sm};
`;

const DashboardLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const LayoutHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  padding-bottom: ${theme.spacing.xl};
  border-bottom: 2px solid ${theme.colors.border.light};
`;

const LayoutTitle = styled.h1`
  margin: 0;
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.xs};
`;

const LayoutGrid = styled.div<{ $columns: number; $gap: string }>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc((100% / ${(props) => props.$columns}) - ${(props) => props.$gap}), 1fr)
  );
  gap: ${(props) => props.$gap};
  width: 100%;
`;

// ============================================
// DASHBOARD PANEL COMPONENT
// Reusable panel for organizing dashboard content
// ============================================

export const DashboardPanel: React.FC<DashboardPanelProps> = ({
  title,
  subtitle,
  children,
  variant = 'default',
  padding = 'md',
  maxWidth,
  loading = false,
}) => {
  return (
    <PanelContainer
      $variant={variant}
      $padding={padding}
      style={{ maxWidth: maxWidth || '100%' }}
    >
      {(title || subtitle) && (
        <PanelHeader>
          <PanelTitle>{title}</PanelTitle>
          {subtitle && <PanelSubtitle>{subtitle}</PanelSubtitle>}
        </PanelHeader>
      )}

      {loading ? (
        <div style={{ textAlign: 'center', padding: theme.spacing.xl }}>
          <Text>Loading...</Text>
        </div>
      ) : (
        children
      )}
    </PanelContainer>
  );
};

DashboardPanel.displayName = 'DashboardPanel';

// ============================================
// DASHBOARD LAYOUT COMPONENT
// Container for organizing multiple dashboard panels
// ============================================

interface DashboardLayoutGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

const getGapValue = (gap: 'sm' | 'md' | 'lg') => {
  switch (gap) {
    case 'sm':
      return theme.spacing.lg;
    case 'lg':
      return theme.spacing['2xl'];
    case 'md':
    default:
      return theme.spacing.xl;
  }
};

export const DashboardLayoutGrid: React.FC<DashboardLayoutGridProps> = ({
  children,
  columns = 2,
  gap = 'md',
}) => {
  return (
    <LayoutGrid $columns={columns} $gap={getGapValue(gap)}>
      {children}
    </LayoutGrid>
  );
};

DashboardLayoutGrid.displayName = 'DashboardLayoutGrid';

// ============================================
// DASHBOARD LAYOUT COMPONENT
// Main container for dashboard pages
// ============================================

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  title,
  children,
  columns = 2,
  gap = 'md',
}) => {
  return (
    <DashboardLayoutContainer>
      <LayoutHeader>
        <LayoutTitle>{title}</LayoutTitle>
      </LayoutHeader>

      <DashboardLayoutGrid columns={columns} gap={gap}>
        {children}
      </DashboardLayoutGrid>
    </DashboardLayoutContainer>
  );
};

DashboardLayout.displayName = 'DashboardLayout';
