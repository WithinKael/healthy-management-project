import styled from "@emotion/styled";

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`;

export const Category = styled.h3`
  font-size: 16px;
  line-height: calc(24 / 16);
  font-weight: 600;

  padding: 4px 16px;
  display: ${(props) => (props.symbols > 20 ? "block" : "inline")};
  border-radius: 16px;
  background: rgba(27, 54, 65, 0.2);
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: calc(28 / 20);
    display: inline;
  }
  @media screen and (min-width: 1440px) {
    line-height: calc(24 / 20);
    display: ${(props) => (props.symbols > 20 ? "block" : "inline")};
  }
  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: calc(32 / 24);
    display: inline;
  }
`;

export const DetailsBtn = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  text-align: center;
`;

export const HiddenInfo = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  /* transform: translateY(${(props) => (props.isVisible ? "0" : "110%")}); */

  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: linear-gradient(
      0deg,
      rgba(22, 23, 23, 0.5) 0%,
      rgba(22, 23, 23, 0.5) 100%
    ),
    linear-gradient(0deg, rgba(27, 54, 65, 0.8) 0%, rgba(27, 54, 65, 0.8) 100%),
    url(${(props) => props.image || ""});
  background-size: cover;

  transition: opacity var(--transition-dur-and-func);
`;

export const StyledImage = styled.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;
