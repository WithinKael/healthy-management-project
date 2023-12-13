import Icon from "../../images/sprite.svg";
import PropTypes from "prop-types";

import { StarIconWrapper } from "./AboutStudio.styled";

const AboutStudioSvgIcon = ({ fill, background }) => {
  return (
    <StarIconWrapper fill={fill} background={background}>
      <use href={`${Icon}#icon-star`}></use>
    </StarIconWrapper>
  );
};

AboutStudioSvgIcon.propTypes = {
  fill: PropTypes.string,
  background: PropTypes.string,
};

export default AboutStudioSvgIcon;
