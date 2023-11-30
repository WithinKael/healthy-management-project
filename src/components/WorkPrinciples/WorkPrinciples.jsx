import {
  Image,
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
import FotoWithBook from "../../images/desktop/olga_with_book1x.webp";
import FotoWithBook1x from "../../images/desktop/olga_with_book1x.jpg";
import FotoWithBook2x from "../../images/desktop/olga_with_book2x.jpg";
import sprite from "../../images/sprite.svg";

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
      <picture>
        <source
          srcSet={`${FotoWithBook2x} 2x, ${FotoWithBook1x} 1x`}
          media="(min-width: 1920px)"
        />
        <Image src={FotoWithBook} alt="Ольга Поліщук" />
      </picture>
    </SectionPrinciples>
  );
};

export default WorkPrinciples;
