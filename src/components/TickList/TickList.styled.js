import styled from "@emotion/styled";

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: calc(28 / 20);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);

  display: flex;
  gap: 8px;

  & > svg {
    max-width: 24px;
    height: 24px;
  }
`;
