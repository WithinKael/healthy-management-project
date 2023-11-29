import s from "./AboutStudio.module.css";
import Icon from "../../images/sprite.svg";

const AboutStudio = () => {
  return (
    <section className={s.sectionAboutStudio} id="aboutUs">
      <h2 className={s.sectionAboutStudioTitle}>Про студію</h2>
      <div className={s.sectionAboutStudioDiv}>
        <div>
          <p className={s.sectionAboutStudioText}>
            Студія стратегічного розвитку медичних брендів «Healthy management»
            надає послуги медичного менеджменту, медичного маркетингу,
            консалтингу бізнес-процесів та створення стратегій здоров’я для
            підприємств та бізнесу. Ми співпрацюємо з медичними закладами,
            лікарями, власниками, керівниками та створюємо спільні стратегії та
            дії для ефективного просування та розвитку проєктів, використовуючи
            комплексний підхід
          </p>
        </div>
        <div className={s.divsectionOurMission}>
          <div className={s.sectionAboutStudioDivTitle}>
            {/* <svg width="24" height="24">
              <use href={`${Icon}#icon-star`}></use>
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 18.0745L16.3649 20.8368C17.1642 21.343 18.1424 20.5947 17.932 19.6482L16.7751 14.4537L20.6351 10.9541C21.3398 10.3157 20.9611 9.10517 20.0356 9.02813L14.9555 8.57692L12.9676 3.66857C12.61 2.77714 11.39 2.77714 11.0324 3.66857L9.04451 8.56591L3.96443 9.01713C3.03887 9.09416 2.66023 10.3047 3.36492 10.943L7.22494 14.4427L6.06799 19.6372C5.85763 20.5837 6.83578 21.332 7.63513 20.8258L12 18.0745Z"
                fill="#F8F8F8"
              />
            </svg>
            <h4 className={s.sectionAboutStudioOurMission}>Наша місія</h4>
          </div>
          <p className={s.sectionAboutStudioOurMissionP}>
            Будуємо ефективні стратегії по управлінню здоров’ям та створюємо
            продуктивні дії для популяризації здорового менеджменту
          </p>
        </div>
        <div className={s.divSection}>
          <div className={s.sectionAboutStudioDivTitle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 18.0745L16.3649 20.8368C17.1642 21.343 18.1424 20.5947 17.932 19.6482L16.7751 14.4537L20.6351 10.9541C21.3398 10.3157 20.9611 9.10517 20.0356 9.02813L14.9555 8.57692L12.9676 3.66857C12.61 2.77714 11.39 2.77714 11.0324 3.66857L9.04451 8.56591L3.96443 9.01713C3.03887 9.09416 2.66023 10.3047 3.36492 10.943L7.22494 14.4427L6.06799 19.6372C5.85763 20.5837 6.83578 21.332 7.63513 20.8258L12 18.0745Z"
                fill="#1B3641"
              />
            </svg>
            {/* <svg width="24" height="24">
              <use href={`${Icon}#icon-star`}></use>
            </svg> */}
            <h4 className={s.sectionAboutStudioValues}>Наші цінності</h4>
          </div>
          <p className={s.sectionAboutStudioTextVan}>
            Повага, довіра, партнерство та експертність. Будуємо нову культуру
            управління здоровим менеджментом у медичній галузі
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;
