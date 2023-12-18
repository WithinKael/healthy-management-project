import Svg from "../../images/svgMobileHeader/symbol-defs.svg";
import PropTypes from "prop-types";

const ModalMobaileMenuSvgIcon = ({ width, name, stroke }) => {
  return (
    <svg stroke={stroke} width={width} height={40}>
      <use href={`${Svg}#${name}`}></use>
    </svg>
  );
};

ModalMobaileMenuSvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  stroke: PropTypes.string,
  width: PropTypes.number.isRequired,
};

export default ModalMobaileMenuSvgIcon;
