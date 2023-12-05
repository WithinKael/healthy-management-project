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
  ModalImg,
  ModalImgWrapper,
  NameAndPositionWrapper,
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
                  <ModalImgWrapper>
                    <ModalImg
                      src={viktoriiaWebp}
                      srcSet={`${viktoriiaWebp} 1x, ${viktoriia2x} 2x`}
                      alt="Вікторія Мориц"
                    />
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/viktoriia-moryc-61610962/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Вікторія Мориц
                        <svg width="24" height="24">
                          <use href={`${sprite}#icon-linkedin`} />
                        </svg>
                      </a>
                    </TitleName>
                    <ParagraphDescription>Project Manager</ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <ModalImg
                      src={juliaWebp}
                      srcSet={`${juliaWebp} 1x, ${julia2x} 2x`}
                      alt="Юлія Копитко"
                    />
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    {" "}
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/juliakopytko/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Юлія Копитко
                        <svg width="24" height="24">
                          <use href={`${sprite}#icon-linkedin`} />
                        </svg>
                      </a>
                    </TitleName>
                    <ParagraphDescription>UX/UI Designer</ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <ModalImg
                      src={yaroslavWebp}
                      srcSet={`${yaroslavWebp} 1x, ${yaroslav2x} 2x`}
                      alt="Ярослав Лі"
                    />
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/yaroslav-lee-b7070b294"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ярослав Лі
                        <svg width="24" height="24">
                          <use href={`${sprite}#icon-linkedin`} />
                        </svg>
                      </a>
                    </TitleName>
                    <ParagraphDescription>
                      Frontend Developer
                    </ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <ModalImg
                      src={yelyzavetaWebp}
                      srcSet={`${yelyzavetaWebp} 1x, ${yelyzaveta2x} 2x`}
                      alt="Єлизавета Доманська"
                    />
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Єлизавета Доманська
                        <svg width="24" height="24">
                          <use href={`${sprite}#icon-linkedin`} />
                        </svg>
                      </a>
                    </TitleName>
                    <ParagraphDescription>
                      Frontend Developer
                    </ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <ModalImg
                      src={oleksandrWebp}
                      srcSet={`${oleksandrWebp} 1x, ${oleksandr2x} 2x`}
                      alt="Олександр Наталуха"
                    />
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/oleksandr-natalukha"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Олександр Наталуха
                        <svg width="24" height="24">
                          <use href={`${sprite}#icon-linkedin`} />
                        </svg>
                      </a>
                    </TitleName>
                    <ParagraphDescription>
                      Frontend Developer
                    </ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <ModalImg
                      src={valentynWebp}
                      srcSet={`${valentynWebp} 1x, ${valentyn2x} 2x`}
                      alt="Валентин Гавриленко"
                    />
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/valentyn-havrylenko/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Валентин Гавриленко
                        <svg width="24" height="24">
                          <use href={`${sprite}#icon-linkedin`} />
                        </svg>
                      </a>
                    </TitleName>
                    <ParagraphDescription>
                      Frontend Developer
                    </ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <ModalImg
                      src={vyacheslavWebp}
                      srcSet={`${vyacheslavWebp} 1x, ${vyacheslav2x} 2x`}
                      alt="В´ячеслав Павлюк"
                    />
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/vyacheslav-pavlyuk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        В&#39;ячеслав Павлюк
                        <svg width="24" height="24">
                          <use href={`${sprite}#icon-linkedin`} />
                        </svg>
                      </a>
                    </TitleName>
                    <ParagraphDescription>
                      Fullstack Developer
                    </ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <ModalImg
                      src={olhaWebp}
                      srcSet={`${olhaWebp} 1x, ${olha2x} 2x`}
                      alt="Ольга Абент"
                    />
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/abentolga/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ольга Абент
                        <svg width="24" height="24">
                          <use href={`${sprite}#icon-linkedin`} />
                        </svg>
                      </a>
                    </TitleName>
                    <ParagraphDescription>QA Engineer</ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
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
