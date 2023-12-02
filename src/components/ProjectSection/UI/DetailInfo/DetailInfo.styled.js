import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 40px;

  display: flex;
  gap: 24px;
  flex-direction: column;

  color: var(--background-whitegrey, #f4f4f6);
`;

export const Category = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: calc(32 / 24);
  display: inline;

  padding: 4px 16px;
  border-radius: 16px;
  background: rgba(244, 244, 246, 0.1);
`;
