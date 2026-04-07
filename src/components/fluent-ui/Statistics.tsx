import React from 'react';
import { Icon } from '@fluentui/react';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface StatisticProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: string;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  percentage?: number;
}

interface StatisticsGridProps {
  statistics: StatisticProps[];
  columns?: 2 | 3 | 4;
}

// ============================================
// STYLED STATISTICS COMPONENTS
// Fluent UI Statistics Display
// ============================================

const StatisticCard = styled.div<{ $color: StatisticProps['color'] }>`
  background: linear-gradient(135deg, ${theme.colors.bg.secondary} 0%, ${theme.colors.bg.primary} 100%);
  border: 1.5px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  transition: all ${theme.transition.base};
  border-left: 4px solid
    ${(props) => {
      switch (props.$color) {
        case 'success':
          return theme.colors.success.main;
        case 'warning':
          return theme.colors.warning.main;
        case 'danger':
          return theme.colors.danger.main;
        case 'info':
          return theme.colors.info.main;
        case 'primary':
        default:
          return theme.colors.primary.main;
      }
    }};

  &:hover {
    box-shadow: ${theme.shadows.md};
    border-color: ${(props) => {
      switch (props.$color) {
        case 'success':
          return theme.colors.success.light;
        case 'warning':
          return theme.colors.warning.light;
        case 'danger':
          return theme.colors.danger.light;
        case 'info':
          return theme.colors.info.light;
        case 'primary':
        default:
          return theme.colors.primary.light;
      }
    }};
    transform: translateY(-4px);
  }
`;

const StatisticContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${theme.spacing.lg};
`;

const StatisticDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const StatisticLabel = styled.p`
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.tight};
`;

const StatisticValue = styled.h3`
  margin: 0;
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.xs};
`;

const StatisticChange = styled.div<{ $positive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${(props) =>
    props.$positive ? theme.colors.success.main : theme.colors.danger.main};
  
  span {
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const StatisticIconWrapper = styled.div<{ $color: StatisticProps['color'] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${(props) => {
    switch (props.$color) {
      case 'success':
        return `${theme.colors.success.main}12`;
      case 'warning':
        return `${theme.colors.warning.main}12`;
      case 'danger':
        return `${theme.colors.danger.main}12`;
      case 'info':
        return `${theme.colors.info.main}12`;
      case 'primary':
      default:
        return `${theme.colors.primary.main}12`;
    }
  }};
  color: ${(props) => {
    switch (props.$color) {
      case 'success':
        return theme.colors.success.main;
      case 'warning':
        return theme.colors.warning.main;
      case 'danger':
        return theme.colors.danger.main;
      case 'info':
        return theme.colors.info.main;
      case 'primary':
      default:
        return theme.colors.primary.main;
    }
  }};
  flex-shrink: 0;
  font-size: ${theme.typography.fontSize['2xl']};
`;

const StatsGrid = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  width: 100%;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(
      ${(props) => Math.min(props.$columns, 2)},
      1fr
    );
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  }
`;

// ============================================
// STATISTIC COMPONENT
// Individual statistic card
// ============================================

export const Statistic: React.FC<StatisticProps> = ({
  label,
  value,
  change,
  changeLabel,
  icon = 'FunnelChart',
  color = 'primary',
  percentage,
}) => {
  return (
    <StatisticCard $color={color}>
      <StatisticContent>
        <StatisticDetails>
          <StatisticLabel>{label}</StatisticLabel>
          <StatisticValue>{value}</StatisticValue>

          {change !== undefined && (
            <StatisticChange $positive={change >= 0}>
              <span>{change >= 0 ? '↑' : '↓'}</span>
              <span>
                {Math.abs(change)}% {changeLabel || 'from last month'}
              </span>
            </StatisticChange>
          )}

          {percentage !== undefined && (
            <div style={{ marginTop: theme.spacing.md }}>
              <ProgressBar percentage={percentage} color={color} />
            </div>
          )}
        </StatisticDetails>

        <StatisticIconWrapper $color={color}>
          <Icon iconName={icon} />
        </StatisticIconWrapper>
      </StatisticContent>
    </StatisticCard>
  );
};

Statistic.displayName = 'Statistic';

// ============================================
// PROGRESS BAR COMPONENT
// Micro component for percentage display
// ============================================

const ProgressBarContainer = styled.div`
  width: 100%;
`;

const ProgressBarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.secondary};
`;

const ProgressBarTrack = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${theme.colors.bg.tertiary};
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ $percentage: number; $color: string }>`
  height: 100%;
  width: ${(props) => `${Math.min(props.$percentage, 100)}%`};
  background-color: ${(props) => props.$color};
  border-radius: 2px;
  transition: width ${theme.transition.base};
`;

interface ProgressBarProps {
  percentage: number;
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color = 'primary',
  label,
}) => {
  const getColor = () => {
    switch (color) {
      case 'success':
        return theme.colors.success.main;
      case 'warning':
        return theme.colors.warning.main;
      case 'danger':
        return theme.colors.danger.main;
      case 'info':
        return theme.colors.info.main;
      case 'primary':
      default:
        return theme.colors.primary.main;
    }
  };

  return (
    <ProgressBarContainer>
      {label && (
        <ProgressBarLabel>
          <span>{label}</span>
          <span>{Math.round(percentage)}%</span>
        </ProgressBarLabel>
      )}
      <ProgressBarTrack>
        <ProgressBarFill $percentage={percentage} $color={getColor()} />
      </ProgressBarTrack>
    </ProgressBarContainer>
  );
};

// ============================================
// STATISTICS GRID COMPONENT
// Container for multiple statistics
// ============================================

export const StatisticsGrid: React.FC<StatisticsGridProps> = ({
  statistics,
  columns = 4,
}) => {
  return (
    <StatsGrid $columns={columns}>
      {statistics.map((stat, index) => (
        <Statistic key={index} {...stat} />
      ))}
    </StatsGrid>
  );
};

StatisticsGrid.displayName = 'StatisticsGrid';
