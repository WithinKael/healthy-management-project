import styled from "@emotion/styled";

export const ArrowPersonalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media screen and (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
  }
`;

export const StyledPersonalArrowSvg = styled.svg`
  width: 260px;
  height: 60px;

  @media screen and (min-width: 1920px) {
    width: 285px;
    height: 80px;
  }
`;

export const StyledPersonalContainer = styled.div`
  position: relative;
  height: 60px;

  @media screen and (min-width: 1920px) {
    min-width: 285px;
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
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  min-width: 200px;

  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--typography-white);

  @media screen and (min-width: 1920px) {
    top: 70%;
    font-size: 20px;
    line-height: 1.4;
  }
`;
