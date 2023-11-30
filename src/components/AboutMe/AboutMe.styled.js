import styled from "@emotion/styled";

export const SectionAboutMe = styled.section`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 120px;
`;

export const SectionAboutMeTitle = styled.h2`
  margin-bottom: 40px;
  color: var(--typography-bluedark, #1b3641);
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
`;

export const SectionAboutMeDiv = styled.div`
  display: flex;
  gap: 24px;
`;

export const SectionAboutMeDivOl = styled.div`
  width: calc((100% - 24px) / 2);
  padding: 73px;
  border-radius: 16px;
  background: var(--background-white, #fcfcfc);
  box-shadow: 0px 0px 8px 0px rgba(27, 54, 65, 0.08);
`;

export const SectionAboutMeHOl = styled.h3`
  color: var(--typography-black, #161717);
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  margin-bottom: 16px;
`;

export const SectionAboutMePol = styled.p`
  color: var(--typography-bluedark, #1b3641);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
`;

export const SectionAboutMeList = styled.li`
  color: var(--typography-bluedark, #1b3641);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &::before {
    content: "\\2022";
    color: var(--typography-bluedark, #1b3641);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

export const SectionAboutMeAdress = styled.ul`
  margin-top: 42px;
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: baseline;
`;

export const SectionAboutMeLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--typography-bluedark, #1b3641);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  text-decoration: none; // Убрано стандартное подчеркивание

  &:hover::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px;
    height: 3px;
    background-color: var(--typography-bluedark, #1b3641);
  }
`;

export const SectionAboutMeSvg = styled.svg`
  margin-left: 40px;
`;

export const SectionAboutMeDivWidth = styled.div`
  width: calc((100% - 24px) / 2);
  border-radius: 16px;
`;
