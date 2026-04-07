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

const HistoryContainer = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`;

const HistoryCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.primary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.primary.main};
  transition: all ${theme.transition.fast};
  cursor: pointer;
  
  &:hover {
    transform: translateX(4px);
    box-shadow: ${theme.shadows.md};
  }
`;

const QueryText = styled.div`
  color: ${theme.colors.primary.main};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.base};
  margin-bottom: ${theme.spacing.md};
`;

const QueryMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const ResultCount = styled.span`
  background-color: ${theme.colors.primary.main};
  color: white;
  padding: 2px 8px;
  border-radius: ${theme.borderRadius.circle};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const TimeStamp = styled.span``;

const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};
`;

const FilterContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 2px solid ${props => props.active ? theme.colors.primary.main : theme.colors.border.light};
  background-color: ${props => props.active ? theme.colors.primary.lighter : 'white'};
  color: ${props => props.active ? theme.colors.primary.main : theme.colors.text.secondary};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    border-color: ${theme.colors.primary.main};
  }
`;

const ClearButton = styled.button`
  margin-left: auto;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.danger.main};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  
  &:hover {
    background-color: ${theme.colors.danger.dark};
  }
`;

interface QueryHistoryItem {
  id: string;
  query: string;
  timestamp: string;
  resultCount: number;
  category: 'biology' | 'chemistry' | 'physics' | 'history';
}

const QueryHistory: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'biology' | 'chemistry' | 'physics' | 'history'>('all');
  
  const [history] = useState<QueryHistoryItem[]>([
    { id: '1', query: 'What is photosynthesis and its stages?', timestamp: '2 hours ago', resultCount: 8, category: 'biology' },
    { id: '2', query: 'How to balance chemical equations', timestamp: '5 hours ago', resultCount: 12, category: 'chemistry' },
    { id: '3', query: 'Newton\'s laws of motion explained', timestamp: '1 day ago', resultCount: 15, category: 'physics' },
    { id: '4', query: 'World War 2 causes and effects', timestamp: '2 days ago', resultCount: 9, category: 'history' },
    { id: '5', query: 'Cellular respiration process', timestamp: '3 days ago', resultCount: 7, category: 'biology' },
    { id: '6', query: 'Atomic structure and bonding', timestamp: '4 days ago', resultCount: 11, category: 'chemistry' }
  ]);

  const filteredHistory = filter === 'all' 
    ? history 
    : history.filter(item => item.category === filter);

  const handleClearHistory = () => {
    console.log('Clearing search history');
  };

  return (
    <Container>
      <Title>📜 Query History</Title>
      
      <FilterContainer>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
          All
        </FilterButton>
        <FilterButton active={filter === 'biology'} onClick={() => setFilter('biology')}>
          Biology
        </FilterButton>
        <FilterButton active={filter === 'chemistry'} onClick={() => setFilter('chemistry')}>
          Chemistry
        </FilterButton>
        <FilterButton active={filter === 'physics'} onClick={() => setFilter('physics')}>
          Physics
        </FilterButton>
        <FilterButton active={filter === 'history'} onClick={() => setFilter('history')}>
          History
        </FilterButton>
        {filteredHistory.length > 0 && (
          <ClearButton onClick={handleClearHistory}>🗑️ Clear History</ClearButton>
        )}
      </FilterContainer>
      
      {filteredHistory.length > 0 ? (
        <HistoryContainer>
          {filteredHistory.map((item) => (
            <HistoryCard key={item.id}>
              <QueryText>{item.query}</QueryText>
              <QueryMeta>
                <TimeStamp>🕐 {item.timestamp}</TimeStamp>
                <ResultCount>{item.resultCount} results</ResultCount>
              </QueryMeta>
            </HistoryCard>
          ))}
        </HistoryContainer>
      ) : (
        <EmptyState>
          <p>📭 No search history found in this category</p>
        </EmptyState>
      )}
    </Container>
  );
};

export default QueryHistory;
