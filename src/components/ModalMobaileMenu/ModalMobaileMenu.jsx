import s from "./ModalMobaileMenu.module.css";
import Svg from "../../images/svgMobileHeader/symbol-defs.svg";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const ModalMobail = document.getElementById("modalMobail");

const ModalMobaileMenu = ({ onClose, handleSetActiveLink }) => {
  return createPortal(
    <div className={s.mabileMenuContainer}>
      <div className="container">
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
          <a
            className={s.navMenuMobile}
            href="#home"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("home", e);
            }}
          >
            Головна
          </a>
          <a
            className={s.navMenuMobile}
            href="#aboutUs"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("aboutUs", e);
            }}
          >
            Про нас
          </a>
          <a
            className={s.navMenuMobile}
            href="#services"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("services", e);
            }}
          >
            Послуги
          </a>
          <a
            className={s.navMenuMobile}
            href="#mentoring"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("mentoring", e);
            }}
          >
            Менторство
          </a>
          <a
            className={s.navMenuMobile}
            href="#projects"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("projects", e);
            }}
          >
            Проєкти
          </a>
        </nav>
      </div>
    </div>,
    ModalMobail
  );
};

ModalMobaileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalMobaileMenu;
