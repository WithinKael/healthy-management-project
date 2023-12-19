import styled from "@emotion/styled";

export const StyledSection = styled.section`
  padding: 40px 24px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
  }

  @media screen and (min-width: 1920px) {
    padding: 80px 120px;
  }
`;

export const PersonalSessionSectionWrapper = styled.div`
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    row-gap: 14px;
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;


  @media screen and (min-width: 768px) {
   width: calc((100% - (1 * 24px)) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - (3 * 24px)) / 4);
  }

  @media screen and (min-width: 1920px) {
    width: calc((100% - (3 * 24px)) / 4);
  }

  }
`;

export const MentorSessionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    gap: 24px;
    flex-direction: row;
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: 40px;
    gap: 40px;
  }
`;

export const PersonalWrapper = styled.div`
  min-width: 280px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    min-width: 588px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 740px;
  }
`;

export const QuestionWrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`;

export const StyledParagraph = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  min-width: 200px;

  position: absolute;
  text-align: center;
  top: 45%;
  left: 47%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--typography-white);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    left: 42%;
  }

  @media screen and (min-width: 1440px) {
    top: 50%;
    left: 47%;
  }

  @media screen and (min-width: 1920px) {
    justify-content: flex-start;
    width: 100%;
    font-size: 16px;
    line-height: 1.4;
    top: 48%;
    left: 60%;
  }
`;

export const TitleH2 = styled.h2`
  color: var(--typography-black);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 48px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const TitleH3 = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const PersonalParagraph = styled.p`
  font-size: 15px;
  line-height: 22px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const ProHourParagraph = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  width: fit-content;
  margin-bottom: 12px;

  border-radius: 16px;
  padding: 4px 16px;
  color: var(--typography-bluedark);
  background: rgba(6, 33, 54, 0.1);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.3;
  }
`;

export const StyledOrderLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  height: 56px;
  padding: 8px 23px;
  border-radius: 16px;
  background-color: var(--primary-yellow);
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);

  &:hover,
  &:focus {
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 16px;

    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    width: 193px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    margin-top: 28px;
    width: 260px;
  }
`;

export const StyledSessionParagraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 16px;

  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const StyledPersonalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const StyledPersonalListItem = styled.li`
  padding-left: 22px;

  &::before {
    content: "\\2022";
    color: var(--typography-bluedark, #1b3641);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media screen and (min-width: 1920px) {
    position: relative;
    padding-left: 24px;

    &::before {
      content: "";
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: #1b3641;
    }

    &:last-child::before {
      top: 26%;
    }
  }
`;

export const StyledArrowSvg = styled.svg`
  @media screen and (min-width: 330px) {
    width: 279px;
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    width: 292px;
    height: 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 282px;
    height: 72px;
  }

  @media screen and (min-width: 1920px) {
    width: 370px;
    height: 80px;
  }
`;
