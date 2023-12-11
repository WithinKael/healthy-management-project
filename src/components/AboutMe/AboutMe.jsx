import MediaQuery from "react-responsive";
import OlgaDesktopWebp19201x from "../../images/desktop/olga_picture1x.webp";
import OlgaDesktopWebp19202x from "../../images/desktop/olga_picture2x.webp";
import OlgaDesktop19201x from "../../images/desktop/olga_picture1x.jpg";
import OlgaMob1x from "../../images/mobile/mob_olga_picture1x.jpg";
import OlgaMobWebp1x from "../../images/mobile/mob_olga_picture1x.webp";
import OlgaMobWebp2x from "../../images/mobile/mob_olga_picture2x.webp";
import OlgaTab1x from "../../images/tablet/olga_picture@1x.jpg";
import OlgaTabWebp1x from "../../images/tablet/olga_picture@1x.webp";
import OlgaTabWebp2x from "../../images/tablet/olga_picture@2x.webp";
import OlgaDesktop14401x from "../../images/desktop1440/olga_picture@1x.jpg";
import OlgaDesktop1440Webp1x from "../../images/desktop1440/olga_picture@1x.webp";
import OlgaDesktop1440Webp2x from "../../images/desktop1440/olga_picture@2x.webp";
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
                srcSet={`${OlgaMobWebp2x} 2x, ${OlgaMobWebp1x} 1x`}
                sizes="(max-width: 767px) 100vw"
                src={OlgaMob1x}
                alt="Ольга Поліщук"
              />
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1439}>
              <SectionAboutMeImg
                srcSet={`${OlgaTabWebp2x} 2x, ${OlgaTabWebp1x} 1x`}
                type="image/webp"
                sizes="(min-width: 768px) 100vw (max-width: 1439px) 100vw"
                src={OlgaTab1x}
                alt="Ольга Поліщук"
              />
            </MediaQuery>
            <MediaQuery minWidth={1440} maxWidth={1919}>
              <SectionAboutMeImg
                srcSet={`${OlgaDesktop1440Webp2x} 2x, ${OlgaDesktop1440Webp1x} 1x`}
                type="image/webp"
                sizes="(min-width: 1440px) 100vw (max-width: 1919px) 100vw"
                src={`${OlgaDesktop14401x}`}
                alt="Ольга Поліщук"
              />
            </MediaQuery>
            <MediaQuery minWidth={1920}>
              <SectionAboutMeImg
                srcSet={`${OlgaDesktopWebp19202x} 2x, ${OlgaDesktopWebp19201x} 1x`}
                type="image/webp"
                sizes="(min-width: 1920px) 100vw"
                src={OlgaDesktop19201x}
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
