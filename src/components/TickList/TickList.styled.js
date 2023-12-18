import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h4`
  font-weight: 600;

  /* Вариант "project" */
  ${({ variant }) =>
    variant === "project" &&
    css`
      font-size: 15px;
      line-height: calc(22 / 15);

      @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: calc(24 / 18);
      }
      @media screen and (min-width: 1440px) {
        font-size: 18px;
        line-height: calc(22 / 18);
      }
      @media screen and (min-width: 1920px) {
        font-size: 20px;
        line-height: calc(28 / 20);
      }
    `}

  /* Вариант "projectDetail" */
  ${({ variant }) =>
    variant === "projectDetail" &&
    css`
      font-size: 16px;
      line-height: calc(24 / 16);

      @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: calc(28 / 20);
      }
      @media screen and (min-width: 1440px) {
        font-size: 20px;
        line-height: calc(24 / 20);
      }
      @media screen and (min-width: 1920px) {
        font-size: 24px;
        line-height: calc(32 / 24);
      }
    `}

    /* Вариант "services" */
  ${({ variant }) =>
    variant === "services" &&
    css`
      font-size: 24px;
      line-height: calc(32 / 24);

      @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: calc(28 / 20);
      }
      @media screen and (min-width: 1440px) {
        font-size: 20px;
        line-height: calc(24 / 20);
      }
      @media screen and (min-width: 1920px) {
        font-size: 24px;
        line-height: calc(32 / 24);
      }
    `}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
  @media screen and (min-width: 1920px) {
    gap: 8px;
  }
`;

export const ListItem = styled.li`
  font-size: 14px;
  line-height: calc(20 / 14);
  font-weight: 500;

  display: flex;
  gap: 8px;

  & > svg {
    max-width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: calc(22 / 15);
  }
  @media screen and (min-width: 1440px) {
    font-size: 15px;
    line-height: calc(18 / 15);
  }
  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  ${({ variant }) =>
    variant === "services" &&
    css`
      @media screen and (min-width: 768px) {
        width: 408px;
      }

      @media screen and (min-width: 1440px) {
        width: 100%;
      }
    `}
`;

export const Comment = styled.p`
  font-size: ${(props) => (props.additionalComment ? "14px" : "15px")};
  font-weight: ${(props) => (props.additionalComment ? 500 : 600)};
  line-height: calc(
    ${(props) => (props.additionalComment ? 20 / 14 : 22 / 15)}
  );
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
  @media screen and (min-width: 1440px) {
    line-height: calc(22 / 18);
  }
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: calc(28 / 20);
  }
`;

export const Icon = styled.svg`
  fill: currentColor;
  stroke: currentColor;
  width: 24px;
  height: 24px;
`;

export const SvgWrap = styled.div`
  width: 24px;
  height: 24px;
`;
