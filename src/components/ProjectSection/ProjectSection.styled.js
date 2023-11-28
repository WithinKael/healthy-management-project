import styled from "@emotion/styled";

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 600;
  line-height: calc(56 / 48);

  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: calc((100% - (2 * 24px)) / 3);
  padding: 40px;
  border-radius: 16px;
  min-height: 808px;

  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-white);
`;
