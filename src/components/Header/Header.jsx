import { useState } from "react";
import s from "./Hedar.module.css";
import logo from "../../images/sprite.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  console.log(activeLink);

  const handleSetActiveLink = (link, event) => {
    event.preventDefault();
    console.log(`Setting active link to: ${link}`);
    setActiveLink(link);
  };

  return (
    <header className={`${s.header} ${s.fixedHeader}`}>
      <div className={s.headerDiv}>
        <a href="#home">
          <svg width="227" height="40">
            <use href={`${logo}#logo-black`}></use>
          </svg>
        </a>
        <nav className={s.headerNav}>
          <a
            href="#home"
            className={`${s.headerNavMenu} ${
              activeLink === "home" ? s.active : ""
            }`}
            onClick={(e) => handleSetActiveLink("home", e)}
          >
            Головна
          </a>
          <a
            href="#aboutUs"
            className={`${s.headerNavMenu} ${
              activeLink === "aboutUs" ? s.active : ""
            }`}
            onClick={(e) => handleSetActiveLink("aboutUs", e)}
          >
            Про нас
          </a>
          <a
            href="#services"
            className={`${s.headerNavMenu} ${
              activeLink === "services" ? s.active : ""
            }`}
            onClick={(e) => handleSetActiveLink("services", e)}
          >
            Послуги
          </a>
          <a
            href="#mentoring"
            className={`${s.headerNavMenu} ${
              activeLink === "mentoring" ? s.active : ""
            }`}
            onClick={(e) => handleSetActiveLink("mentoring", e)}
          >
            Менторство
          </a>
          <a
            href="#projects"
            className={`${s.headerNavMenu} ${
              activeLink === "projects" ? s.active : ""
            }`}
            onClick={(e) => handleSetActiveLink("projects", e)}
          >
            Проєкти
          </a>
        </nav>
        <address>
          <a href="#contact" className={s.headerAddress}>
            Контакт
          </a>
        </address>
      </div>
    </header>
  );
};

export default Header;
