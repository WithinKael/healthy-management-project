import Icon from "../../images/sprite.svg";
import { SectionAboutMeSvg } from "./AboutMe.styled";

const AboutMeSvgIcon = () => {
  return (
    <SectionAboutMeSvg width="24" height="24">
      <use href={`${Icon}#icon-arrow-up-right`}></use>
    </SectionAboutMeSvg>
  );
};

export default AboutMeSvgIcon;
