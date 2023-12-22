import {
  ListItem,
  ListItemText,
  PrinciplesContentWrapper,
  PrinciplesDiv,
  PrinciplesList,
  PrinciplesText,
  PrinciplesTitle,
  SectionPrinciples,
  SvgDone,
} from "./WorkPrinciples.styled";
import sprite from "../../images/sprite.svg";
import MediaQuery from "react-responsive";
import MobFotoWithBook1x from "../../images/mobile/mob_olga_with_book1x.webp";
import MobFotoWithBook2x from "../../images/mobile/mob_olga_with_book@2x.webp";
import MobFotoWithBook from "../../images/mobile/mob_olga_with_book1x.jpg";
import FotoWithBook1x from "../../images/desktop/olga_with_book1x.webp";
import FotoWithBook2x from "../../images/desktop/olga_with_book2x.webp";
import FotoWithBookDefault from "../../images/desktop/olga_with_book1x.jpg";
import Tablet1x from "../../images/tablet/olga_with_book_768_1x.webp";
import Tablet2x from "../../images/tablet/olga_with_book_768@2x.webp";
import TabletDefault from "../../images/tablet/olga_with_book_768_1x.jpg";
import MediumFotoWithBook1x from "../../images/desktop1440/olga_with_book_1440_1x.webp";
import MediumFotoWithBook2x from "../../images/desktop1440/olga_with_book_1440@2x.webp";
import MediumFotoWithBookDefault from "../../images/desktop1440/olga_with_book_1440@2x.webp";

const WorkPrinciples = () => {
  return (
    <SectionPrinciples className="container">
      <PrinciplesDiv>
        <PrinciplesContentWrapper>
          <PrinciplesTitle>Принципи роботи</PrinciplesTitle>
          <PrinciplesText>
            Наші принципи роботи полягають у співдії з ціннісними брендами та
            командами, які готові до чесної співпраці, щоб сприяти досягненню
            поставлених цілей. Готові ділитися власним досвідом та створювати
            стратегії здорового менеджменту та розвитку, маркетингу та сервісу
          </PrinciplesText>
        </PrinciplesContentWrapper>
        <PrinciplesList>
          <ListItem>
            <SvgDone>
              <use href={`${sprite}#icon-done-yellow`}></use>
            </SvgDone>
            <ListItemText>
              Більше 18 років досвіду в маркетингу та комунікаціях
            </ListItemText>
          </ListItem>
          <ListItem>
            <SvgDone>
              <use href={`${sprite}#icon-done-yellow`}></use>
            </SvgDone>
            <ListItemText>
              Глибоке розуміння бізнес-процесів медичних закладів
            </ListItemText>
          </ListItem>
          <ListItem>
            <SvgDone>
              <use href={`${sprite}#icon-done-yellow`}></use>
            </SvgDone>
            <ListItemText>
              Використання принципів доказової медицини
            </ListItemText>
          </ListItem>
        </PrinciplesList>
      </PrinciplesDiv>
      <MediaQuery minWidth={375} maxWidth={767}>
        <img
          srcSet={`${MobFotoWithBook1x} 1x, ${MobFotoWithBook2x} 2x`}
          src={MobFotoWithBook}
          alt="Ольга Поліщук - ваш ментор в медичній галузі"
          loading="lazy"
        />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1439}>
        <img
          srcSet={`${Tablet1x} 1x, ${Tablet2x} 2x`}
          src={TabletDefault}
          alt="Ольга Поліщук - ваш ментор в медичній галузі"
          loading="lazy"
        />
      </MediaQuery>
      <MediaQuery minWidth={1440} maxWidth={1919}>
        <img
          srcSet={`${MediumFotoWithBook1x} 1x, ${MediumFotoWithBook2x} 2x`}
          src={MediumFotoWithBookDefault}
          alt="Ольга Поліщук - ваш ментор в медичній галузі"
          loading="lazy"
        />
      </MediaQuery>
      <MediaQuery minWidth={1920}>
        <img
          srcSet={`${FotoWithBook1x} 1x, ${FotoWithBook2x} 2x`}
          src={FotoWithBookDefault}
          alt="Ольга Поліщук - ваш ментор в медичній галузі"
          loading="lazy"
        />
      </MediaQuery>
    </SectionPrinciples>
  );
};

export default WorkPrinciples;
