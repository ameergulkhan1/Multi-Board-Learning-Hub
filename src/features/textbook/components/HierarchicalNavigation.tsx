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

const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: ${theme.spacing.lg};
`;

const TOCPanel = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  max-height: 500px;
  overflow-y: auto;
`;

const ContentPanel = styled.div`
  background-color: ${theme.colors.bg.primary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
`;

const TOCItem = styled.div<{ $level: number; $active?: boolean }>`
  padding: 0.5rem ${theme.spacing.md};
  padding-left: ${(props) => `calc(${theme.spacing.md} + ${props.$level * 1.5}rem)`};
  cursor: pointer;
  border-left: 3px solid transparent;
  border-left-color: ${(props) => props.$active ? theme.colors.primary.main : 'transparent'};
  background-color: ${(props) => props.$active ? theme.colors.primary.lighter : 'transparent'};
  color: ${(props) => props.$active ? theme.colors.primary.main : theme.colors.text.primary};
  transition: all ${theme.transition.fast};
  font-weight: ${(props) => props.$active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.normal};
  
  &:hover {
    background-color: ${theme.colors.primary.lighter};
  }
`;

const ContentSection = styled.div`
  h3 {
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.md};
    font-size: ${theme.typography.fontSize.xl};
  }
  
  p {
    color: ${theme.colors.text.secondary};
    line-height: ${theme.typography.lineHeight.lg};
    margin-bottom: ${theme.spacing.md};
  }
`;

interface TOCNode {
  id: string;
  title: string;
  level: number;
  content?: string;
  children?: TOCNode[];
}

const HierarchicalNavigation: React.FC = () => {
  const [toc] = useState<TOCNode[]>([
    {
      id: '1',
      title: 'Chapter 1: Introduction',
      level: 0,
      content: 'Introduction to basic concepts...',
      children: [
        { id: '1.1', title: '1.1 What is Learning?', level: 1, content: 'Learning is the process of acquiring knowledge...' },
        { id: '1.2', title: '1.2 Types of Learning', level: 1, content: 'There are various types of learning...' },
      ]
    },
    {
      id: '2',
      title: 'Chapter 2: Advanced Topics',
      level: 0,
      content: 'Moving to more advanced concepts...',
      children: [
        { id: '2.1', title: '2.1 Deep Concepts', level: 1, content: 'Deep concepts explained...' },
        { id: '2.2', title: '2.2 Practical Application', level: 1, content: 'How to apply these concepts...' },
      ]
    }
  ]);

  const [activeId, setActiveId] = useState('1');
  const [activeContent, setActiveContent] = useState(toc[0].content);

  const flattenTOC = (nodes: TOCNode[]): TOCNode[] => {
    return nodes.reduce((acc, node) => {
      acc.push(node);
      if (node.children) {
        acc.push(...flattenTOC(node.children));
      }
      return acc;
    }, [] as TOCNode[]);
  };

  const handleItemClick = (item: TOCNode) => {
    setActiveId(item.id);
    setActiveContent(item.content || '');
  };

  return (
    <Container>
      <Title>📖 Hierarchical Content Navigation</Title>
      <NavigationWrapper>
        <TOCPanel>
          <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Table of Contents</p>
          {flattenTOC(toc).map((item) => (
            <TOCItem
              key={item.id}
              $level={item.level}
              $active={activeId === item.id}
              onClick={() => handleItemClick(item)}
            >
              {item.title}
            </TOCItem>
          ))}
        </TOCPanel>
        <ContentPanel>
          <ContentSection>
            <h3>{toc.find(t => t.id === activeId)?.title || 'Select a chapter'}</h3>
            <p>{activeContent || 'Select a topic from the table of contents to view content.'}</p>
          </ContentSection>
        </ContentPanel>
      </NavigationWrapper>
    </Container>
  );
};

export default HierarchicalNavigation;
