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

const RecommendationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.lg};
`;

const RecommendationCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.bg.secondary} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.primary.main};
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const RecommendationTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const RecommendationDescription = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.md};
  line-height: ${theme.typography.lineHeight.lg};
`;

const ActionButton = styled.button`
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.primary.contrast};
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

interface Recommendation {
  id: string;
  title: string;
  description: string;
  action: string;
}

const IntelligentLearningRecommendations: React.FC = () => {
  const [recommendations] = useState<Recommendation[]>([
    {
      id: '1',
      title: 'Focus on Weak Areas',
      description: 'Based on your quiz performance, you struggled with Algebra topics. Practice more problems to strengthen your foundation.',
      action: 'Start Practice'
    },
    {
      id: '2',
      title: 'Optimal Learning Time',
      description: 'Your performance is best between 2-4 PM. Schedule your study sessions during this time for better results.',
      action: 'Schedule Time'
    },
    {
      id: '3',
      title: 'Review Previous Topics',
      description: 'You haven\'t reviewed Chapter 2 in 5 days. A quick refresh will help consolidate your learning.',
      action: 'Review Now'
    },
    {
      id: '4',
      title: 'Challenge Yourself',
      description: 'You\'re doing well! Try the advanced problems section to further enhance your understanding.',
      action: 'Take Challenge'
    }
  ]);

  return (
    <Container>
      <Title>💡 Intelligent Learning Recommendations</Title>
      <RecommendationGrid>
        {recommendations.map((rec) => (
          <RecommendationCard key={rec.id}>
            <RecommendationTitle>{rec.title}</RecommendationTitle>
            <RecommendationDescription>{rec.description}</RecommendationDescription>
            <ActionButton>{rec.action}</ActionButton>
          </RecommendationCard>
        ))}
      </RecommendationGrid>
    </Container>
  );
};

export default IntelligentLearningRecommendations;
