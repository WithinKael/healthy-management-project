import styled from "@emotion/styled";

export const StyledSection = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const ImgSectionWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
`;

export const MentorstvoWrapper = styled.div`
  max-width: 828px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 820px;
  height: 392px;
  padding: 40px;
  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`;

export const Img = styled.img`
  width: 828px;
  height: 468px;
`;

export const TitleH2 = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  margin-bottom: 40px;
  color: var(--typography-black);
`;

export const TitleH3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`;
export const TitleH3White = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-white);
`;

export const ParagraphWrapper = styled.div`
  margin-bottom: 80px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 500;
  max-width: 720px;
  line-height: 28px;
  color: var(--typography-bluedark);

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StyledMentorButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);

  width: 260px;
  height: 56px;
  padding: 8px 24px;
  border-radius: 16px;
  background-color: transparent;
  border: 1px solid var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const ForWHoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 40px;
  gap: 24px;
  flex: 1 0 0;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-bluedark);
`;

export const StyledAboutUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);
`;

export const StyledForWhoUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #f8f8f8;
`;

export const StyledLi = styled.li`
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
    background-color: #1b3641;
    border-radius: 50%;
  }

  &:first-of-type::before {
    top: 26%;
  }
`;

export const StyledLiWhite = styled.li`
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
    background-color: var(--typography-white);
    border-radius: 50%;
  }
`;
