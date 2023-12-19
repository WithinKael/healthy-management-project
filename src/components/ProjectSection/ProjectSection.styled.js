import styled from "@emotion/styled";

export const SectionWrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: calc(32 / 24);

  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: calc(40 / 32);

    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: calc(48 / 36);

    margin-bottom: 24px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: calc(56 / 48);

    margin-bottom: 40px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const ActionBtn = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: calc(20 / 14);
  color: currentColor;

  margin-top: 14px;
  padding-top: 24px;

  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: calc(22 / 15);

    margin-top: 13px;
    padding-top: 16px;
  }
`;

export const Icon = styled.svg`
  fill: currentColor;
  stroke: currentColor;

  width: 24px;
  height: 24px;
`;
