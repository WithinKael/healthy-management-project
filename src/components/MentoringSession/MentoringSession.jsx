import MediaQuery from "react-responsive";
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

const MentoringSession = ({ handleSetLink }) => {
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
            <StyledOrderLink
              href="#contact"
              onClick={(e) => handleSetLink("contact", e)}
            >
              Замовити послугу
            </StyledOrderLink>
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
                {/* <br /> */}
                здоров&#39;ям
              </StyledPersonalListItem>
            </StyledPersonalList>
          </QuestionWrapper>
        </MentorSessionWrapper>
        <StyledSessionParagraph>
          Шлях проведення менторської сесії
        </StyledSessionParagraph>
        <ArrowWrapper>
          <StyledContainer>
            <MediaQuery minWidth={330} maxWidth={767}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle-mob`} />
              </StyledArrowSvg>
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1439}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle-tab`} />
              </StyledArrowSvg>
            </MediaQuery>
            <MediaQuery minWidth={1440}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle`} />
              </StyledArrowSvg>
            </MediaQuery>
            <StyledParagraph>Заповнення брифу</StyledParagraph>
          </StyledContainer>

          <StyledContainer>
            <MediaQuery minWidth={330} maxWidth={767}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle-mob`} />
              </StyledArrowSvg>
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1439}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle-tab`} />
              </StyledArrowSvg>
            </MediaQuery>
            <MediaQuery minWidth={1440}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle`} />
              </StyledArrowSvg>
            </MediaQuery>
            <StyledParagraph>Діагностика ситуації</StyledParagraph>
          </StyledContainer>

          <StyledContainer>
            <MediaQuery minWidth={330} maxWidth={767}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle-mob`} />
              </StyledArrowSvg>
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1439}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle-tab`} />
              </StyledArrowSvg>
            </MediaQuery>
            <MediaQuery minWidth={1440}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle`} />
              </StyledArrowSvg>
            </MediaQuery>
            <StyledParagraph>Проведення сесії</StyledParagraph>
          </StyledContainer>

          <StyledContainer>
            <MediaQuery minWidth={330} maxWidth={767}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle-mob`} />
              </StyledArrowSvg>
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1439}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle-tab`} />
              </StyledArrowSvg>
            </MediaQuery>
            <MediaQuery minWidth={1440}>
              <StyledArrowSvg>
                <use href={`${sprite}#icon-rectangle`} />
              </StyledArrowSvg>
            </MediaQuery>
            <StyledParagraph>Рекомендації</StyledParagraph>
          </StyledContainer>
        </ArrowWrapper>
      </PersonalSessionSectionWrapper>
    </StyledSection>
  );
};

export default MentoringSession;
