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
import { useMediaQuery } from "react-responsive";

const ModalMobail = document.getElementById("modalMobail");

const ModalMobaileMenu = ({ onClose, handleSetActiveLink }) => {
  const isMobail = useMediaQuery({ query: "(max-width: 767px)" });

  const maxHeightPercentage = 100;
  const maxNavHeight = `calc(${maxHeightPercentage}vh - 80px)`;
  return createPortal(
    <MobileMenuContainer>
      <div className="container">
        <DivMobileMenu>
          <a
            href="#home"
            onClick={(e) => {
              onClose();
              handleSetActiveLink("home", e);
            }}
          >
            <ModalMobaileMenuSvgIcon name="icon-g10" width={40} />
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
              width={isMobail ? 40 : 70}
            />
          </ButtonMenuMobile>
        </DivMobileMenu>

        <div>
          <Nav style={{ maxHeight: maxNavHeight, overflowY: "auto" }}>
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
      </div>
    </MobileMenuContainer>,
    ModalMobail
  );
};

ModalMobaileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalMobaileMenu;
