import styled from "@emotion/styled";
import HeroDesktop1920Foto1x from "../../images/desktop/hero1x.webp";
import HeroDesktop1920Foto2x from "../../images/desktop/hero@2x.jpg";
import HeroMobaile1x from "../../images/mobile/hero1x.jpg";
import HeroWebp from "../../images/mobile/hero1x.webp";
import HeroMobaile2x from "../../images/mobile/hero@2x.jpg";
import HeroTabletFoto from "../../images/tablet/hero@1x.jpg";
import HeroTabletWebp from "../../images/tablet/hero@1x.webp";
import HeroTabletFoto2x from "../../images/tablet/hero@2x.jpg";
import HeroDesktop1440Foto from "../../images/desktop1440/hero@1x.jpg";
import HeroDesktop1440Foto2x from "../../images/desktop1440/hero@2x.jpg";

export const SectionHero = styled.section`
  background-repeat: no-repeat;
  background-position: center;
  // background-image: url(${HeroMobaile1x});

  @supports (
    background-image: image-set(url(${HeroWebp}) 1x, url(${HeroMobaile1x}) 1x)
  ) {
    background-image: image-set(url(${HeroWebp}) 1x, url(${HeroMobaile1x}) 1x);
  }

  background-size: cover;
  margin-top: 88px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${HeroMobaile2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${HeroTabletFoto});

    // @supports (
    //   background-image:
    //     image-set(url(${HeroTabletWebp}) 1x, url(${HeroTabletFoto}) 1x)
    // ) {
    //   background-image: image-set(
    //     url(${HeroTabletWebp}) 1x,
    //     url(${HeroTabletFoto}) 1x
    //   );
    // }

    padding-top: 234px;
    padding-bottom: 234px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${HeroTabletFoto2x});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${HeroDesktop1440Foto});
    margin-top: 103px;
    padding-top: 236px;
    padding-bottom: 236px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${HeroDesktop1440Foto2x});
    }
  }

  @media screen and (min-width: 1920px) {
    background-image: url(${HeroDesktop1920Foto1x});
    margin-top: 133px;
    padding-top: 296px;
    padding-bottom: 296px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${HeroDesktop1920Foto2x});
    }
  }
`;

export const SectionHeroTitle = styled.h1`
  max-width: 289px;
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    max-width: 620px;
    font-size: 40px;
    font-weight: 600;
    line-height: 56px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 754px;
    font-size: 48px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 56px;
    line-height: 64px;
    max-width: 828px;
  }
`;

export const SectionHeroText = styled.h2`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
    max-width: 828px;
  }
`;

export const SectionHeroTextUl = styled.ul`
  margin-left: 20px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    margin-left: 30px;
    margin-top: 18px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
    margin-left: 38px;
    margin-top: 24px;
  }
`;

export const ListItem = styled.li`
  color: var(--system-default-10);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  &::before {
    content: "\\2022";
    color: var(--system-default-10);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const SectionHeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SectionHeroLinkBase = styled.a`
  display: flex;
  max-width: 327px;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(248, 248, 248, 0.08);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: background 0.5s ease, color 0.5s ease;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 16px 0px rgba(248, 248, 248, 0.16);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const SectionHeroLinkContact = styled(SectionHeroLinkBase)`
  color: var(--typography-bluedark);
  background: var(--primary-yellow);

  @media screen and (min-width: 768px) {
    max-width: 0;
    min-width: 260px;
    font-size: 15px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 193px;
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 260px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SectionHeroLinkServices = styled(SectionHeroLinkBase)`
  color: var(--system-default-10);
  border: 1px solid var(--system-default-10);

  @media screen and (min-width: 768px) {
    max-width: 0;
    min-width: 260px;
    height: 56px;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    transition: background 0.5s ease, color 0.5s ease;
  }

  @media screen and (min-width: 1440px) {
    min-width: 193px;
    line-height: 18px;
  }

  @media screen and (min-width: 1920px) {
    min-width: 260px;
    font-size: 16px;
    line-height: 24px;
  }
`;
