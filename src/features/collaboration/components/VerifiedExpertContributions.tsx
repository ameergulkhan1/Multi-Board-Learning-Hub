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

const ExpertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const ExpertCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.success.light} 0%, ${theme.colors.success.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 2px solid ${theme.colors.success.main};
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ExpertHeader = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme.colors.success.main};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.lg};
`;

const ExpertInfo = styled.div`
  flex-grow: 1;
`;

const ExpertName = styled.div`
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const ExpertTitle = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const VerifiedBadge = styled.span`
  background-color: ${theme.colors.success.main};
  color: white;
  padding: 2px 8px;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-left: ${theme.spacing.sm};
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${theme.spacing.lg} 0;
  padding: ${theme.spacing.lg} 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.success.main};
  font-size: ${theme.typography.fontSize.lg};
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.secondary};
`;

const ContactButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.success.main};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.success.dark};
  }
`;

const ContributionsList = styled.div`
  margin-top: ${theme.spacing.xl};
`;

const ContributionItem = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  border-left: 3px solid ${theme.colors.success.main};
`;

const ContributionTitle = styled.div`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const ContributionDate = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

interface Expert {
  id: string;
  name: string;
  title: string;
  avatar: string;
  answers: number;
  followers: number;
  rating: number;
}

const VerifiedExpertContributions: React.FC = () => {
  const [experts] = useState<Expert[]>([
    { id: '1', name: 'Dr. Islamabad Khan', title: 'Biology Expert', avatar: 'IK', answers: 156, followers: 2340, rating: 4.9 },
    { id: '2', name: 'Prof. Chemistry Ali', title: 'Chemistry Expert', avatar: 'CA', answers: 203, followers: 3100, rating: 4.8 },
    { id: '3', name: 'Dr. Physics Wahab', title: 'Physics Expert', avatar: 'PW', answers: 178, followers: 2800, rating: 4.7 },
    { id: '4', name: 'Prof. History Sara', title: 'History Specialist', avatar: 'HS', answers: 124, followers: 1900, rating: 4.9 }
  ]);

  const [contributions] = useState<any[]>([
    { id: '1', title: 'Complete guide to photosynthesis with diagrams', date: '2 days ago', expert: 'Dr. Islamabad Khan' },
    { id: '2', title: 'Understanding quantum mechanics - simplified', date: '5 days ago', expert: 'Dr. Physics Wahab' },
    { id: '3', title: 'Chemical reactions: Step-by-step solutions', date: '1 week ago', expert: 'Prof. Chemistry Ali' }
  ]);

  return (
    <Container>
      <Title>⭐ Verified Expert Contributions</Title>
      
      <h3 style={{ marginBottom: theme.spacing.lg }}>Featured Experts</h3>
      <ExpertGrid>
        {experts.map((expert) => (
          <ExpertCard key={expert.id}>
            <ExpertHeader>
              <Avatar>{expert.avatar}</Avatar>
              <ExpertInfo>
                <ExpertName>
                  {expert.name}
                  <VerifiedBadge>✓ Verified</VerifiedBadge>
                </ExpertName>
                <ExpertTitle>{expert.title}</ExpertTitle>
              </ExpertInfo>
            </ExpertHeader>
            
            <Stats>
              <Stat>
                <StatValue>{expert.answers}</StatValue>
                <StatLabel>Answers</StatLabel>
              </Stat>
              <Stat>
                <StatValue>{expert.followers}</StatValue>
                <StatLabel>Followers</StatLabel>
              </Stat>
              <Stat>
                <StatValue>{expert.rating}</StatValue>
                <StatLabel>Rating ⭐</StatLabel>
              </Stat>
            </Stats>
            
            <ContactButton>📧 Ask Question</ContactButton>
          </ExpertCard>
        ))}
      </ExpertGrid>
      
      <ContributionsList>
        <h3 style={{ marginBottom: theme.spacing.lg }}>Recent Expert Contributions</h3>
        {contributions.map((contribution) => (
          <ContributionItem key={contribution.id}>
            <ContributionTitle>{contribution.title}</ContributionTitle>
            <ContributionDate>
              By {contribution.expert} • {contribution.date}
            </ContributionDate>
          </ContributionItem>
        ))}
      </ContributionsList>
    </Container>
  );
};

export default VerifiedExpertContributions;
