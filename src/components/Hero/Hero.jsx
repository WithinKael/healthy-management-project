import {
  ListItem,
  SectionHero,
  SectionHeroDiv,
  SectionHeroLinks,
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
          <SectionHeroLinks href="consultation">Консультація</SectionHeroLinks>
          <SectionHeroLinks href="services">Послуги</SectionHeroLinks>
        </SectionHeroDiv>
      </div>
    </SectionHero>
  );
};

export default Hero;
