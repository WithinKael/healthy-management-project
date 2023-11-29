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

export const StyledImage = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 8px;
`;
