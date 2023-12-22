import PropTypes from "prop-types";
import TickList from "../TickList/TickList";
import {
  IconSvg,
  SectionServices,
  ServicesBtn,
  ServicesContentWrapper,
  ServicesItem,
  ServicesList,
  ServicesText,
  ServicesTitle,
  Span,
} from "./Services.styled";
import { servicesData } from "./data";

const Services = ({ handleSetActiveLink }) => {
  return (
    <SectionServices className="container" id="services">
      <ServicesContentWrapper>
        <ServicesTitle>Послуги</ServicesTitle>
        <ServicesText>
          Будуємо ефективні <Span>стратегії здорового менеджменту</Span> для
          бізнесів. Розвивайте свій бізнес за допомогою ефективних стратегій
          здорового менеджменту.
        </ServicesText>
        <ServicesList>
          {servicesData?.map((element) => (
            <ServicesItem key={element.title}>
              <TickList
                title={element.title}
                about={element.about}
                variant="services"
              />
              <IconSvg>
                <use href={element.path} />
              </IconSvg>
            </ServicesItem>
          ))}
        </ServicesList>
        <ServicesBtn
          href="#contact"
          onClick={(e) => handleSetActiveLink("contact", e)}
          aria-label="Scroll to contacts form"
        >
          Замовити консультацію
        </ServicesBtn>
      </ServicesContentWrapper>
    </SectionServices>
  );
};

Services.propTypes = {
  handleSetActiveLink: PropTypes.func.isRequired,
};

export default Services;
