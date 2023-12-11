import styled from "@emotion/styled";

export const ScrollToTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  position: fixed;
  bottom: var(--scroll-to-top-bottom);
  right: 40px;
  padding: 8px;
  background-color: var(--primary-yellow);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  border: none;
  border-radius: 16px;
  z-index: 999;

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(27, 54, 65, 0.16);
  }

  @media screen and (min-width: 768px) {
    right: 80px;
  }

  @media screen and (min-width: 1440px) {
    width: 56px;
    height: 56px;
    right: 80px;
  }

  @media screen and (min-width: 1920px) {
    right: 120px;
  }
`;
