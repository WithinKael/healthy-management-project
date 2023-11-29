import mentorPhoto1 from "../../images/desktop/pic_mentorstvo1x.jpg";
import mentorPhoto2 from "../../images/desktop/pic_mentorstvo1x.webp";
import mentorPhoto2x from "../../images/desktop/pic_mentorstvo2x.jpg";
import {
  AboutWrapper,
  DescriptionWrapper,
  ForWHoWrapper,
  Img,
  ImgSectionWrapper,
  MentorstvoWrapper,
  Paragraph,
  ParagraphWrapper,
  StyledAboutUl,
  StyledForWhoUl,
  StyledLi,
  StyledLiWhite,
  StyledMentorButton,
  StyledSection,
  TitleH2,
  TitleH3,
  TitleH3White,
} from "./Mentor.styled";

const Mentor = () => {
  return (
    <StyledSection className="container">
      <ImgSectionWrapper>
        <div>
          <picture>
            <source
              media="(min-width: 1920px)"
              srcSet={`${mentorPhoto2} 1x, ${mentorPhoto2x} 2x`}
            />
            <Img src={mentorPhoto1} />
          </picture>
        </div>
        <MentorstvoWrapper>
          <TitleH2>Менторство</TitleH2>
          <ParagraphWrapper>
            <Paragraph>
              <b>Менторство в медичній галузі</b>- почути іншу думку,
              підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати
              підтримку та пораду з питань менеджменту і медичного маркетингу
            </Paragraph>
            <Paragraph>
              <b>Менторство</b> - це про взаємодію та чесну комунікацію, про
              спільні цінності та готовність до росту, про надійне партнерство
              та довіру
            </Paragraph>
          </ParagraphWrapper>
          <StyledMentorButton type="button" href="#">
            Дізнатися вартість
          </StyledMentorButton>
        </MentorstvoWrapper>
      </ImgSectionWrapper>
      <div>
        <DescriptionWrapper>
          <AboutWrapper>
            <TitleH3>Про що це?</TitleH3>
            <StyledAboutUl>
              <StyledLi>
                <p>
                  Про прагнення почути чесну іншу думку/та або підтвердити
                  власні гіпотези для власника/керівника
                </p>
              </StyledLi>
              <StyledLi>
                <p>Про бізнес-процеси та їх ефективність</p>
              </StyledLi>
              <StyledLi>
                <p>Про вектори розвитку бізнесу або проєкту</p>
              </StyledLi>
              <StyledLi>
                <p>Про практичний інструментарій для впровадження змін</p>
              </StyledLi>
              <StyledLi>
                <p>Про маркетинг, сервіс та комунікації в медичних бізнесах</p>
              </StyledLi>
              <StyledLi>
                <p>
                  Про здоров´я працівників та стратегії підвищенння ефективності
                  бізнесу
                </p>
              </StyledLi>
            </StyledAboutUl>
          </AboutWrapper>
          <ForWHoWrapper>
            <TitleH3White>Для кого</TitleH3White>
            <StyledForWhoUl>
              <StyledLiWhite>
                <p>Лідерам, які прагнуть змін</p>
              </StyledLiWhite>
              <StyledLiWhite>
                <p>Власникам, які хочуть отримати незалежку експертну думку</p>
              </StyledLiWhite>
              <StyledLiWhite>
                <p>Керівникам та маркетологам, яким потрібна підтримка</p>
              </StyledLiWhite>
              <StyledLiWhite>
                <p>Лікарям, яким важливо отримати пораду</p>
              </StyledLiWhite>
            </StyledForWhoUl>
            <TitleH3White>Формат</TitleH3White>
            <StyledForWhoUl>
              <StyledLiWhite>
                <p>Індивідуальна ментор-сесія (від 1 години)</p>
              </StyledLiWhite>
              <StyledLiWhite>
                <p>Персональний супровід на декілька місяців</p>
              </StyledLiWhite>
            </StyledForWhoUl>
          </ForWHoWrapper>
        </DescriptionWrapper>
      </div>
    </StyledSection>
  );
};

export default Mentor;
