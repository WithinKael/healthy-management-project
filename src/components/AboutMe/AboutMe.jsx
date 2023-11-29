import s from "./AboutMe.module.css";
import Foto from "../../images/desktop/olga_picture1x.jpg";
import Fotos from "../../images/desktop/olga_picture1x.webp";
import Fotos2x from "../../images/desktop/olga_picture@2x.jpg";
import Fotos1x from "../../images/desktop/olga_picture1x.jpg";
import Icon from "../../images/sprite.svg";

const AboutMe = () => {
  return (
    <section className={s.sectionAboutMe}>
      <div>
        <h2 className={s.sectionAboutMeTitle}>Про мене</h2>
        <div className={s.sectionAboutMeDiv}>
          <div className={s.sectionAboutMeDivWidth}>
            <picture>
              <source
                srcSet={`${Fotos} 2x, ${Fotos} 1x`}
                media="(min-width: 1920px)"
                type="image/webp"
              />
              <source
                srcSet={`${Fotos2x} 2x, ${Fotos1x} 1x`}
                media="(min-width: 1920px)"
                type="image/png"
              />
              <img src={Foto} alt="Ольга Поліщук" />
            </picture>
          </div>
          <div className={s.sectionAboutMeDivOl}>
            <h3 className={s.sectionAboutMeHOl}>Ольга Поліщук</h3>
            <p className={s.sectionAboutMePol}>
              CEO and Founder студії стратегічного розвитку
            </p>
            <ul>
              <li className={s.sectionAboutMeList}>
                MBA Healthcare management
              </li>
              <li className={s.sectionAboutMeList}>
                Викладачка медичного маркетингу Бізнес-школа УКУ (LvBS)
              </li>
              <li className={s.sectionAboutMeList}>
                Експертка в "Центр Розвитку Громадського Здоров'я УКУ"
              </li>
              <li className={s.sectionAboutMeList}>
                Бізнес-консультантка, стратег з медичного маркетингу
              </li>
              <li className={s.sectionAboutMeList}>
                Керівниця проєкту "Стетоскоп" - телеграм канал про медичний
                менеджмент та маркетингу
              </li>
              <li className={s.sectionAboutMeList}>
                Більше 18 років досвіду в маркетингу та комунікаціях, з них
                більше 10 років досвіду в медичному та фармацевтичному бізнесі
                на керівних посадах
              </li>
              <li className={s.sectionAboutMeList}>
                Використання принципів доказової медицини
              </li>
            </ul>
            <ul className={s.sectionAboutMeAdress}>
              <li>
                <a href="" className={s.sectionAboutMeLink}>
                  LinkedIn
                  <svg width="24" height="24" className={s.sectionAboutMeSvg}>
                    <use href={`${Icon}#icon-arrow-up-right`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className={s.sectionAboutMeLink}>
                  Facebook
                  <svg width="24" height="24" className={s.sectionAboutMeSvg}>
                    <use href={`${Icon}#icon-arrow-up-right`}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="" className={s.sectionAboutMeLink}>
                  Instagram
                  <svg width="24" height="24" className={s.sectionAboutMeSvg}>
                    <use href={`${Icon}#icon-arrow-up-right`}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
