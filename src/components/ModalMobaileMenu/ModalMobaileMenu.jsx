import Svg from "../../images/svgMobileHeader/symbol-defs.svg";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import {
  ButtonMenuMobile,
  ContactMenu,
  DivMobileMenu,
  MobileMenuContainer,
  Nav,
  NavMenuMobile,
  SvgMenu,
} from "./ModalMobaileMenu.js";

const ModalMobail = document.getElementById("modalMobail");

const ModalMobaileMenu = ({ onClose, handleSetActiveLink }) => {
  return createPortal(
    <MobileMenuContainer>
      <div className="container">
        <DivMobileMenu>
          <a href="#home">
            <svg width="40" height="40">
              <use href={`${Svg}#icon-g10`}></use>
            </svg>
          </a>
          <ContactMenu
            href="#contact"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("contact", e);
            }}
          >
            Контакт
          </ContactMenu>
          <ButtonMenuMobile type="button" onClick={() => onClose()}>
            <SvgMenu width="40" height="40">
              <use href={`${Svg}#icon-close`}></use>
            </SvgMenu>
          </ButtonMenuMobile>
        </DivMobileMenu>
        <Nav>
          <NavMenuMobile
            href="#home"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("home", e);
            }}
          >
            Головна
          </NavMenuMobile>
          <NavMenuMobile
            href="#aboutUs"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("aboutUs", e);
            }}
          >
            Про нас
          </NavMenuMobile>
          <NavMenuMobile
            href="#services"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("services", e);
            }}
          >
            Послуги
          </NavMenuMobile>
          <NavMenuMobile
            href="#mentoring"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("mentoring", e);
            }}
          >
            Менторство
          </NavMenuMobile>
          <NavMenuMobile
            href="#projects"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("projects", e);
            }}
          >
            Проєкти
          </NavMenuMobile>
        </Nav>
      </div>
    </MobileMenuContainer>,
    ModalMobail
  );
};

ModalMobaileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalMobaileMenu;
