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

const VoiceInputContainer = styled.div`
  background: linear-gradient(135deg, ${theme.colors.warning.light} 0%, ${theme.colors.warning.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const VoiceButton = styled.button<{ isListening: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.isListening ? theme.colors.danger.main : theme.colors.warning.main};
  color: white;
  font-size: 32px;
  cursor: pointer;
  transition: all ${theme.transition.fast};
  box-shadow: ${props => props.isListening ? `0 0 20px ${theme.colors.danger.main}` : theme.shadows.lg};
  animation: ${props => props.isListening ? 'pulse 1.5s infinite' : 'none'};
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const VoiceStatus = styled.div`
  margin-top: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const TranscriptionBox = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
  min-height: 100px;
  line-height: ${theme.typography.lineHeight.lg};
`;

const LanguageOptions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  justify-content: center;
`;

const LangButton = styled.button<{ active: boolean }>`
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

const SearchHistory = styled.div`
  margin-top: ${theme.spacing.xl};
`;

const HistoryTitle = styled.h3`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const HistoryItem = styled.div`
  background-color: ${theme.colors.bg.secondary};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.md};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  border-left: 3px solid ${theme.colors.primary.main};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const HistoryQuery = styled.span`
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const HistoryTime = styled.span`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  margin-left: ${theme.spacing.md};
`;

interface VoiceQuery {
  id: string;
  query: string;
  language: string;
  time: string;
}

const VoiceActivatedInput: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  
  const [history] = useState<VoiceQuery[]>([
    { id: '1', query: 'What is photosynthesis?', language: 'en', time: '2 hours ago' },
    { id: '2', query: 'کیمیائی بندش کیا ہے؟', language: 'ur', time: '1 day ago' },
    { id: '3', query: 'Explain the water cycle', language: 'en', time: '2 days ago' }
  ]);

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        const sampleQueries = {
          en: "Can you explain Newton's first law of motion?",
          ur: "نیوٹن کا پہلا قانون حرکت کیا ہے؟"
        };
        setTranscription(sampleQueries[language]);
        setIsListening(false);
      }, 3000);
    }
  };

  const handleSearch = () => {
    console.log(`Searching: ${transcription} (${language})`);
  };

  return (
    <Container>
      <Title>🎤 Voice-Activated Query Input</Title>
      
      <LanguageOptions>
        <LangButton 
          active={language === 'en'} 
          onClick={() => setLanguage('en')}
        >
          🇬🇧 English
        </LangButton>
        <LangButton 
          active={language === 'ur'} 
          onClick={() => setLanguage('ur')}
        >
          🇵🇰 اردو
        </LangButton>
      </LanguageOptions>
      
      <VoiceInputContainer>
        <p style={{ marginBottom: theme.spacing.lg, fontWeight: 'bold' }}>
          {isListening ? 'Listening...' : 'Click to speak your question'}
        </p>
        <VoiceButton isListening={isListening} onClick={handleVoiceInput}>
          🎤
        </VoiceButton>
        <VoiceStatus>
          {isListening ? '🔴 Recording in progress' : '⚪ Ready to record'}
        </VoiceStatus>
      </VoiceInputContainer>
      
      {transcription && (
        <>
          <TranscriptionBox>
            <strong>Transcribed Query:</strong>
            <p>{transcription}</p>
          </TranscriptionBox>
          <button 
            onClick={handleSearch}
            style={{
              backgroundColor: theme.colors.primary.main,
              color: theme.colors.primary.contrast,
              border: 'none',
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              borderRadius: theme.borderRadius.md,
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: theme.spacing.lg
            }}
          >
            🔍 Search
          </button>
        </>
      )}
      
      <SearchHistory>
        <HistoryTitle>📜 Recent Voice Queries</HistoryTitle>
        {history.map((item) => (
          <HistoryItem key={item.id}>
            <HistoryQuery>{item.query}</HistoryQuery>
            <HistoryTime>{item.time}</HistoryTime>
          </HistoryItem>
        ))}
      </SearchHistory>
    </Container>
  );
};

export default VoiceActivatedInput;
