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

const ClassroomGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const MainContent = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${theme.colors.border.light};
`;

const VideoPlaceholder = styled.div`
  text-align: center;
  color: ${theme.colors.text.secondary};
`;

const PlayButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${theme.colors.primary.main};
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  transition: all ${theme.transition.fast};
  margin-bottom: ${theme.spacing.lg};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${theme.shadows.lg};
  }
`;

const SidePanel = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.primary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
`;

const ParticipantsList = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
`;

const ParticipantTitle = styled.h3`
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
`;

const ParticipantItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ParticipantAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${theme.colors.primary.main};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.xs};
`;

const ParticipantName = styled.span`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  flex-grow: 1;
`;

const Status = styled.span<{ online: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.online ? theme.colors.success.main : theme.colors.text.secondary};
`;

const ControlsBar = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  justify-content: center;
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid white;
`;

const ControlButton = styled.button<{ active?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? theme.colors.danger.main : theme.colors.primary.main};
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ChatBox = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  max-height: 200px;
  overflow-y: auto;
`;

const ChatMessage = styled.div`
  padding: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.xs};
`;

const ChatSender = styled.span`
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
`;

interface Participant {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
}

const VirtualClassroom: React.FC = () => {
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [participants] = useState<Participant[]>([
    { id: '1', name: 'Dr. Ahmed', avatar: 'A', online: true },
    { id: '2', name: 'Ali Khan', avatar: 'AK', online: true },
    { id: '3', name: 'Fatima', avatar: 'F', online: true },
    { id: '4', name: 'Hassan', avatar: 'H', online: true },
    { id: '5', name: 'Sara', avatar: 'S', online: false }
  ]);

  return (
    <Container>
      <Title>🎓 Virtual Classroom Orchestration</Title>
      
      <ClassroomGrid>
        <MainContent>
          {isVideoOn ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: theme.colors.primary.main,
                borderRadius: theme.borderRadius.lg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                📹 Live Video Stream
              </div>
            </div>
          ) : (
            <VideoPlaceholder>
              <PlayButton onClick={() => setIsVideoOn(true)}>▶</PlayButton>
              <p>Click to start video broadcast</p>
            </VideoPlaceholder>
          )}
        </MainContent>
        
        <SidePanel>
          <ParticipantsList>
            <ParticipantTitle>👥 Participants ({participants.length})</ParticipantTitle>
            {participants.map((p) => (
              <ParticipantItem key={p.id}>
                <ParticipantAvatar>{p.avatar}</ParticipantAvatar>
                <ParticipantName>{p.name}</ParticipantName>
                <Status online={p.online} />
              </ParticipantItem>
            ))}
          </ParticipantsList>
          
          <ChatBox>
            <ChatMessage>
              <ChatSender>Dr. Ahmed:</ChatSender> Welcome students! Let's start the lesson.
            </ChatMessage>
            <ChatMessage>
              <ChatSender>Ali:</ChatSender> Good morning, sir!
            </ChatMessage>
            <ChatMessage>
              <ChatSender>Fatima:</ChatSender> Ready to learn!
            </ChatMessage>
          </ChatBox>
          
          <ControlsBar>
            <ControlButton 
              active={!isMicOn}
              onClick={() => setIsMicOn(!isMicOn)}
              title="Microphone"
            >
              {isMicOn ? '🎤' : '🔇'}
            </ControlButton>
            <ControlButton 
              active={isVideoOn}
              onClick={() => setIsVideoOn(!isVideoOn)}
              title="Camera"
            >
              📹
            </ControlButton>
            <ControlButton title="Leave Class">
              ☎️
            </ControlButton>
          </ControlsBar>
        </SidePanel>
      </ClassroomGrid>
    </Container>
  );
};

export default VirtualClassroom;
