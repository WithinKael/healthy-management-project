import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(6, 33, 54, 0.4);
  overflow: hidden;
  z-index: 1100;
`;

export const ModalWindow = styled.div`
  background-color: white;
  padding: 40px 24px;

  @media screen and (min-width: 768px) {
    padding: 40px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
    position: fixed;
    width: 1360px;
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }

  @media screen and (min-width: 1920px) {
    padding: 80px;
  }
`;

export const TitleAndIconWrapper = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and(min-width:1920px) {
    margin-bottom: 40px;
  }
`;

export const Svg = styled.svg`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 1920px) {
  }
`;

export const CrossSvg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const TitleH2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: var(--typography-bluedark);

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const TeamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const TeamListItem = styled.li`
  @media screen and (min-width: 1440px) {
    width: 282px;
    padding: 24px;
    gap: 16px;

    border-radius: 16px;
    background: var(--background-bluedark);
    box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
  }
`;

export const TitleName = styled.h3`
  display: flex;
  justify-content: center;
  gap: 8px;

  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: var(--typography-white);

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ParagraphDescription = styled.p`
  display: flex;
  justify-content: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--typography-white);
`;

export const NameLinkedinWrapper = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameAndPositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 1920px) {
    gap: 8px;
  }
`;

export const ModalImgWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

export const ModalImg = styled.img`
  border-radius: 8px;

  &:hover {
    transform: scale(1.1);
    border-radius: 8px;
  }
`;
