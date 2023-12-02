import sprite from "../../images/sprite.svg";
import {
  MentorSessionWrapper,
  PersonalParagraph,
  PersonalSessionSectionWrapper,
  PersonalWrapper,
  ProHourParagraph,
  QuestionWrapper,
  StyledOrderLink,
  StyledPersonalList,
  StyledPersonalListItem,
  StyledSection,
  StyledSessionParagraph,
  TitleH2,
  TitleH3,
} from "../MentoringSession/MentorSession.styled";
import {
  ArrowPersonalWrapper,
  StyledPersonalArrowSvg,
  StyledPersonalContainer,
  StyledPersonalParagraph,
} from "./PersonalSupport.styled";

const PersonalSupport = () => {
  return (
    <StyledSection className="container">
      <PersonalSessionSectionWrapper>
        <MentorSessionWrapper>
          <PersonalWrapper>
            <TitleH2>Персональний супровід</TitleH2>
            <PersonalParagraph>
              Пропрацьовуємо ваші запити та досягаємо посавлених цілей
            </PersonalParagraph>
            <ProHourParagraph>від 2 місяців тісної взаємодії</ProHourParagraph>
            <StyledOrderLink href="#contact">Замовити послугу</StyledOrderLink>
          </PersonalWrapper>

          <QuestionWrapper>
            <TitleH3>Питання, з якими можете звернутися</TitleH3>
            <StyledPersonalList>
              <StyledPersonalListItem>
                Зануритись в бізнес-процеси та зрозуміти, де є точки зростання
              </StyledPersonalListItem>
              <StyledPersonalListItem>
                Зрозуміти що таке маркетинг та як він працює у вашому бізнесі
              </StyledPersonalListItem>
              <StyledPersonalListItem>
                Супровід розробки та впровадження стратегій
              </StyledPersonalListItem>
              <StyledPersonalListItem>
                Особисті питання по медичному менеджменту, маркетингу та
                розвитку, управління здоров&#39;ям
              </StyledPersonalListItem>
            </StyledPersonalList>
          </QuestionWrapper>
        </MentorSessionWrapper>
        <StyledSessionParagraph>
          Шлях проведення менторськогог супроводу
        </StyledSessionParagraph>
        <ArrowPersonalWrapper>
          <StyledPersonalContainer>
            <StyledPersonalArrowSvg>
              <use href={`${sprite}#icon-rectangle2`} />
            </StyledPersonalArrowSvg>
            <StyledPersonalParagraph>Заповнення брифу</StyledPersonalParagraph>
          </StyledPersonalContainer>
          <StyledPersonalContainer>
            <StyledPersonalArrowSvg>
              <use href={`${sprite}#icon-rectangle2`} />
            </StyledPersonalArrowSvg>
            <StyledPersonalParagraph>
              Діагностика ситуації
            </StyledPersonalParagraph>
          </StyledPersonalContainer>
          <StyledPersonalContainer>
            <StyledPersonalArrowSvg>
              <use href={`${sprite}#icon-rectangle2`} />
            </StyledPersonalArrowSvg>
            <StyledPersonalParagraph>
              Визначення зон росту
            </StyledPersonalParagraph>
          </StyledPersonalContainer>
          <StyledPersonalContainer>
            <StyledPersonalArrowSvg>
              <use href={`${sprite}#icon-rectangle2`} />
            </StyledPersonalArrowSvg>
            <StyledPersonalParagraph>Менторинг</StyledPersonalParagraph>
          </StyledPersonalContainer>
          <StyledPersonalContainer>
            <StyledPersonalArrowSvg>
              <use href={`${sprite}#icon-rectangle2`} />
            </StyledPersonalArrowSvg>
            <StyledPersonalParagraph>Рекомендації</StyledPersonalParagraph>
          </StyledPersonalContainer>
        </ArrowPersonalWrapper>
      </PersonalSessionSectionWrapper>
    </StyledSection>
  );
};

export default PersonalSupport;
