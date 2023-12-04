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
  julia2x,
  juliaWebp,
  oleksandr2x,
  oleksandrWebp,
  olha2x,
  olhaWebp,
  valentyn2x,
  valentynWebp,
  viktoriia2x,
  viktoriiaWebp,
  vyacheslav2x,
  vyacheslavWebp,
  yaroslav2x,
  yaroslavWebp,
  yelyzaveta2x,
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
                  <img
                    src={viktoriiaWebp}
                    srcSet={`${viktoriiaWebp} 1x, ${viktoriia2x} 2x`}
                    alt="Вікторія Мориц"
                  />
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
                  <img
                    src={juliaWebp}
                    srcSet={`${juliaWebp} 1x, ${julia2x} 2x`}
                    alt="Юлія Копитко"
                  />
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
                    src={yaroslavWebp}
                    srcSet={`${yaroslavWebp} 1x, ${yaroslav2x} 2x`}
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
                  <img
                    src={yelyzavetaWebp}
                    srcSet={`${yelyzavetaWebp} 1x, ${yelyzaveta2x} 2x`}
                    alt="Єлизавета Доманська"
                  />
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
                  <img
                    src={oleksandrWebp}
                    srcSet={`${oleksandrWebp} 1x, ${oleksandr2x} 2x`}
                    alt="Олександр Наталуха"
                  />
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
                  <img
                    src={valentynWebp}
                    srcSet={`${valentynWebp} 1x, ${valentyn2x} 2x`}
                    alt="Валентин Гавриленко"
                  />
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
                  <img
                    src={vyacheslavWebp}
                    srcSet={`${vyacheslavWebp} 1x, ${vyacheslav2x} 2x`}
                    alt="В´ячеслав Павлюк"
                  />
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
                  <img
                    src={olhaWebp}
                    srcSet={`${olhaWebp} 1x, ${olha2x} 2x`}
                    alt="Ольга Абент"
                  />
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
