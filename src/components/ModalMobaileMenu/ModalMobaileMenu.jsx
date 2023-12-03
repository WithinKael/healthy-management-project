import s from "./ModalMobaileMenu.module.css";
import Svg from "../../images/svgMobileHeader/symbol-defs.svg";

const ModalMobaileMenu = ({ onClose }) => {
  return (
    <div className={s.mabileMenuContainer}>
      <div className={s.divMobileMenu}>
        <a href="#home">
          <svg width="40" height="40">
            <use href={`${Svg}#icon-g10`}></use>
          </svg>
        </a>
        <a className={s.contactMenu} href="#contact">
          Контакт
        </a>
        <button
          className={s.buttonMenuMobile}
          type="button"
          onClick={() => onClose()}
        >
          <svg className={s.svgMenu} width="40" height="40">
            <use href={`${Svg}#icon-close`}></use>
          </svg>
        </button>
      </div>
      <nav className={s.nav}>
        <a className={s.navMenuMobile} href="#home">
          Головна
        </a>
        <a className={s.navMenuMobile} href="#aboutUs">
          Про нас
        </a>
        <a className={s.navMenuMobile} href="#services">
          Послуги
        </a>
        <a className={s.navMenuMobile} href="#mentoring">
          Менторство
        </a>
        <a className={s.navMenuMobile} href="#projects">
          Проєкти
        </a>
      </nav>
    </div>
  );
};

export default ModalMobaileMenu;
