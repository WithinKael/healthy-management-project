import OlgaDesktopWebp19201x from "../../images/desktop/olga_picture1x.webp";
import OlgaDesktopWebp19202x from "../../images/desktop/olga_picture2x.webp";
import OlgaDesktop19201x from "../../images/desktop/olga_picture1x.jpg";
import OlgaMob1x from "../../images/mobile/mob_olga_picture1x.jpg";
import OlgaMobWebp1x from "../../images/mobile/mob_olga_picture1x.webp";
import OlgaMobWebp2x from "../../images/mobile/mob_olga_picture2x.webp";
import OlgaTab1x from "../../images/tablet/olga_picture@1x.jpg";
import OlgaTabWebp1x from "../../images/tablet/olga_picture@1x.webp";
import OlgaTabWebp2x from "../../images/tablet/olga_picture@2x.webp";
import OlgaDesktop14401x from "../../images/desktop1440/olga_picture@1x.jpg";
import OlgaDesktop1440Webp1x from "../../images/desktop1440/olga_picture@1x.webp";
import OlgaDesktop1440Webp2x from "../../images/desktop1440/olga_picture@2x.webp";

export const mediaQueries = [
  {
    query: "(max-width: 767px)",

    imgData: {
      srcSet: `${OlgaMobWebp2x} 2x, ${OlgaMobWebp1x} 1x`,
      sizes: "(max-width: 767px) 100vw",
      src: OlgaMob1x,
    },
  },
  {
    query: "(min-width: 768px) and (max-width: 1439px)",
    imgData: {
      srcSet: `${OlgaTabWebp2x} 2x, ${OlgaTabWebp1x} 1x`,
      type: "image/webp",
      sizes: "(min-width: 768px) 100vw (max-width: 1439px) 100vw",
      src: OlgaTab1x,
    },
  },
  {
    query: "(min-width: 1440px) and (max-width: 1919px)",
    imgData: {
      srcSet: `${OlgaDesktop1440Webp2x} 2x, ${OlgaDesktop1440Webp1x} 1x`,
      type: "image/webp",
      sizes: "(min-width: 1440px) 100vw (max-width: 1919px) 100vw",
      src: OlgaDesktop14401x,
    },
  },
  {
    query: "(min-width: 1920px)",
    imgData: {
      srcSet: `${OlgaDesktopWebp19202x} 2x, ${OlgaDesktopWebp19201x} 1x`,
      type: "image/webp",
      sizes: "(min-width: 1920px) 100vw",
      src: OlgaDesktop19201x,
    },
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/olga_healthm/",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/olga.polishchuk.14",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/olga-polishchuk-83362140/",
  },
];

export const aboutMeListItems = [
  "MBA Healthcare management",
  "Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)",
  'Експертка в "Центр Розвитку Громадського Здоров\'я УКУ"',
  "Бізнес-консультантка, стратег з медичного маркетингу",
  'Керівниця проєкту "Стетоскоп" - телеграм канал про медичний менеджмент та маркетингу',
  "Більше 18 років досвіду в маркетингу та комунікаціях, з них більше 10 років досвіду в медичному та фармацевтичному бізнесі на керівних посадах",
  "Використання принципів доказової медицини",
];
