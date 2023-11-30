import styled from "@emotion/styled";

export const StyledSection = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const PersonalSessionSectionWrapper = styled.div`
  padding: 80px;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background: var(--background-white);
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledContainer = styled.div`
  position: relative;
  min-width: 370px;
`;

export const MentorSessionWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;

export const PersonalWrapper = styled.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QuestionWrapper = styled.div`
  padding: 24px;
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  position: absolute;
  min-width: 240px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--typography-white);
`;

export const TitleH2 = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  color: var(--typography-black);
`;

export const TitleH3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 16px;
  color: var(--typography-bluedark);
`;

export const PersonalParagraph = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--typography-bluedark);
`;

export const ProHourParagraph = styled.p`
  border-radius: 16px;
  background-color: rgba(27, 54, 65, 0.2);

  width: fit-content;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.3;
  padding: 4px 16px;
  color: var(--typography-bluedark);
`;

export const StyledOrderLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 28px;
  color: var(--typography-bluedark);

  padding: 8px 24px;
  border-radius: 16px;
  background-color: var(--primary-yellow);
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
`;

export const StyledSessionParagraph = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 24px;
  color: var(--typography-bluedark);
`;

export const StyledPersonalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);
`;

export const StyledPersonalListItem = styled.li`
  padding-left: 24px;
  position: relative;

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
`;

export const StyledArrowSvg = styled.svg`
  width: 370px;
  height: 80px;
`;
