import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1100;
`;

export const ModalWindow = styled.div`
  padding: 80px;
  position: fixed;
  width: 1360px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10000;
`;

export const TitleAndIconWrapper = styled.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Svg = styled.svg`
  width: 24px;
  cursor: pointer;
`;

export const TitleH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: var(--typography-bluedark);
`;

export const TeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const TeamListItem = styled.li`
  width: 282px;
  padding: 24px;
  gap: 16px;

  border-radius: 16px;
  background: var(--background-bluedark);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`;

export const TitleName = styled.h3`
  display: flex;
  justify-content: center;
  gap: 8px;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: var(--typography-white);
`;

export const ParagraphDescription = styled.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--typography-white);
`;

export const NameLinkedinWrapper = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
