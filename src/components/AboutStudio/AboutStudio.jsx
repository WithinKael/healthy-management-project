import Icon from "../../images/sprite.svg";

import {
  SectionAboutStudio,
  SectionAboutStudioTitle,
  SectionAboutStudioDiv,
  SectionAboutStudioText,
  SectionAboutStudioTextVan,
  SectionAboutStudioDivTitle,
  DivSection,
  SectionAboutStudioValues,
  DivSectionOurMission,
  SectionAboutStudioOurMission,
  SectionAboutStudioOurMissionP,
  SvgIconStarBlack,
  SvgIconStarWhite,
} from "./AboutStudio.styled";

const AboutStudio = () => {
  return (
    <SectionAboutStudio id="aboutUs">
      <SectionAboutStudioTitle>Про студію</SectionAboutStudioTitle>
      <SectionAboutStudioDiv>
        <div>
          <SectionAboutStudioText>
            Студія стратегічного розвитку медичних брендів «Healthy management»
            надає послуги медичного менеджменту, медичного маркетингу,
            консалтингу бізнес-процесів та створення стратегій здоров’я для
            підприємств та бізнесу. Ми співпрацюємо з медичними закладами,
            лікарями, власниками, керівниками та створюємо спільні стратегії та
            дії для ефективного просування та розвитку проєктів, використовуючи
            комплексний підхід
          </SectionAboutStudioText>
        </div>
        <DivSectionOurMission>
          <SectionAboutStudioDivTitle>
            <SvgIconStarWhite>
              <use href={`${Icon}#icon-star`}></use>
            </SvgIconStarWhite>

            <SectionAboutStudioOurMission>
              Наша місія
            </SectionAboutStudioOurMission>
          </SectionAboutStudioDivTitle>
          <SectionAboutStudioOurMissionP>
            Будуємо ефективні стратегії по управлінню здоров’ям та створюємо
            продуктивні дії для популяризації здорового менеджменту
          </SectionAboutStudioOurMissionP>
        </DivSectionOurMission>
        <DivSection>
          <SectionAboutStudioDivTitle>
            <SvgIconStarBlack>
              <use href={`${Icon}#icon-star`}></use>
            </SvgIconStarBlack>
            <SectionAboutStudioValues>Наші цінності</SectionAboutStudioValues>
          </SectionAboutStudioDivTitle>
          <SectionAboutStudioTextVan>
            Повага, довіра, партнерство та експертність. Будуємо нову культуру
            управління здоровим менеджментом у медичній галузі
          </SectionAboutStudioTextVan>
        </DivSection>
      </SectionAboutStudioDiv>
    </SectionAboutStudio>
  );
};

export default AboutStudio;
