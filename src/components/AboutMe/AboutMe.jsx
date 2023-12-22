import MediaQuery from "react-responsive";

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
  SectionAboutMeTitle,
  SectionAboutMeUl,
} from "./AboutMe.styled";

import { socialLinks, aboutMeListItems, mediaQueries } from "./AboutMeData.js";
import AboutMeSvgIcon from "./AboutMeSvgIcon.jsx";

const AboutMe = () => {
  return (
    <SectionAboutMe className="container">
      <div>
        <SectionAboutMeTitle>Про мене</SectionAboutMeTitle>
        <SectionAboutMeDiv>
          <SectionAboutMeDivWidth>
            {mediaQueries.map((media, key) => (
              <MediaQuery key={key} query={media.query}>
                <SectionAboutMeImg
                  alt="Ольга Поліщук"
                  {...media.imgData}
                  loading="lazy"
                />
              </MediaQuery>
            ))}
          </SectionAboutMeDivWidth>
          <SectionAboutMeDivOl>
            <SectionAboutMeHOl>Ольга Поліщук</SectionAboutMeHOl>
            <SectionAboutMePol>
              CEO and Founder студії стратегічного розвитку
            </SectionAboutMePol>
            <SectionAboutMeUl>
              {aboutMeListItems.map((item, index) => (
                <SectionAboutMeList key={index}>{item}</SectionAboutMeList>
              ))}
            </SectionAboutMeUl>
            <SectionAboutMeAdress>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <SectionAboutMeLink
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                    <AboutMeSvgIcon />
                  </SectionAboutMeLink>
                </li>
              ))}
            </SectionAboutMeAdress>
          </SectionAboutMeDivOl>
        </SectionAboutMeDiv>
      </div>
    </SectionAboutMe>
  );
};

export default AboutMe;
