import sprite from "../../images/sprite.svg";
import {
  ArrowWrapper,
  MentorSessionWrapper,
  PersonalParagraph,
  PersonalSessionSectionWrapper,
  PersonalWrapper,
  ProHourParagraph,
  QuestionWrapper,
  StyledArrowSvg,
  StyledContainer,
  StyledOrderLink,
  StyledParagraph,
  StyledPersonalList,
  StyledPersonalListItem,
  StyledSection,
  StyledSessionParagraph,
  TitleH2,
  TitleH3,
} from "./MentorSession.styled";
const MentoringSession = () => {
  return (
    <StyledSection className="container">
      <PersonalSessionSectionWrapper>
        <MentorSessionWrapper>
          <PersonalWrapper>
            <TitleH2>Індивідуальна ментор сесія</TitleH2>
            <PersonalParagraph>
              Вирішення вашого індивідуального запиту
            </PersonalParagraph>
            <ProHourParagraph>від 1 години</ProHourParagraph>
            <StyledOrderLink href="#">Замовити послугу</StyledOrderLink>
          </PersonalWrapper>

          <QuestionWrapper>
            <TitleH3>Питання, з якими можете звернутися</TitleH3>
            <StyledPersonalList>
              <StyledPersonalListItem>
                Незалежна думка щодо маркетингу та розвитку
              </StyledPersonalListItem>
              <StyledPersonalListItem>
                Порада по створенню відділу маркетингу або оцінка існуючої
                структури
              </StyledPersonalListItem>
              <StyledPersonalListItem>
                Питання по роботі з підрядниками
              </StyledPersonalListItem>
              <StyledPersonalListItem>
                Порада щодо оптимізації бізнес-процесів
              </StyledPersonalListItem>
              <StyledPersonalListItem>
                Як вірно оцінити ефективність маркетингових дій
              </StyledPersonalListItem>
              <StyledPersonalListItem>
                Які інструменти комунікацій використовувати
              </StyledPersonalListItem>
              <StyledPersonalListItem>
                Особисте питання по менеджменту та розвитку з питань управління{" "}
                <br />
                здоров´ям
              </StyledPersonalListItem>
            </StyledPersonalList>
          </QuestionWrapper>
        </MentorSessionWrapper>
        <StyledSessionParagraph>
          Шлях проведення менторської сесії
        </StyledSessionParagraph>
        <ArrowWrapper>
          <StyledContainer>
            <StyledArrowSvg>
              <use href={`${sprite}#icon-rectangle`} />
            </StyledArrowSvg>
            <StyledParagraph>Заповнення брифу</StyledParagraph>
          </StyledContainer>
          <StyledContainer>
            <StyledArrowSvg>
              <use href={`${sprite}#icon-rectangle`} />
            </StyledArrowSvg>
            <StyledParagraph>Діагностика ситуації</StyledParagraph>
          </StyledContainer>
          <StyledContainer>
            <StyledArrowSvg>
              <use href={`${sprite}#icon-rectangle`} />
            </StyledArrowSvg>
            <StyledParagraph>Проведення сесії</StyledParagraph>
          </StyledContainer>
          <StyledContainer>
            <StyledArrowSvg>
              <use href={`${sprite}#icon-rectangle`} />
            </StyledArrowSvg>
            <StyledParagraph>Рекомендації</StyledParagraph>
          </StyledContainer>
        </ArrowWrapper>
      </PersonalSessionSectionWrapper>
    </StyledSection>
  );
};

export default MentoringSession;
