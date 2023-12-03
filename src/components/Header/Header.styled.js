import styled from "@emotion/styled";

export const Headers = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--system-default-20, #dedede);
  background-color: var(--system-default-10);
`;

export const HeaderDiv = styled.div`
  //   max-width: 1920px;
  //   margin-left: auto;
  //   margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const HeaderNavMenu = styled.a`
  position: relative;
  //   text-decoration: none;
  color: var(--typography-bluedark, #1b3641);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

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
`;

export const HeaderAddress = styled.a`
  display: flex;
  width: 260px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--primary-bluedark, #1b3641);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  color: var(--typography-bluedark, #1b3641);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  &:hover,
  &:focus {
    background: var(--background-white, #fcfcfc);
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }
`;
