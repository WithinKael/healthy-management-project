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
import ModalMobaileMenu from "../ModalMobaileMenu/ModalMobaileMenu";

const Header = ({ handleSetActiveLink }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [shownModal, setShownModal] = useState(false);

  const isMobail = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  // const isDesctop = useMediaQuery({ query: "(max-width: 1440px)" });

  const onModal = () => {
    setShownModal(!shownModal);
  };

  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleSetActiveLink = (link, event) => {
  //   event.preventDefault();
  //   // setActiveLink(link);

  //   const section = document.getElementById(link);
  //   if (section) {
  //     const rect = section.getBoundingClientRect();
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     const targetOffset = rect.top + scrollTop - 60;

  //     window.scrollTo({
  //       top: targetOffset,
  //       behavior: "smooth",
  //     });

  //     setTimeout(() => {
  //       event.target.blur();
  //     }, 1000);
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      // setScrollPosition(window.scrollY);

      const sections = ["home", "aboutUs", "services", "mentoring", "projects"];
      const currentSection = sections.find((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          // sectionElement.focus()
          const rect = sectionElement.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return sectionElement;
      });
      console.log(currentSection);
      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Headers>
      <div className="container">
        <HeaderDiv>
          {isMobail && (
            <a href="#home">
              <svg width="40" height="40">
                <use href={`${svgMobile}#icon-g10`}></use>
              </svg>
            </a>
          )}
          {isTablet && (
            <a href="#home">
              <svg width="227" height="40">
                <use href={`${logo}#logo-black`}></use>
              </svg>
            </a>
          )}
          {isTablet && (
            <HeaderNav>
              <HeaderNavMenu
                href="#home"
                className={activeLink === "home" ? "active" : ""}
                onClick={(e) => handleSetActiveLink("home", e)}
              >
                Головна
              </HeaderNavMenu>
              <HeaderNavMenu
                href="#aboutUs"
                className={activeLink === "aboutUs" ? "active" : ""}
                onClick={(e) => handleSetActiveLink("aboutUs", e)}
              >
                Про нас
              </HeaderNavMenu>
              <HeaderNavMenu
                href="#services"
                className={activeLink === "services" ? "active" : ""}
                onClick={(e) => handleSetActiveLink("services", e)}
              >
                Послуги
              </HeaderNavMenu>
              <HeaderNavMenu
                href="#mentoring"
                className={activeLink === "mentoring" ? "active" : ""}
                onClick={(e) => handleSetActiveLink("mentoring", e)}
              >
                Менторство
              </HeaderNavMenu>
              <HeaderNavMenu
                href="#projects"
                className={activeLink === "projects" ? "active" : ""}
                onClick={(e) => handleSetActiveLink("projects", e)}
              >
                Проєкти
              </HeaderNavMenu>
            </HeaderNav>
          )}
          <HeaderAddress href="#contact">Контакт</HeaderAddress>
          {isMobail && (
            <ButtonMobileHeader type="button" onClick={() => onModal()}>
              <SvgMobileHeader>
                <use href={`${svgMobile}#icon-menuburger`}></use>
              </SvgMobileHeader>
            </ButtonMobileHeader>
          )}
        </HeaderDiv>
      </div>
      {isMobail && shownModal && <ModalMobaileMenu onClose={onModal} />}
    </Headers>
  );
};

Header.propTypes = {
  handleSetActiveLink: PropTypes.func.isRequired,
};

export default Header;
