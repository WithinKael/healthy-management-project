import {
  ListItem,
  SectionHero,
  SectionHeroDiv,
  SectionHeroText,
  SectionHeroTextUl,
  SectionHeroTitle,
} from "./Hero.styled";
import { listItems } from "./HeroData";
import SectionHeroLink from "./SectionHeroLink.jsx";

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
          {listItems.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </SectionHeroTextUl>
        <SectionHeroDiv>
          <SectionHeroLink type="contact" href="#contact">
            Консультація
          </SectionHeroLink>
          <SectionHeroLink type="services" href="#services">
            Послуги
          </SectionHeroLink>
        </SectionHeroDiv>
      </div>
    </SectionHero>
  );
};

export default Hero;
