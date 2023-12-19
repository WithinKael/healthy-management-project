import styled from "@emotion/styled";

export const SectionPrinciples = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 24px;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const PrinciplesDiv = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: var(--background-white);

  @media screen and (min-width: 768px) {
    padding: 40px;
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }

  @media screen and (min-width: 1920px) {
    padding: 80px;
    max-width: 828px;
  }
`;

export const PrinciplesContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
    margin-bottom: 40px;
  }
`;

export const PrinciplesTitle = styled.h2`
  color: var(--typography-bluedark);
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

export const PrinciplesText = styled.p`
  color: var(--typography-bluedark);
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 22px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const PrinciplesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1920px) {
    gap: 24px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--background-whitegrey);
  padding: 16px;
`;

export const SvgDone = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--background-white);
  stroke-width: 4px;

  @media screen and (min-width: 768px) {
    width: 25.79px;
    height: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 26.02px;
    height: 24px;
  }

  @media screen and (min-width: 1920px) {
    width: 25.62px;
    height: 24px;
  }
`;

export const ListItemText = styled.p`
  color: var(--typography-bluedark);
  width: 207px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 22px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
  }
`;
