import ReactDOM from "react-dom";
import sprite from "../../images/sprite.svg";
import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  ModalWindow,
  Backdrop,
  TeamList,
  TeamListItem,
  TitleName,
  ParagraphDescription,
  NameLinkedinWrapper,
  TitleH2,
  TitleAndIconWrapper,
  Svg,
} from "./ModalWindow.styled";
import {
  juliaWebp,
  oleksandrWebp,
  olhaWebp,
  valentynWebp,
  viktoriiaWebp,
  vyacheslavWebp,
  yelyzavetaWebp,
} from "./ModalWindowImports";

const ModalWindowMarkup = ({ handleClose, isModalOpen }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const body = document.body;

    const handleBodyOverflow = () => {
      if (isModalOpen) {
        body.classList.add("body-no-scroll");
      } else {
        body.classList.remove("body-no-scroll");
      }
    };

    const handleKeyDown = (event) => {
      if (event.code === "Escape" && isModalOpen) {
        handleClose();
      }
    };

    handleBodyOverflow();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isModalOpen]);

  const modalRootElement = document.getElementById("modal");

  return isModalOpen
    ? ReactDOM.createPortal(
        <Backdrop onClick={handleOverlayClick}>
          <ModalWindow isModalOpen={isModalOpen}>
            <TitleAndIconWrapper>
              <TitleH2>Команда, яка створила сторінку</TitleH2>
              <Svg onClick={handleClose}>
                <use href={`${sprite}#icon-close`} />
              </Svg>
            </TitleAndIconWrapper>

            <TeamList>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <img src={viktoriiaWebp} alt="Вікторія Мориц" />
                  <TitleName>
                    Вікторія Мориц
                    <a
                      href="https://www.linkedin.com/in/viktoriia-moryc-61610962/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-linkedin`} />
                      </svg>
                    </a>
                  </TitleName>
                </NameLinkedinWrapper>
                <ParagraphDescription>Project Manager</ParagraphDescription>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <img src={juliaWebp} alt="Юлія Копитко" />
                  <TitleName>
                    Юлія Копитко
                    <a
                      href="https://www.linkedin.com/in/juliakopytko/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-linkedin`} />
                      </svg>
                    </a>
                  </TitleName>
                </NameLinkedinWrapper>
                <ParagraphDescription>UX/UI Designer</ParagraphDescription>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Ярослав Лі"
                  />
                  <TitleName>
                    Ярослав Лі
                    <a
                      href="https://www.linkedin.com/in/yaroslav-lee-b7070b294"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-linkedin`} />
                      </svg>
                    </a>
                  </TitleName>
                </NameLinkedinWrapper>
                <ParagraphDescription>Frontend Developer</ParagraphDescription>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <img src={yelyzavetaWebp} alt="Єлизавета Доманська" />
                  <TitleName>
                    Єлизавета Доманська
                    <a
                      href="https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-linkedin`} />
                      </svg>
                    </a>
                  </TitleName>
                </NameLinkedinWrapper>
                <ParagraphDescription>Frontend Developer</ParagraphDescription>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <img src={oleksandrWebp} alt="Олександр Наталуха" />
                  <TitleName>
                    Олександр Наталуха
                    <a
                      href="https://www.linkedin.com/in/oleksandr-natalukha"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-linkedin`} />
                      </svg>
                    </a>
                  </TitleName>
                </NameLinkedinWrapper>
                <ParagraphDescription>Frontend Developer</ParagraphDescription>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <img src={valentynWebp} alt="Валентин Гавриленко" />
                  <TitleName>
                    Валентин Гавриленко
                    <a
                      href="https://www.linkedin.com/in/valentyn-havrylenko/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-linkedin`} />
                      </svg>
                    </a>
                  </TitleName>
                </NameLinkedinWrapper>
                <ParagraphDescription>Frontend Developer</ParagraphDescription>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <img src={vyacheslavWebp} alt="В´ячеслав Павлюк" />
                  <TitleName>
                    В&#39;ячеслав Павлюк
                    <a
                      href="https://www.linkedin.com/in/vyacheslav-pavlyuk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-linkedin`} />
                      </svg>
                    </a>
                  </TitleName>
                </NameLinkedinWrapper>
                <ParagraphDescription>Fullstack Developer</ParagraphDescription>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <img src={olhaWebp} alt="Ольга Абент" />
                  <TitleName>
                    Ольга Абент
                    <a
                      href="https://www.linkedin.com/in/abentolga/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-linkedin`} />
                      </svg>
                    </a>
                  </TitleName>
                </NameLinkedinWrapper>
                <ParagraphDescription>QA Engineer</ParagraphDescription>
              </TeamListItem>
            </TeamList>
          </ModalWindow>
        </Backdrop>,
        modalRootElement
      )
    : null;
};

ModalWindowMarkup.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};

export default ModalWindowMarkup;
