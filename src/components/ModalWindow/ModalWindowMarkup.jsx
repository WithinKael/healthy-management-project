import ReactDOM from "react-dom";
import MediaQuery from "react-responsive";
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
  ModalImgWrapper,
  NameAndPositionWrapper,
  CrossSvg,
  SvgWrapper,
  ModalImg,
} from "./ModalWindow.styled";
import {
  julia2x,
  juliaMob,
  juliaMob1x,
  juliaMob2x,
  juliaWebp,
  oleksandr2x,
  oleksandrMob,
  oleksandrMob1x,
  oleksandrMob2x,
  oleksandrWebp,
  olha2x,
  olhaMob,
  olhaMob1x,
  olhaMob2x,
  olhaWebp,
  valentyn2x,
  valentynMob,
  valentynMob1x,
  valentynMob2x,
  valentynWebp,
  viktoriaMob,
  viktoriaMob1x,
  viktoriaMob2x,
  viktoriia2x,
  viktoriiaWebp,
  vyacheslav2x,
  vyacheslavMob,
  vyacheslavMob1x,
  vyacheslavMob2x,
  vyacheslavWebp,
  yaroslav2x,
  yaroslavMob,
  yaroslavMob1x,
  yaroslavMob2x,
  yaroslavWebp,
  yelyzaveta2x,
  yelyzavetaMob,
  yelyzavetaMob1x,
  yelyzavetaMob2x,
  yelyzavetaWebp,
} from "./ModalWindowImports";

const ModalWindowMarkup = ({ handleClose, isModalOpen }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape" && isModalOpen) {
        handleClose();
      }
    };

    const handleBodyOverflow = () => {
      document.body.style.overflow = isModalOpen ? "hidden" : "auto";
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
              <CrossSvg onClick={handleClose}>
                <use href={`${sprite}#icon-close`} />
              </CrossSvg>
            </TitleAndIconWrapper>

            <TeamList>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <MediaQuery minWidth={320} maxWidth={1439}>
                      <ModalImg
                        srcSet={`${viktoriaMob1x} 1x, ${viktoriaMob2x} 2x`}
                        src={viktoriaMob}
                        alt="Вікторія Мориц - Project Manager"
                        loading="lazy"
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                      <ModalImg
                        src={viktoriiaWebp}
                        srcSet={`${viktoriiaWebp} 1x, ${viktoriia2x} 2x`}
                        alt="Вікторія Мориц - Project Manager"
                        loading="lazy"
                      />
                    </MediaQuery>
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/viktoriia-moryc-61610962/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Вікторія Мориц
                        <SvgWrapper>
                          <Svg>
                            <use href={`${sprite}#icon-linkedin`} />
                          </Svg>
                        </SvgWrapper>
                      </a>
                    </TitleName>
                    <ParagraphDescription>Project Manager</ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <MediaQuery minWidth={320} maxWidth={1439}>
                      <ModalImg
                        srcSet={`${juliaMob1x} 1x, ${juliaMob2x} 2x`}
                        src={juliaMob}
                        alt="Юлія Копитко UX/UI Designer"
                        loading="lazy"
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                      <ModalImg
                        srcSet={`${juliaWebp} 1x, ${julia2x} 2x`}
                        src={juliaWebp}
                        alt="Юлія Копитко UX/UI Designer"
                        loading="lazy"
                      />
                    </MediaQuery>
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/juliakopytko/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Юлія Копитко
                        <SvgWrapper>
                          <Svg>
                            <use href={`${sprite}#icon-linkedin`} />
                          </Svg>
                        </SvgWrapper>
                      </a>
                    </TitleName>
                    <ParagraphDescription>UX/UI Designer</ParagraphDescription>
                  </NameAndPositionWrapper>
                </NameLinkedinWrapper>
              </TeamListItem>
              <TeamListItem>
                <NameLinkedinWrapper>
                  <ModalImgWrapper>
                    <MediaQuery minWidth={320} maxWidth={1439}>
                      <ModalImg
                        srcSet={`${yaroslavMob1x} 1x, ${yaroslavMob2x} 2x`}
                        src={yaroslavMob}
                        alt="Ярослав Лі - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                      <ModalImg
                        srcSet={`${yaroslavWebp} 1x, ${yaroslav2x} 2x`}
                        src={yaroslavWebp}
                        alt="Ярослав Лі - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/yaroslav-lee-b7070b294"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ярослав Лі
                        <SvgWrapper>
                          <Svg>
                            <use href={`${sprite}#icon-linkedin`} />
                          </Svg>
                        </SvgWrapper>
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
                    <MediaQuery minWidth={320} maxWidth={1439}>
                      <ModalImg
                        srcSet={`${yelyzavetaMob1x} 1x, ${yelyzavetaMob2x} 2x`}
                        src={yelyzavetaMob}
                        alt="Єлизавета Доманська - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                      <ModalImg
                        srcSet={`${yelyzavetaWebp} 1x, ${yelyzaveta2x} 2x`}
                        src={yelyzavetaWebp}
                        alt="Єлизавета Доманська - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/yelyzaveta-domanska-2185a5292/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Єлизавета Доманська
                        <SvgWrapper>
                          <Svg>
                            <use href={`${sprite}#icon-linkedin`} />
                          </Svg>
                        </SvgWrapper>
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
                    <MediaQuery minWidth={320} maxWidth={1439}>
                      <ModalImg
                        srcSet={`${oleksandrMob1x} 1x, ${oleksandrMob2x} 2x`}
                        src={oleksandrMob}
                        alt="Олександр Наталуха - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                      <ModalImg
                        srcSet={`${oleksandrWebp} 1x, ${oleksandr2x} 2x`}
                        src={oleksandrWebp}
                        alt="Олександр Наталуха - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/oleksandr-natalukha"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Олександр Наталуха
                        <SvgWrapper>
                          <Svg>
                            <use href={`${sprite}#icon-linkedin`} />
                          </Svg>
                        </SvgWrapper>
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
                    <MediaQuery minWidth={320} maxWidth={1439}>
                      <ModalImg
                        srcSet={`${valentynMob1x} 1x, ${valentynMob2x} 2x`}
                        src={valentynMob}
                        alt="Валентин Гавриленко - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                      <ModalImg
                        srcSet={`${valentynWebp} 1x, ${valentyn2x} 2x`}
                        src={valentynWebp}
                        alt="Валентин Гавриленко - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/valentyn-havrylenko/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Валентин Гавриленко
                        <SvgWrapper>
                          <Svg>
                            <use href={`${sprite}#icon-linkedin`} />
                          </Svg>
                        </SvgWrapper>
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
                    <MediaQuery minWidth={320} maxWidth={1439}>
                      <ModalImg
                        srcSet={`${vyacheslavMob1x} 1x, ${vyacheslavMob2x} 2x`}
                        src={vyacheslavMob}
                        alt="В´ячеслав Павлюк - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                      <ModalImg
                        srcSet={`${vyacheslavWebp} 1x, ${vyacheslav2x} 2x`}
                        src={vyacheslavWebp}
                        alt="В´ячеслав Павлюк - Frontend Developer"
                        loading="lazy"
                      />
                    </MediaQuery>
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/vyacheslav-pavlyuk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        В&#39;ячеслав Павлюк
                        <SvgWrapper>
                          <Svg>
                            <use href={`${sprite}#icon-linkedin`} />
                          </Svg>
                        </SvgWrapper>
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
                    <MediaQuery minWidth={320} maxWidth={1439}>
                      <ModalImg
                        srcSet={`${olhaMob1x} 1x, ${olhaMob2x} 2x`}
                        src={olhaMob}
                        alt="Ольга Абент - QA Engineer"
                      />
                    </MediaQuery>
                    <MediaQuery minWidth={1440}>
                      <ModalImg
                        srcSet={`${olhaWebp} 1x, ${olha2x} 2x`}
                        src={olhaWebp}
                        alt="Ольга Абент - QA Engineer"
                        loading="lazy"
                      />
                    </MediaQuery>
                  </ModalImgWrapper>
                  <NameAndPositionWrapper>
                    <TitleName>
                      <a
                        href="https://www.linkedin.com/in/abentolga/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ольга Абент
                        <SvgWrapper>
                          <Svg>
                            <use href={`${sprite}#icon-linkedin`} />
                          </Svg>
                        </SvgWrapper>
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
