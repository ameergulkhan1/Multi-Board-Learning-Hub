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

const TranslationContainer = styled.div`
  background: linear-gradient(135deg, ${theme.colors.secondary.light} 0%, ${theme.colors.secondary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const InputSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const OutputSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  min-height: 120px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary.main};
  }
`;

const OutputBox = styled.div`
  background: white;
  border: 2px solid ${theme.colors.secondary.main};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  min-height: 120px;
  line-height: ${theme.typography.lineHeight.lg};
  color: ${theme.colors.text.primary};
  word-wrap: break-word;
`;

const TranslateButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.secondary.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.bold};
  transition: all ${theme.transition.fast};
  margin: ${theme.spacing.lg} 0;
  
  &:hover {
    background-color: ${theme.colors.secondary.dark};
  }
`;

const DocumentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
`;

const DocumentCard = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border.light};
  transition: all ${theme.transition.fast};
  cursor: pointer;
  
  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const DocumentTitle = styled.div`
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const DocumentMeta = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  display: flex;
  justify-content: space-between;
`;

const TranslateDocButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
  background-color: ${theme.colors.secondary.main};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  
  &:hover {
    background-color: ${theme.colors.secondary.dark};
  }
`;

const EnglishUrduTranslation: React.FC = () => {
  const [englishText, setEnglishText] = useState('');
  const [urduText, setUrduText] = useState('');

  const [documents] = useState<any[]>([
    { 
      id: '1', 
      titleEn: 'Chapter 5: Photosynthesis', 
      titleUr: 'باب 5: نقش و نما',
      contentPage: 'Pages 45-67',
      completed: '40%'
    },
    { 
      id: '2', 
      titleEn: 'Chapter 6: Cellular Respiration', 
      titleUr: 'باب 6: خلوی تنفس',
      contentPage: 'Pages 68-85',
      completed: '65%'
    },
    { 
      id: '3', 
      titleEn: 'Chapter 7: Cell Division', 
      titleUr: 'باب 7: خلیے کی تقسیم',
      contentPage: 'Pages 86-105',
      completed: '30%'
    },
    { 
      id: '4', 
      titleEn: 'Chapter 8: Genetics Basics', 
      titleUr: 'باب 8: وراثیات کی بنیادیں',
      contentPage: 'Pages 106-130',
      completed: '20%'
    }
  ]);

  const handleTranslate = () => {
    // Simulated translation
    const translationMap: { [key: string]: string } = {
      'photosynthesis': 'نقش و نما یا روشنی کی سنتھیسس',
      'cellular respiration': 'خلوی تنفس',
      'cell': 'خلیہ',
      'mitochondria': 'مائٹوکونڈریا',
      'energy': 'توانائی',
      'glucose': 'گلوکوز',
      'oxygen': 'آکسیجن',
      'carbon dioxide': 'کاربن ڈائی آکسائڈ'
    };

    let translated = englishText;
    Object.entries(translationMap).forEach(([en, ur]) => {
      const regex = new RegExp(en, 'gi');
      translated = translated.replace(regex, ur);
    });
    
    setUrduText(translated || 'ترجمہ جاری ہے...');
  };

  return (
    <Container>
      <Title>🌐 English to Urdu Translation Layer</Title>
      
      <TranslationContainer>
        <h3 style={{ marginBottom: theme.spacing.lg, color: theme.colors.secondary.main }}>Manual Text Translation</h3>
        
        <InputSection>
          <Label>English Text</Label>
          <TextArea 
            value={englishText}
            onChange={(e) => setEnglishText(e.target.value)}
            placeholder="Enter English text to translate..."
          />
        </InputSection>
        
        <TranslateButton onClick={handleTranslate}>🔄 Translate to Urdu</TranslateButton>
        
        {urduText && (
          <OutputSection>
            <Label>اردو ترجمہ</Label>
            <OutputBox>{urduText}</OutputBox>
          </OutputSection>
        )}
      </TranslationContainer>
      
      <h3 style={{ marginBottom: theme.spacing.lg }}>📚 Translation Status by Chapter</h3>
      <DocumentGrid>
        {documents.map((doc) => (
          <DocumentCard key={doc.id}>
            <DocumentTitle>{doc.titleEn}</DocumentTitle>
            <div style={{ fontSize: theme.typography.fontSize.sm, marginBottom: theme.spacing.md }}>
              <div style={{ color: theme.colors.text.secondary }}>اردو: {doc.titleUr}</div>
              <div style={{ color: theme.colors.text.secondary, marginTop: theme.spacing.sm }}>{doc.contentPage}</div>
            </div>
            <div style={{
              backgroundColor: theme.colors.border.light,
              borderRadius: theme.borderRadius.circle,
              height: '8px',
              marginBottom: theme.spacing.md,
              overflow: 'hidden'
            }}>
              <div 
                style={{
                  backgroundColor: theme.colors.secondary.main,
                  height: '100%',
                  width: doc.completed,
                  borderRadius: theme.borderRadius.circle,
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
            <DocumentMeta>
              <span>Progress: {doc.completed}</span>
              <span>📄 {Math.floor(Math.random() * 30 + 15)} pages</span>
            </DocumentMeta>
            <TranslateDocButton>▶️ View Translation</TranslateDocButton>
          </DocumentCard>
        ))}
      </DocumentGrid>
    </Container>
  );
};

export default EnglishUrduTranslation;
