import styled from "@emotion/styled";

export const SectionAboutStudio = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const SectionAboutStudioTitle = styled.h2`
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1440px) {
    font-size: 36px;
    line-height: 1.33;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 48px;
    line-height: 1.16;
    margin-bottom: 40px;
  }
`;

export const SectionAboutStudioDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 1920px) {
    flex-direction: row;
  }
`;

export const SectionAboutStudioText = styled.p`
  color: var(--primary-bluedark);

  /* mobile/h4-medium */
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  max-width: 327px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    max-width: 688px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.2;
    max-width: 628px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 1.4;
    max-width: 828px;
  }
`;

export const SectionAboutStudioTextVan = styled.p`
  color: var(--typography-bluedark);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    font-size: 15px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SectionAboutStudioDivTitle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export const DivSection = styled.div`
  max-width: 327px;
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    max-width: 332px;
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
    max-width: 302px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 398px;
    padding: 40px;
  }
`;

export const SectionAboutStudioValues = styled.h3`
  color: var(--primary-bluedark);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.3;
  }
`;

export const DivSectionOurMission = styled.div`
  max-width: 327px;
  padding: 24px;
  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);

  @media screen and (min-width: 768px) {
    max-width: 332px;
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
    max-width: 302px;
  }

  @media screen and (min-width: 1920px) {
    max-width: 398px;
    padding: 40px;
  }
`;

export const SectionAboutStudioOurMission = styled.h3`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.3;
  }
`;

export const SectionAboutStudioOurMissionP = styled.p`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.2;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const StarIconWrapper = styled.svg`
  border-radius: 100px;
  width: 32px;
  height: 32px;
  padding: 3px;

  fill: ${(props) => props.fill || "currentColor"};
  background: ${(props) => props.background || "transparent"};
`;
