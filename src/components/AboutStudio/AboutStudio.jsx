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
} from "./AboutStudio.styled";
import AboutStudioSvgIcon from "./AboutStudioSvgIcon";

const AboutStudio = () => {
  return (
    <SectionAboutStudio id="aboutUs" className="container">
      <div>
        <SectionAboutStudioTitle>Про студію</SectionAboutStudioTitle>
        <SectionAboutStudioDiv>
          <div>
            <SectionAboutStudioText>
              Студія стратегічного розвитку медичних брендів{" "}
              <b>«Healthy management»</b> надає послуги медичного менеджменту,
              медичного маркетингу, консалтингу бізнес-процесів та створення
              стратегій здоров’я для підприємств та бізнесу. Ми співпрацюємо з
              медичними закладами, лікарями, власниками, керівниками та
              створюємо спільні стратегії та дії для ефективного просування та
              розвитку проєктів, використовуючи комплексний підхід
            </SectionAboutStudioText>
          </div>
          <DivSectionOurMission>
            <SectionAboutStudioDivTitle>
              <AboutStudioSvgIcon
                fill="var(--background-white)"
                background="rgba(244, 244, 246, 0.2)"
              />

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
              <AboutStudioSvgIcon
                fill="var(--primary-bluedark)"
                background="rgba(27, 54, 65, 0.2)"
              />

              <SectionAboutStudioValues>Наші цінності</SectionAboutStudioValues>
            </SectionAboutStudioDivTitle>
            <SectionAboutStudioTextVan>
              Повага, довіра, партнерство та експертність. Будуємо нову культуру
              управління здоровим менеджментом у медичній галузі
            </SectionAboutStudioTextVan>
          </DivSection>
        </SectionAboutStudioDiv>
      </div>
    </SectionAboutStudio>
  );
};

export default AboutStudio;
