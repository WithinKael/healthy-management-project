import styled from "@emotion/styled";
import Foto from "../../images/desktop/hero1x.webp";

export const SectionHero = styled.section`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Foto});
  background-size: cover;
  margin-top: 120px;
  padding-top: 296px;
  padding-bottom: 296px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeroTitle = styled.h1`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 64px;
  width: 828px;
  margin-bottom: 24px;
`;

export const SectionHeroText = styled.h3`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  max-width: 828px;
`;

export const SectionHeroTextUl = styled.ul`
  margin-left: 38px;
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const ListItem = styled.li`
  color: var(--system-default-10);
  //   color: var(--typography-white, #f8f8f8);

  /* desktop/h3-medium */
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */

  &::before {
    content: "\\2022";
    color: var(--system-default-10);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

export const SectionHeroDiv = styled.div`
  display: flex;
  gap: 24px;
`;

export const SectionHeroLinks = styled.a`
  display: flex;
  width: 260px;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--system-default-10);
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover,
  &:focus {
    background: var(--primary-yellow);
    color: var(--primary-bluedark);
  }
`;
