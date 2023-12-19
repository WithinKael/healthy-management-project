import styled from "@emotion/styled";

export const SectionServices = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const ServicesContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    gap: 16px;
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }

  @media screen and (min-width: 1920px) {
    gap: 40px;
    padding: 80px;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: var(--typography-white);
  font-weight: 600;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 0px;
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

export const ServicesText = styled.p`
  color: var(--typography-white);
  font-size: 15px;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 22px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    line-height: 28px;
    width: 828px;
  }
`;

export const Span = styled.span`
  color: var(--primary-yellow);
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
    font-weight: 500;
    line-height: 28px;
  }
`;

export const ServicesList = styled.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }

  @media screen and (min-width: 1920px) {
    flex-wrap: nowrap;
  }
`;

export const ServicesItem = styled.li`
  position: relative;
  background: var(--background-white);
  padding: 24px;
  border-radius: 16px;

  @media screen and (min-width: 1440px) {
    padding: 40px;
    width: calc((100% - (24px)) / 2);
  }

  @media screen and (min-width: 1920px) {
    width: calc((100% - (24px * 3)) / 4);
  }
`;

export const IconSvg = styled.svg`
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  padding: 16px;
  background: var(--primary-yellow);
  right: 17px;
  top: -15px;

  @media screen and (min-width: 768px) {
    width: 56px;
    height: 56px;
    right: 24px;
    top: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 72px;
    height: 72px;
    right: 16px;
    top: -16px;
  }

  @media screen and (min-width: 1920px) {
    width: 80px;
    height: 80px;
    left: 258px;
    top: -24px;
  }
`;

export const ServicesBtn = styled.a`
  width: 279px;
  height: 56px;
  color: var(--typography-bluedark);
  background: var(--primary-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 260px;
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

  &:hover {
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-weight: 600;
  }

  &:focus {
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-weight: 600;
  }
`;
