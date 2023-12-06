// import Foto from "../../images/desktop/olga_picture1x.jpg";
import MediaQuery from "react-responsive";
import Fotos from "../../images/desktop/olga_picture1x.webp";
import Fotos2x from "../../images/desktop/olga_picture@2x.jpg";
import Fotos1x from "../../images/desktop/olga_picture1x.jpg";
import OlgaMob2x from "../../images/mobile/mob_olga_picture@2x.jpg";
import OlgaMob1x from "../../images/mobile/mob_olga_picture1x.jpg";
import OlgaMobWebp from "../../images/mobile/mob_olga_picture1x.webp";
import Icon from "../../images/sprite.svg";
import {
  SectionAboutMe,
  SectionAboutMeAdress,
  SectionAboutMeDiv,
  SectionAboutMeDivOl,
  SectionAboutMeDivWidth,
  SectionAboutMeHOl,
  SectionAboutMeLink,
  SectionAboutMeList,
  SectionAboutMePol,
  SectionAboutMeSvg,
  SectionAboutMeTitle,
} from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <SectionAboutMe className="container">
      <div>
        <SectionAboutMeTitle>Про мене</SectionAboutMeTitle>
        <SectionAboutMeDiv>
          <SectionAboutMeDivWidth>
            {/* <picture>
              <source
                srcSet={`${Fotos} 2x, ${Fotos} 1x`}
                media="(min-width: 768px)"
                type="image/webp"
              />
              <source
                srcSet={`${Fotos2x} 2x, ${Fotos1x} 1x`}
                media="(min-width: 768px)"
                type="image/png"
              />

              <source
                srcSet={`${OlgaMobWebp}`}
                media="(min-width: 375px)"
                type="image/webp"
              />

              <source
                srcSet={`${OlgaMob2x} 2x, ${OlgaMob1x} 1x`}
                media="(min-width: 375px)"
                type="image/png"
              />
              <img src={Fotos} alt="Ольга Поліщук" width={"828px"} />
            </picture> */}
            <MediaQuery maxWidth={767}>
              <img
                srcSet={`${OlgaMob2x} 2x, ${OlgaMob1x} 1x`}
                sizes="(max-width: 767px) 100vw"
                src={OlgaMobWebp}
                alt="Ольга Поліщук"
              />
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <img
                srcSet={`${Fotos2x} 2x, ${Fotos1x} 1x`}
                sizes="(min-width: 768px) 100vw"
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
            <ul>
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
            </ul>
            <SectionAboutMeAdress>
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
            </SectionAboutMeAdress>
          </SectionAboutMeDivOl>
        </SectionAboutMeDiv>
      </div>
    </SectionAboutMe>
  );
};

export default AboutMe;
