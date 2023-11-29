import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.sectionHero} id="home">
      <h1 className={s.sectionHeroTitle}>
        Бізнес-партнер з розвитку та комунікацій здорового менеджменту
      </h1>
      <h3 className={s.sectionHeroText}>
        Будуємо ефективні стратегії здорового менеджменту для медичних брендів:
      </h3>
      <ul className={s.sectionHeroTextUl}>
        <li className={s.sectionHeroText}>медичний менеджмент і маркетинг,</li>
        <li className={s.sectionHeroText}>
          програми управління здоров'ям для підприємств та бізнесу,
        </li>
        <li className={s.sectionHeroText}>менторство</li>
      </ul>
      <div className={s.sectionHeroDiv}>
        <a href="consultation" className={s.sectionHeroLinks}>
          Консультація
        </a>
        <a href="services" className={s.sectionHeroLinks}>
          Послуги
        </a>
      </div>
    </section>
  );
};

export default Hero;
