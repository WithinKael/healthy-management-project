import styled from "@emotion/styled";

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const BusinessToolsWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 80px;
  background-color: var(--background-bluedark);
`;

export const BusinessToolsTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.17;
  color: var(--system-default-10);

  & span {
    color: var(--primary-yellow);
  }
`;

export const ListTools = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
`;

export const ItemTools = styled.li`
  display: flex;
  align-items: center;
  width: calc((100% - (24px * 4)) / 5);
  padding: 24px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 16px;
  border: 1px solid var(--background-whitegrey);
  color: var(--system-default-10);
`;
