import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  padding: ${theme.spacing.lg};
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const Title = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const DiscussionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const DiscussionCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.primary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.primary.main};
  }
`;

const TopicName = styled.h3`
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.md};
`;

const TopicDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing.md};
`;

const StatsContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border.light};
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
`;

const StatLabel = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.secondary};
`;

interface Discussion {
  id: string;
  topic: string;
  description: string;
  participants: number;
  threads: number;
  activeNow: number;
}

const TopicDiscussion: React.FC = () => {
  const [discussions] = useState<Discussion[]>([
    {
      id: '1',
      topic: 'Cell Biology',
      description: 'Discuss cellular structures and functions',
      participants: 145,
      threads: 32,
      activeNow: 8
    },
    {
      id: '2',
      topic: 'Algebra Fundamentals',
      description: 'Master algebraic equations and expressions',
      participants: 187,
      threads: 56,
      activeNow: 12
    },
    {
      id: '3',
      topic: 'World History',
      description: 'Explore historical events and timelines',
      participants: 98,
      threads: 24,
      activeNow: 5
    },
    {
      id: '4',
      topic: 'Literature Analysis',
      description: 'Analyze texts and literary techniques',
      participants: 76,
      threads: 18,
      activeNow: 3
    },
    {
      id: '5',
      topic: 'Physics Concepts',
      description: 'Understand forces, motion, and energy',
      participants: 112,
      threads: 41,
      activeNow: 9
    },
    {
      id: '6',
      topic: 'Chemistry Reactions',
      description: 'Explore chemical reactions and bonding',
      participants: 134,
      threads: 38,
      activeNow: 7
    }
  ]);

  return (
    <Container>
      <Title>💬 Topic Discussion Spaces</Title>
      
      <DiscussionGrid>
        {discussions.map((discussion) => (
          <DiscussionCard key={discussion.id}>
            <TopicName>{discussion.topic}</TopicName>
            <TopicDescription>{discussion.description}</TopicDescription>
            <StatsContainer>
              <Stat>
                <StatNumber>{discussion.participants}</StatNumber>
                <StatLabel>Members</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>{discussion.threads}</StatNumber>
                <StatLabel>Threads</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>{discussion.activeNow}</StatNumber>
                <StatLabel>Active</StatLabel>
              </Stat>
            </StatsContainer>
          </DiscussionCard>
        ))}
      </DiscussionGrid>
    </Container>
  );
};

export default TopicDiscussion;
