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
  height: 808px;

  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  background-color: var(--background-white);
  overflow: hidden;
  position: relative;
`;

export const HiddenInfo = styled.div`
  /* transform: translateY(100%); */
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background: linear-gradient(
      0deg,
      rgba(22, 23, 23, 0.5) 0%,
      rgba(22, 23, 23, 0.5) 100%
    ),
    linear-gradient(0deg, rgba(27, 54, 65, 0.8) 0%, rgba(27, 54, 65, 0.8) 100%),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
