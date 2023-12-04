import styled from "@emotion/styled";

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: var(--typography-bluedark, #1b3641);
`;

export const Category = styled.h3`
  font-size: 18px;
  line-height: calc(24 / 18);
  font-weight: 600;
  display: ${(props) => (props.symbols > 20 ? "block" : "inline")};
  padding: 4px 16px;

  border-radius: 16px;
  background: rgba(27, 54, 65, 0.2);
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(38 / 24);
    display: inline;
  }
`;

export const StyledImage = styled.img`
  height: 279px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;
export const DetailsBtn = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
`;
