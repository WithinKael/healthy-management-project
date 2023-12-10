import {
  ListItem,
  SectionHero,
  SectionHeroDiv,
  SectionHeroLinksContact,
  SectionHeroLinksServices,
  SectionHeroText,
  SectionHeroTextUl,
  SectionHeroTitle,
} from "./Hero.styled";

const Hero = () => {
  return (
    <SectionHero id="home">
      <div className="container">
        <SectionHeroTitle>
          Бізнес-партнер з розвитку та комунікацій здорового менеджменту
        </SectionHeroTitle>
        <SectionHeroText>
          Будуємо ефективні стратегії здорового менеджменту для медичних
          брендів:
        </SectionHeroText>
        <SectionHeroTextUl>
          <ListItem>медичний менеджмент і маркетинг,</ListItem>

          <ListItem>
            програми управління здоров&apos;ям для підприємств та бізнесу,
          </ListItem>
          <ListItem>менторство</ListItem>
        </SectionHeroTextUl>
        <SectionHeroDiv>
          <SectionHeroLinksContact href="#contact">
            Консультація
          </SectionHeroLinksContact>
          <SectionHeroLinksServices href="#services">
            Послуги
          </SectionHeroLinksServices>
        </SectionHeroDiv>
      </div>
    </SectionHero>
  );
};

export default Hero;
