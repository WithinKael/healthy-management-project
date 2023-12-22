import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
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

const arrows = [
  "Заповнення брифу",
  "Діагностика ситуації",
  "Визначення зон росту",
  "Менторинг",
  "Рекомендації",
];

const questionList = [
  "Зануритись в бізнес-процеси та зрозуміти, де є точки зростання",
  "Зрозуміти що таке маркетинг та як він працює у вашому бізнесі",
  "Супровід розробки та впровадження стратегій",
  "Особисті питання по медичному менеджменту, маркетингу та розвитку, управління здоров'ям",
];

const PersonalSupport = ({ handleSetLink }) => {
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
            <StyledOrderLink
              onClick={(e) => handleSetLink("contact", e)}
              href="#contact"
              aria-label="Scroll to contacts form"
            >
              Замовити послугу
            </StyledOrderLink>
          </PersonalWrapper>

          <QuestionWrapper>
            <TitleH3>Питання, з якими можете звернутися</TitleH3>
            <StyledPersonalList>
              {questionList.map((item) => (
                <StyledPersonalListItem key={item}>
                  {item}
                </StyledPersonalListItem>
              ))}
            </StyledPersonalList>
          </QuestionWrapper>
        </MentorSessionWrapper>
        <StyledSessionParagraph>
          Шлях проведення менторського супроводу
        </StyledSessionParagraph>
        <ArrowPersonalWrapper>
          {arrows.map((item) => (
            <StyledPersonalContainer key={item}>
              <MediaQuery minWidth={330} maxWidth={767}>
                <StyledPersonalArrowSvg>
                  <use href={`${sprite}#icon-rectangle-mob`} />
                </StyledPersonalArrowSvg>
              </MediaQuery>
              <MediaQuery minWidth={768} maxWidth={1439}>
                <StyledPersonalArrowSvg>
                  <use href={`${sprite}#icon-rectangle-tab`} />
                </StyledPersonalArrowSvg>
              </MediaQuery>
              <MediaQuery minWidth={1440} maxWidth={1919}>
                <StyledPersonalArrowSvg>
                  <use href={`${sprite}#icon-rectangle-72`} />
                </StyledPersonalArrowSvg>
              </MediaQuery>
              <MediaQuery minWidth={1920}>
                <StyledPersonalArrowSvg>
                  <use href={`${sprite}#icon-rectangle-1920-2`} />
                </StyledPersonalArrowSvg>
              </MediaQuery>
              <StyledPersonalParagraph>{item}</StyledPersonalParagraph>
            </StyledPersonalContainer>
          ))}
        </ArrowPersonalWrapper>
      </PersonalSessionSectionWrapper>
    </StyledSection>
  );
};

PersonalSupport.propTypes = {
  handleSetLink: PropTypes.func.isRequired,
};

export default PersonalSupport;
