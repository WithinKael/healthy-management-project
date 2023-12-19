import styled from "@emotion/styled";

export const ArrowPersonalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }

  @media screen and (min-width: 1920px) {
    width: max-content;
  }
`;

export const StyledPersonalArrowSvg = styled.svg`
  @media screen and (min-width: 330px) {
    width: 279px;
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    width: 292px;
    height: 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 222px;
    height: 72px;
  }

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`;

export const StyledPersonalContainer = styled.div`
  position: relative;
  height: 60px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: 1440px) {
    height: 72px;
    width: calc((100% - (4 * 24px)) / 5);
  }

  @media screen and (min-width: 1920px) {
    height: 80px;
    width: calc((100% - (4 * 24px)) / 5);
  }
`;

export const PersonalSectionWrapper = styled.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledPersonalParagraph = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  min-width: 200px;

  position: absolute;
  text-align: center;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--typography-white);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    left: 42%;
  }
  @media screen and (min-width: 1440px) {
    left: 54%;
    width: fit-content;
  }

  @media screen and (min-width: 1920px) {
    display: flex;
    justify-content: flex-start;
    left: 60%;
    width: 100%;
    top: 50%;

    font-size: 16px;
    line-height: 1.4;
  }
`;
