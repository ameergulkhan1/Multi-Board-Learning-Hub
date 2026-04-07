import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  padding: ${theme.spacing.lg};
  background: white;
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
`;

const Title = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const HeatMapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.lg};
`;

const HeatMapCell = styled.div<{ $intensity: number }>`
  aspect-ratio: 1;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${(props) => {
    const intensity = props.$intensity;
    if (intensity === 0) return theme.colors.bg.secondary;
    if (intensity < 0.33) return '#c6f7d5';
    if (intensity < 0.66) return '#52b788';
    return '#1b5e20';
  }};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize.xs};
  color: white;
  font-weight: ${theme.typography.fontWeight.bold};
`;

const Legend = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border.light};
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const LegendColor = styled.div<{ $color: string }>`
  width: 20px;
  height: 20px;
  border-radius: ${theme.borderRadius.sm};
  background-color: ${(props) => props.$color};
`;

const PerformanceHeatMap: React.FC = () => {
  const [heatData] = useState<number[]>(
    Array(49).fill(0).map(() => Math.random())
  );

  return (
    <Container>
      <Title>🔥 Performance Heat Mapping</Title>
      <HeatMapGrid>
        {heatData.map((intensity, index) => (
          <HeatMapCell key={index} $intensity={intensity} title={`Week ${Math.floor(index / 7) + 1}, Day ${(index % 7) + 1}`}>
            {Math.round(intensity * 100)}
          </HeatMapCell>
        ))}
      </HeatMapGrid>
      <Legend>
        <LegendItem>
          <LegendColor $color={theme.colors.bg.secondary} />
          <span>No Activity</span>
        </LegendItem>
        <LegendItem>
          <LegendColor $color="#c6f7d5" />
          <span>Low Performance</span>
        </LegendItem>
        <LegendItem>
          <LegendColor $color="#52b788" />
          <span>Good Performance</span>
        </LegendItem>
        <LegendItem>
          <LegendColor $color="#1b5e20" />
          <span>Excellent Performance</span>
        </LegendItem>
      </Legend>
    </Container>
  );
};

export default PerformanceHeatMap;
