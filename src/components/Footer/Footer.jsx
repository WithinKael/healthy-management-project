import { useState } from "react";
import sprite from "../../images/icon-footer.svg";

import {
  ContactsFooter,
  FooterBg,
  FooterContainer,
  Item,
  NavFooter,
  NavFooterBtn,
  Paragraph,
  Social,
  SocialItem,
  TeamBtn,
  TelEmail,
} from "./Footer.styled";
import ModalWindowMarkup from "../ModalWindow/ModalWindowMarkup";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FooterBg id="footer">
      <FooterContainer className="container">
        <svg width="227" height="40">
          <use href={`${sprite}#logo-white`} />
        </svg>
        <TeamBtn onClick={handleOpenModal}>created by GoIT students</TeamBtn>
        <ModalWindowMarkup
          handleClose={handleCloseModal}
          isModalOpen={isModalOpen}
        />
        <NavFooter>
          <NavFooterBtn href="">Головна</NavFooterBtn>
          <NavFooterBtn href="">Про мене</NavFooterBtn>
          <NavFooterBtn href="">Проєкти</NavFooterBtn>
          <NavFooterBtn href="">Послуги</NavFooterBtn>
          <NavFooterBtn href="">Менторство</NavFooterBtn>
        </NavFooter>
        <ContactsFooter>
          <Social>
            <SocialItem
              href="https://www.facebook.com/profile.php?id=61551346490841"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="32" height="32">
                <use href={`${sprite}#facebook`} />
              </svg>
            </SocialItem>
            <a
              href="https://www.instagram.com/healthymanagement_ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="40" height="40">
                <use href={`${sprite}#instagram`} />
              </svg>
            </a>
          </Social>
          <TelEmail>
            <Item href="mailto:managementhealthy@gmail.com">
              managementhealthy@gmail.com
            </Item>
            <Item href="tel:+380673160556">+380 673 160 556</Item>
          </TelEmail>
        </ContactsFooter>
      </FooterContainer>
      <Paragraph>© 2023 healthy managment. All rights reserved</Paragraph>
    </FooterBg>
  );
};

export default Footer;
