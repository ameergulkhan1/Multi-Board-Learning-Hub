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

const TransliterationCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.primary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  border: 2px solid ${theme.colors.primary.main};
`;

const InputLabel = styled.label`
  display: block;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  margin-bottom: ${theme.spacing.lg};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
  }
`;

const OutputBox = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  border: 2px solid ${theme.colors.primary.main};
  min-height: 60px;
  display: flex;
  align-items: center;
`;

const OutputText = styled.span`
  color: ${theme.colors.primary.main};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.lg};
`;

const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const ExampleCard = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 3px solid ${theme.colors.primary.main};
`;

const ExampleTitle = styled.div`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const ExampleItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const ExampleItem = styled.div`
  padding: ${theme.spacing.sm};
  background: white;
  border-radius: ${theme.borderRadius.md};
  border-left: 2px solid ${theme.colors.primary.main};
`;

const Original = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing.sm};
`;

const Transliterated = styled.div`
  color: ${theme.colors.primary.main};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.base};
`;

const ScientificTransliteration: React.FC = () => {
  const [englishText, setEnglishText] = useState('');
  const [urduText, setUrduText] = useState('');

  const handleTransliterate = () => {
    // Simulated transliteration
    const transliterationMap: { [key: string]: string } = {
      'photosynthesis': 'فوٹو سنتھیسس',
      'chlorophyll': 'کلوروفل',
      'mitochondria': 'مائٹوکونڈریا',
      'peptide': 'پیپٹائڈ',
      'glucose': 'گلوکوز',
      'enzyme': 'انزائم',
      'protein': 'پروٹین',
      'dna': 'ڈی این اے',
      'rna': 'آر این اے',
      'atom': 'ایٹم'
    };

    const transliterated = transliterationMap[englishText.toLowerCase()] || englishText + ' (transliteration pending)';
    setUrduText(transliterated);
  };

  const examples = [
    { english: 'Photosynthesis', urdu: 'فوٹو سنتھیسس', urduName: 'روشنی کی سنتھیسس' },
    { english: 'Mitochondria', urdu: 'مائٹوکونڈریا', urduName: 'طاقے کی سنتھیسس' },
    { english: 'Enzyme', urdu: 'انزائم', urduName: 'حیاتیاتی رجحان کار' },
    { english: 'Peptide Bond', urdu: 'پیپٹائڈ بانڈ', urduName: 'پروٹین کا بند' },
    { english: 'Glucose', urdu: 'گلوکوز', urduName: 'سادہ شکر' },
    { english: 'Chlorophyll', urdu: 'کلوروفل', urduName: 'سبزہ رنگ' }
  ];

  return (
    <Container>
      <Title>🔤 Scientific Terminology Transliteration</Title>
      
      <TransliterationCard>
        <InputLabel>Enter Scientific Term (English)</InputLabel>
        <Input 
          type="text"
          value={englishText}
          onChange={(e) => setEnglishText(e.target.value)}
          placeholder="e.g., photosynthesis, mitochondria, enzyme"
        />
        
        <button 
          onClick={handleTransliterate}
          style={{
            width: '100%',
            padding: theme.spacing.md,
            backgroundColor: theme.colors.primary.main,
            color: theme.colors.primary.contrast,
            border: 'none',
            borderRadius: theme.borderRadius.md,
            cursor: 'pointer',
            fontWeight: 'bold',
            marginBottom: theme.spacing.lg
          }}
        >
          🔄 Transliterate
        </button>
        
        {urduText && (
          <>
            <InputLabel>Transliterated Form (اردو)</InputLabel>
            <OutputBox>
              <OutputText>{urduText}</OutputText>
            </OutputBox>
          </>
        )}
      </TransliterationCard>
      
      <h3 style={{ marginBottom: theme.spacing.lg }}>📚 Common Scientific Terms Transliteration</h3>
      <ExamplesGrid>
        {examples.map((example, idx) => (
          <ExampleCard key={idx}>
            <ExampleTitle>{example.english}</ExampleTitle>
            <ExampleItems>
              <ExampleItem>
                <Original>English: {example.english}</Original>
                <Transliterated>اردو: {example.urdu}</Transliterated>
              </ExampleItem>
              <ExampleItem>
                <Original>معنی:</Original>
                <Transliterated>{example.urduName}</Transliterated>
              </ExampleItem>
            </ExampleItems>
          </ExampleCard>
        ))}
      </ExamplesGrid>
    </Container>
  );
};

export default ScientificTransliteration;
