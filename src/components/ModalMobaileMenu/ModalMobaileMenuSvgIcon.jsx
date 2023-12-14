import Svg from "../../images/svgMobileHeader/symbol-defs.svg";

const ModalMobaileMenuSvgIcon = ({ name, stroke }) => {
  return (
    <svg width={40} height={40} stroke={stroke}>
      <use href={`${Svg}#${name}`}></use>
    </svg>
  );
};

export default ModalMobaileMenuSvgIcon;
