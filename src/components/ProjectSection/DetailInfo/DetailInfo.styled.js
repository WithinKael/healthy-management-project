import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const Category = styled.h3`
  padding: 4px 16px;
  border-radius: 16px;
  background: rgba(244, 244, 246, 0.1);
  font-size: 16px;
  line-height: calc(24 / 16);
  font-weight: 600;
  display: ${(props) => (props.symbols > 20 ? "block" : "inline")};
  width: ${(props) => (props.symbols > 20 ? "200px" : "100%")};

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

export const Icon = styled.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;

  position: absolute;
  right: 24px;
  top: 24px;
`;
