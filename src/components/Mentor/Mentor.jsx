import MediaQuery from "react-responsive";
import PropTypes from "prop-types";
import mentorPhoto2 from "../../images/desktop/pic_mentorstvo1x.webp";
import mentorPhoto2x from "../../images/desktop/pic_mentorstvo2x.jpg";
import mentorPhotoJgeg1x from "../../images/desktop/pic_mentorstvo1x.jpg";
import mentorPhotoMobWebp from "../../images/mobile/mob_mentor1x.webp";
import mentorPhotoMob2x from "../../images/mobile/mob_mentor@2x.webp";
import mentorPhotoMobJpg1x from "../../images/mobile/mob_mentor1x.jpg";
import mentor768Jpg1x from "../../images/tablet/pic_mentorstvo_768_1x.jpg";
import mentor768WebP1x from "../../images/tablet/pic_mentorstvo_768_1x.webp";
import mentor768WebP2x from "../../images/tablet/pic_mentorstvo_768@2x.webp";

import mentor1440WebP1x from "../../images/desktop1440/pic_mentorstvo_1440_1x.webp";
import mentor1440WebP2x from "../../images/desktop1440/pic_mentorstvo_1440@2x.webp";
import mentor1440Jpg1x from "../../images/desktop1440/pic_mentorstvo_1440_1x.jpg";

import {
  AboutWrapper,
  DescriptionWrapper,
  ForWHoWrapper,
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

const Mentor = ({ handleSetLink }) => {
  return (
    <StyledSection id="mentoring" className="container">
      <ImgSectionWrapper>
        <div>
          <MediaQuery minWidth={1920}>
            <img
              srcSet={`${mentorPhoto2} 1x, ${mentorPhoto2x} 2x`}
              sizes="(min-width: 1920px) 1920px"
              src={mentorPhotoJgeg1x}
              alt="Ольга Поліщук - ваш ментор в медичній галузі"
              loading="lazy"
            />
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <img
              srcSet={`${mentorPhotoMob2x} 2x, ${mentorPhotoMobWebp} 1x`}
              sizes="(max-width: 767px) 100vw"
              src={mentorPhotoMobJpg1x}
              alt="Ольга Поліщук - ваш ментор в медичній галузі"
              loading="lazy"
            />
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <img
              srcSet={`${mentor768WebP1x} 1x, ${mentor768WebP2x} 2x`}
              sizes="(min-width: 768px) 768px"
              src={mentor768Jpg1x}
              alt="Ольга Поліщук - ваш ментор в медичній галузі"
              loading="lazy"
            />
          </MediaQuery>
          <MediaQuery minWidth={1440} maxWidth={1919}>
            <img
              srcSet={`${mentor1440WebP1x} 1x, ${mentor1440WebP2x} 2x`}
              sizes="(min-width: 1440px) 100vw (max-width: 1919px) 100vw"
              src={mentor1440Jpg1x}
              alt="Ольга Поліщук - ваш ментор в медичній галузі"
              loading="lazy"
            />
          </MediaQuery>
        </div>
        <MentorstvoWrapper>
          <TitleH2>Менторство</TitleH2>
          <ParagraphWrapper>
            <Paragraph>
              <b>Менторство в медичній галузі</b> - почути іншу думку,
              підтвердити власні гіпотези, зрозуміти вектор розвитку, отримати
              підтримку та пораду з питань менеджменту і медичного маркетингу
            </Paragraph>
            <Paragraph>
              <b>Менторство</b> - це про взаємодію та чесну комунікацію, про
              спільні цінності та готовність до росту, про надійне партнерство
              та довіру
            </Paragraph>
          </ParagraphWrapper>
          <StyledMentorButton
            onClick={(e) => handleSetLink("contact", e)}
            href="#contact"
            aria-label="Scroll to contacts form to have more info"
          >
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
                  Про здоров&#39;я працівників та стратегії підвищенння
                  ефективності бізнесу
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

Mentor.propTypes = {
  handleSetLink: PropTypes.func.isRequired,
};

export default Mentor;
