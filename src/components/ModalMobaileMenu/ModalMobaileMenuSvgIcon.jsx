import Svg from "../../images/svgMobileHeader/symbol-defs.svg";
import PropTypes from "prop-types";

const ModalMobaileMenuSvgIcon = ({ name, stroke }) => {
  return (
    <svg width={40} height={40} stroke={stroke}>
      <use href={`${Svg}#${name}`}></use>
    </svg>
  );
};

ModalMobaileMenuSvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

export default ModalMobaileMenuSvgIcon;
