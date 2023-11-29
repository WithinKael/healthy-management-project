import sprite from "../../images/icon-footer.svg";
// import sprite from "../../images/sprite.svg";
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

const Footer = () => {
  return (
    <FooterBg>
      <FooterContainer className="container">
        <svg width="227" height="40">
          <use href={`${sprite}#logo-white`} />
        </svg>
        <TeamBtn href="">created by GoIT students</TeamBtn>
        <NavFooter>
          <NavFooterBtn href="">Головна</NavFooterBtn>
          <NavFooterBtn href="">Про мене</NavFooterBtn>
          <NavFooterBtn href="">Проєкти</NavFooterBtn>
          <NavFooterBtn href="">Послуги</NavFooterBtn>
          <NavFooterBtn href="">Менторство</NavFooterBtn>
        </NavFooter>
        <ContactsFooter>
          <Social>
            <SocialItem href="">
              <svg width="32" height="32">
                <use href={`${sprite}#facebook`} />
              </svg>
            </SocialItem>
            <a href="">
              <svg width="40" height="40">
                <use href={`${sprite}#instagram`} />
              </svg>
            </a>
          </Social>
          <TelEmail>
            <Item href="mailto:healthymanagemeny@gmail.com">
              healthymanagemeny@gmail.com
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
