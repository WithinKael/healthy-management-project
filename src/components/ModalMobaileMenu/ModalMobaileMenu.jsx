import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import {
  ButtonMenuMobile,
  ContactMenu,
  DivMobileMenu,
  MobileMenuContainer,
  Nav,
  NavMenuMobile,
} from "./ModalMobaileMenu.styled.js";
import { menuItems } from "./ModalMobaileMenuData";
import ModalMobaileMenuSvgIcon from "./ModalMobaileMenuSvgIcon";

const ModalMobail = document.getElementById("modalMobail");

const ModalMobaileMenu = ({ onClose, handleSetActiveLink }) => {
  return createPortal(
    <MobileMenuContainer>
      <div className="container">
        <DivMobileMenu>
          <a href="#home">
            <ModalMobaileMenuSvgIcon name="icon-g10" />
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
            <ModalMobaileMenuSvgIcon
              name="icon-close"
              stroke={"var(--primary-black)"}
            />
          </ButtonMenuMobile>
        </DivMobileMenu>
        <Nav>
          {menuItems.map(({ id, label }) => (
            <NavMenuMobile
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                onClose();
                handleSetActiveLink(id, e);
              }}
            >
              {label}
            </NavMenuMobile>
          ))}
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
