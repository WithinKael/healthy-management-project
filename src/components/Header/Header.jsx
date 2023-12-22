import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "../../images/sprite.svg";
import svgMobile from "../../images/svgMobileHeader/symbol-defs.svg";
import {
  HeaderAddress,
  Headers,
  HeaderDiv,
  HeaderNav,
  HeaderNavMenu,
  SvgMobileHeader,
  ButtonMobileHeader,
} from "./Header.styled";
import { useMediaQuery } from "react-responsive";
import ModalMobaileMenu from "../ModalMobaileMenu/ModalMobaileMenu.jsx";
import { navItems } from "./HeaderData";

const Header = ({ handleSetActiveLink }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [shownModal, setShownModal] = useState(false);

  const isTabletSvg = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isMobailAndTablet = useMediaQuery({ query: "(max-width: 1439px)" });
  const isDesktop1440 = useMediaQuery({ query: "(min-width: 1440px)" });

  const onModal = () => setShownModal(!shownModal);

  const handleScroll = () => {
    const sections = [
      "home",
      "aboutUs",
      "services",
      "mentoring",
      "projects",
      "contact",
    ];
    const currentSection = sections.find((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      }
      return sectionElement;
    });
    if (currentSection) {
      setActiveLink(currentSection);
    }
  };

  useEffect(() => {
    if (shownModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shownModal]);

  return (
    <Headers>
      <div className="container">
        <HeaderDiv>
          {(isMobailAndTablet || isDesktop1440) && (
            <a
              href="#home"
              onClick={(e) => handleSetActiveLink("home", e)}
              aria-label="Logo link Healthy Management"
            >
              <svg width={isDesktop1440 ? "227" : "40"} height="40">
                <use
                  href={
                    isDesktop1440
                      ? `${logo}#logo-black`
                      : `${svgMobile}#icon-g10`
                  }
                ></use>
              </svg>
            </a>
          )}

          {isDesktop1440 && (
            <HeaderNav>
              {navItems.map((item) => (
                <HeaderNavMenu
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeLink === item.id ? "active" : ""}
                  onClick={(e) => handleSetActiveLink(item.id, e)}
                >
                  {item.label}
                </HeaderNavMenu>
              ))}
            </HeaderNav>
          )}
          <HeaderAddress
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={(e) => handleSetActiveLink("contact", e)}
          >
            Контакт
          </HeaderAddress>

          {(isMobailAndTablet || isTabletSvg) && (
            <ButtonMobileHeader
              type="button"
              onClick={onModal}
              aria-label="Open mobile menu"
            >
              <SvgMobileHeader>
                <use
                  href={
                    isTabletSvg
                      ? `${svgMobile}#icon-menuburgerhorizontaltablet`
                      : `${svgMobile}#icon-menuburger`
                  }
                ></use>
              </SvgMobileHeader>
            </ButtonMobileHeader>
          )}
        </HeaderDiv>
      </div>
      {isMobailAndTablet && shownModal && (
        <ModalMobaileMenu
          onClose={onModal}
          handleSetActiveLink={handleSetActiveLink}
        />
      )}
    </Headers>
  );
};

Header.propTypes = {
  handleSetActiveLink: PropTypes.func.isRequired,
};

export default Header;
