// import Foto from "../../images/desktop/olga_picture1x.jpg";
import MediaQuery from "react-responsive";
import Fotos from "../../images/desktop/olga_picture1x.webp";
import Fotos2x from "../../images/desktop/olga_picture@2x.jpg";
import Fotos1x from "../../images/desktop/olga_picture1x.jpg";
import OlgaMob2x from "../../images/mobile/mob_olga_picture@2x.jpg";
import OlgaMob1x from "../../images/mobile/mob_olga_picture1x.jpg";
import OlgaMobWebp from "../../images/mobile/mob_olga_picture1x.webp";
import OlgaTab1x from "../../images/tablet/olga_picture@1x.jpg";
import OlgaTab2x from "../../images/tablet/olga_picture@2x.jpg";
import OlgaTabWebp from "../../images/tablet/olga_picture@1x.webp";
import OlgaDesktop14401x from "../../images/desktop1440/olga_picture@1x.jpg";
import OlgaDesktop14402x from "../../images/desktop1440/olga_picture@2x.jpg";
import OlgaDesktop1440Webp from "../../images/desktop1440/olga_picture@1x.webp";
import Icon from "../../images/sprite.svg";
import {
  SectionAboutMe,
  SectionAboutMeAdress,
  SectionAboutMeDiv,
  SectionAboutMeDivOl,
  SectionAboutMeDivWidth,
  SectionAboutMeHOl,
  SectionAboutMeImg,
  SectionAboutMeLink,
  SectionAboutMeList,
  SectionAboutMePol,
  SectionAboutMeSvg,
  SectionAboutMeTitle,
  SectionAboutMeUl,
} from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <SectionAboutMe className="container">
      <div>
        <SectionAboutMeTitle>Про мене</SectionAboutMeTitle>
        <SectionAboutMeDiv>
          <SectionAboutMeDivWidth>
            <MediaQuery maxWidth={767}>
              <SectionAboutMeImg
                srcSet={`${OlgaMob2x} 2x, ${OlgaMob1x} 1x`}
                sizes="(max-width: 767px) 100vw"
                src={OlgaMobWebp}
                alt="Ольга Поліщук"
              />
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1439}>
              <SectionAboutMeImg
                srcSet={`${OlgaTab2x} 2x, ${OlgaTab1x} 1x`}
                sizes="(min-width: 768px) 100vw (max-width: 1439px) 100vw"
                src={OlgaTabWebp}
                alt="Ольга Поліщук"
              />
            </MediaQuery>
            <MediaQuery minWidth={1440} maxWidth={1919}>
              <SectionAboutMeImg
                srcSet={`${OlgaDesktop14402x} 2x, ${OlgaDesktop14401x} 1x`}
                sizes="(min-width: 1440px) 100vw (max-width: 1919px) 100vw"
                src={OlgaDesktop1440Webp}
                alt="Ольга Поліщук"
              />
            </MediaQuery>
            <MediaQuery minWidth={1920}>
              <SectionAboutMeImg
                srcSet={`${Fotos2x} 2x, ${Fotos1x} 1x`}
                sizes="(min-width: 1920px) 100vw"
                src={Fotos}
                alt="Ольга Поліщук"
              />
            </MediaQuery>
          </SectionAboutMeDivWidth>
          <SectionAboutMeDivOl>
            <SectionAboutMeHOl>Ольга Поліщук</SectionAboutMeHOl>
            <SectionAboutMePol>
              CEO and Founder студії стратегічного розвитку
            </SectionAboutMePol>
            <SectionAboutMeUl>
              <SectionAboutMeList>MBA Healthcare management</SectionAboutMeList>
              <SectionAboutMeList>
                Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)
              </SectionAboutMeList>
              <SectionAboutMeList>
                Експертка в &#34;Центр Розвитку Громадського Здоров&apos;я
                УКУ&#34;
              </SectionAboutMeList>
              <SectionAboutMeList>
                Бізнес-консультантка, стратег з медичного маркетингу
              </SectionAboutMeList>
              <SectionAboutMeList>
                Керівниця проєкту &#34;Стетоскоп&#34; - телеграм канал про
                медичний менеджмент та маркетингу
              </SectionAboutMeList>
              <SectionAboutMeList>
                Більше 18 років досвіду в маркетингу та комунікаціях, з них
                більше 10 років досвіду в медичному та фармацевтичному бізнесі
                на керівних посадах
              </SectionAboutMeList>
              <SectionAboutMeList>
                Використання принципів доказової медицини
              </SectionAboutMeList>
            </SectionAboutMeUl>
            <SectionAboutMeAdress>
              <li>
                <SectionAboutMeLink
                  href="https://www.instagram.com/olga_healthm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                  <SectionAboutMeSvg width="24" height="24">
                    <use href={`${Icon}#icon-arrow-up-right`}></use>
                  </SectionAboutMeSvg>
                </SectionAboutMeLink>
              </li>
              <li>
                <SectionAboutMeLink
                  href="https://www.facebook.com/olga.polishchuk.14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                  <SectionAboutMeSvg width="24" height="24">
                    <use href={`${Icon}#icon-arrow-up-right`}></use>
                  </SectionAboutMeSvg>
                </SectionAboutMeLink>
              </li>

              <li>
                <SectionAboutMeLink
                  href="https://www.linkedin.com/in/olga-polishchuk-83362140/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                  <SectionAboutMeSvg width="24" height="24">
                    <use href={`${Icon}#icon-arrow-up-right`}></use>
                  </SectionAboutMeSvg>
                </SectionAboutMeLink>
              </li>
            </SectionAboutMeAdress>
          </SectionAboutMeDivOl>
        </SectionAboutMeDiv>
      </div>
    </SectionAboutMe>
  );
};

export default AboutMe;
