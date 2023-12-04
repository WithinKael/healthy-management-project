import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h4`
  font-size: ${(props) => (props.forDetail ? "18px" : "16px")};
  font-weight: 600;
  line-height: calc(${(props) => (props.forDetail ? 24 / 18 : 24 / 16)});

  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.forDetail ? "24px" : "20px")};
    line-height: calc(${(props) => (props.forDetail ? 32 / 24 : 28 / 20)});
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);

  display: flex;
  gap: 8px;

  & > svg {
    max-width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;

export const Comment = styled.p`
  font-size: ${(props) => (props.additionalComment ? "14px" : "16px")};
  font-weight: ${(props) => (props.additionalComment ? 500 : 600)};
  line-height: calc(
    ${(props) => (props.additionalComment ? 18 / 14 : 24 / 16)}
  );
  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.additionalComment ? "16px" : "20px")};
    font-weight: ${(props) => (props.additionalComment ? 500 : 600)};
    line-height: calc(
      ${(props) => (props.additionalComment ? 24 / 16 : 28 / 20)}
    );
  }
`;

export const Icon = styled.svg`
  fill: currentColor;
  stroke: currentColor;
`;
