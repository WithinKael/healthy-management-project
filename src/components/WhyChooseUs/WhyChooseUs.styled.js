import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  max-width: 100%;
  height: 680px;
  border-radius: 16px;
  padding: 80px;
  background: var(--background-bluedark);
`;

export const ContentTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  color: var(--system-default-10);
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-basis: calc((100% - 24px) / 2);
  padding: 40px;
`;

export const ItemTitle = styled.h3`
  color: var(--system-default-10);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  max-width: 542px;
  color: var(--system-default-10);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
