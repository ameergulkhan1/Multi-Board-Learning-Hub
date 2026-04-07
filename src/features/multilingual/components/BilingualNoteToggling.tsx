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

const ToggleContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  align-items: center;
`;

const LanguageToggle = styled.div`
  display: flex;
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.md};
  padding: 4px;
`;

const LanguageButton = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  background-color: ${props => props.active ? theme.colors.primary.main : 'transparent'};
  color: ${props => props.active ? theme.colors.primary.contrast : theme.colors.text.secondary};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${props => props.active ? theme.colors.primary.dark : theme.colors.bg.secondary};
  }
`;

const ContentCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.primary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.primary.main};
`;

const ContentTitle = styled.h3`
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.md};
`;

const ContentText = styled.p`
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.lg};
  font-size: ${theme.typography.fontSize.base};
  margin-bottom: ${theme.spacing.md};
`;

const Note = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  font-style: italic;
`;

const ActionButton = styled.button`
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.primary.contrast};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  margin-right: ${theme.spacing.md};
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

interface BilingualContent {
  id: string;
  titleEn: string;
  titleUr: string;
  contentEn: string;
  contentUr: string;
  noteEn: string;
  noteUr: string;
}

const BilingualNoteToggling: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  
  const [contents] = useState<BilingualContent[]>([
    {
      id: '1',
      titleEn: 'Photosynthesis in Plants',
      titleUr: 'پودوں میں نقش و نما',
      contentEn: 'Photosynthesis is the process by which plants convert light energy into chemical energy. It occurs in the chloroplasts of plant cells and produces glucose and oxygen.',
      contentUr: 'نقش و نما وہ عمل ہے جس میں پودے روشنی کی توانائی کو شمیائی توانائی میں تبدیل کرتے ہیں۔ یہ پودوں کے خلیوں کے کلوروپلاسٹ میں ہوتا ہے اور گلوکوز اور آکسیجن پیدا کرتا ہے۔',
      noteEn: 'This is a fundamental concept in biology. Remember: Light + Water + CO2 = Glucose + O2',
      noteUr: 'یہ حیاتیات میں ایک بنیادی تصور ہے۔ یاد رکھیں: روشنی + پانی + CO2 = گلوکوز + O2'
    },
    {
      id: '2',
      titleEn: 'Water Cycle: Evaporation and Condensation',
      titleUr: 'پانی کے چکر: بخارات اور گاڑھا پن',
      contentEn: 'The water cycle describes the movement of water between the Earth\'s surface and the atmosphere. Water evaporates from surfaces, condenses in the clouds, and falls as precipitation.',
      contentUr: 'پانی کا چکر زمین کی سطح اور ماحول کے درمیان پانی کی حرکت کو بیان کرتا ہے۔ پانی سطحوں سے بخارات بنتا ہے، بادلوں میں گاڑھا ہوتا ہے، اور بارش کے طور پر گرتا ہے۔',
      noteEn: 'Key stages: Evaporation → Condensation → Precipitation → Collection',
      noteUr: 'اہم مراحل: بخارات بنانا → گاڑھا پن → بارش → جمع کرنا'
    },
    {
      id: '3',
      titleEn: 'Healthy Nutrition and Balanced Diet',
      titleUr: 'صحت مند غذائیت اور متوازن غذا',
      contentEn: 'A balanced diet includes proteins, carbohydrates, fats, vitamins, and minerals. Each nutrient plays a vital role in maintaining health and preventing diseases.',
      contentUr: 'متوازن غذا میں پروٹین، کاربوہائیڈریٹ، چکنائی، وٹامن اور معدنیات شامل ہوتے ہیں۔ ہر غذائی چیز صحت برقرار رکھنے اور بیماریوں کو روکنے میں اہم کردار ادا کرتی ہے۔',
      noteEn: 'Remember: 5-6 small meals per day is better than 2-3 large meals',
      noteUr: 'یاد رکھیں: روزانہ 5-6 چھوٹی کھانوں بہتر ہے 2-3 بڑی کھانوں سے'
    }
  ]);

  return (
    <Container>
      <Title>🌐 Bilingual Note Toggling</Title>
      
      <ToggleContainer>
        <span style={{ fontWeight: 'bold', color: theme.colors.text.primary }}>Select Language:</span>
        <LanguageToggle>
          <LanguageButton 
            active={language === 'en'} 
            onClick={() => setLanguage('en')}
          >
            🇬🇧 English
          </LanguageButton>
          <LanguageButton 
            active={language === 'ur'} 
            onClick={() => setLanguage('ur')}
          >
            🇵🇰 اردو
          </LanguageButton>
        </LanguageToggle>
      </ToggleContainer>
      
      <div>
        {contents.map((content) => (
          <ContentCard key={content.id}>
            <ContentTitle>
              {language === 'en' ? content.titleEn : content.titleUr}
            </ContentTitle>
            <ContentText>
              {language === 'en' ? content.contentEn : content.contentUr}
            </ContentText>
            <Note>
              {language === 'en' ? content.noteEn : content.noteUr}
            </Note>
            <div style={{ marginTop: theme.spacing.lg }}>
              <ActionButton>
                {language === 'en' ? '📝 Take Notes' : '📝 نوٹس لیں'}
              </ActionButton>
              <ActionButton style={{ backgroundColor: theme.colors.secondary.main }}>
                {language === 'en' ? '📚 Save to Collection' : '📚 کلیکشن میں محفوظ کریں'}
              </ActionButton>
            </div>
          </ContentCard>
        ))}
      </div>
    </Container>
  );
};

export default BilingualNoteToggling;
