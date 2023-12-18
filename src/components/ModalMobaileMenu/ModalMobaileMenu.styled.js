import styled from "@emotion/styled";

export const MobileMenuContainer = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100%;
`;

export const DivMobileMenu = styled.div`
  display: flex;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background: var(--system-default-10, #f8f8f8);
`;

export const ContactMenu = styled.a`
  color: var(--typography-bluedark, #062136);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  display: flex;
  width: 156px;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--background-bluedark, #062136);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  &:hover,
  &:focus {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    background: var(--background-white, #fcfcfc);
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  width: 100%;
  height: 812px;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  background: var(--background-whitegrey);
  transition: background 0.5s ease, color 0.5s ease;
  // overflow-y: auto;

  &:hover,
  &:focus {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    background: var(--background-white);
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  @media screen and (min-width: 500px) {
    // max-height: 300px;
  }
`;

export const NavMenuMobile = styled.a`
  position: relative;
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;

  &:hover::after,
  &:focus::after,
  &.active::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background-color: var(--typography-bluedark, #1b3641);
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ButtonMenuMobile = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  background: none;
`;

export const ModalMobileSvg = styled.svg`
  height: 40px;

  @media (min-width: 375px) {
    width: 40px;
  }

  @media (min-width: 768px) {
    width: 70px;
  }
`;
