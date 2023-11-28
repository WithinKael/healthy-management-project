import styled from "@emotion/styled";

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`;

export const Category = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: calc(38 / 24);
  display: inline;

  padding: 4px 16px;
  border-radius: 16px;
  background: rgba(27, 54, 65, 0.2);
`;

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

export const StyledImage = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 8px;
`;
