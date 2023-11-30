import { useEffect, useState } from "react";
import logo from "../../images/sprite.svg";
import {
  HeaderAddress,
  Headers,
  HeaderDiv,
  HeaderNav,
  HeaderNavMenu,
} from "./Header.styled";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  // const [scrollPosition, setScrollPosition] = useState(0);

  const handleSetActiveLink = (link, event) => {
    event.preventDefault();
    // setActiveLink(link);

    const section = document.getElementById(link);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetOffset = rect.top + scrollTop - 120;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // setScrollPosition(window.scrollY);

      const sections = ["home", "aboutUs", "services", "mentoring", "projects"];
      const currentSection = sections.find((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

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
          <a href="#home">
            <svg width="227" height="40">
              <use href={`${logo}#logo-black`}></use>
            </svg>
          </a>
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
          <HeaderAddress href="#contact">Контакт</HeaderAddress>
        </HeaderDiv>
      </div>
    </Headers>
  );
};

export default Header;
