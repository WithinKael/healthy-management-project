import styled from "@emotion/styled";

export const SectionServices = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const ServicesContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 884px;
  background: var(--background-bluedark);
  border-radius: 16px;
  padding: 80px;
`;

export const ServicesTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: 56px;
  color: var(--typography-white);
`;

export const ServicesText = styled.p`
  color: var(--typography-white);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  width: 828px;
`;

export const Span = styled.span`
  color: var(--primary-yellow);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`;

export const ServicesList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const ServicesItem = styled.li`
  width: calc((100% - (24px * 3)) / 4);
  background: var(--background-white);
  padding: 40px;
  border-radius: 16px;
`;

export const ServicesBtn = styled.a`
  width: 260px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--typography-bluedark);
  background: var(--primary-yellow);
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  margin-left: auto;
  margin-right: auto;
`;
