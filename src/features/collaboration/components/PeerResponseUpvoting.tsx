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

const ResponseContainer = styled.div`
  background: linear-gradient(135deg, ${theme.colors.success.light} 0%, ${theme.colors.success.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const ResponseCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.success.main};
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.colors.primary.main};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.typography.fontWeight.bold};
`;

const AuthorName = styled.span`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
`;

const HelperBadge = styled.span`
  background-color: ${theme.colors.success.main};
  color: ${theme.colors.success.contrast};
  padding: 2px 8px;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-left: ${theme.spacing.sm};
`;

const Time = styled.span`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

const ResponseText = styled.p`
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.lg};
  margin-bottom: ${theme.spacing.md};
`;

const ActionBar = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border.light};
`;

const UpvoteButton = styled.button<{ upvoted: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  transition: all ${theme.transition.fast};
  padding: ${theme.spacing.sm};
  
  &:hover {
    transform: scale(1.2);
  }
`;

const UpvoteCount = styled.span`
  color: ${theme.colors.text.secondary};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
`;

interface Response {
  id: string;
  author: string;
  avatar: string;
  isVerified: boolean;
  content: string;
  upvotes: number;
  time: string;
  isUpvoted: boolean;
}

const PeerResponseUpvoting: React.FC = () => {
  const [responses, setResponses] = useState<Response[]>([
    {
      id: '1',
      author: 'Ahmed Khan',
      avatar: 'A',
      isVerified: true,
      content: 'Mitosis is the process of cell division. It occurs in four stages: Prophase, Metaphase, Anaphase, and Telophase. Each daughter cell is identical to the parent cell.',
      upvotes: 45,
      time: '30 minutes ago',
      isUpvoted: false
    },
    {
      id: '2',
      author: 'Fatima Ali',
      avatar: 'F',
      isVerified: false,
      content: 'The key difference is that meiosis produces four haploid cells, while mitosis produces two diploid cells. That\'s why meiosis is used for sexual reproduction.',
      upvotes: 38,
      time: '1 hour ago',
      isUpvoted: false
    },
    {
      id: '3',
      author: 'Dr. Hassan',
      avatar: 'H',
      isVerified: true,
      content: 'Both processes involve the separation of chromosomes, but they serve different purposes. Mitosis maintains the chromosome number, while meiosis reduces it by half for gamete formation. Great questions, everyone!',
      upvotes: 62,
      time: '2 hours ago',
      isUpvoted: false
    }
  ]);

  const handleUpvote = (responseId: string) => {
    setResponses(responses.map(r => 
      r.id === responseId ? {
        ...r,
        upvotes: r.isUpvoted ? r.upvotes - 1 : r.upvotes + 1,
        isUpvoted: !r.isUpvoted
      } : r
    ));
  };

  const sortedResponses = [...responses].sort((a, b) => b.upvotes - a.upvotes);

  return (
    <Container>
      <Title>👍 Peer Response & Up-voting</Title>
      
      <ResponseContainer>
        <h3 style={{ marginBottom: theme.spacing.lg }}>
          What is the difference between mitosis and meiosis?
        </h3>
        
        {sortedResponses.map((response) => (
          <ResponseCard key={response.id}>
            <AuthorInfo>
              <Avatar>{response.avatar}</Avatar>
              <div>
                <AuthorName>
                  {response.author}
                  {response.isVerified && <HelperBadge>✓ Verified</HelperBadge>}
                </AuthorName>
              </div>
              <Time>{response.time}</Time>
            </AuthorInfo>
            
            <ResponseText>{response.content}</ResponseText>
            
            <ActionBar>
              <UpvoteButton 
                upvoted={response.isUpvoted}
                onClick={() => handleUpvote(response.id)}
              >
                {response.isUpvoted ? '👍' : '🤎'}
              </UpvoteButton>
              <UpvoteCount>{response.upvotes}</UpvoteCount>
              <button style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                marginLeft: 'auto'
              }}>
                💬 Reply
              </button>
            </ActionBar>
          </ResponseCard>
        ))}
      </ResponseContainer>
    </Container>
  );
};

export default PeerResponseUpvoting;
