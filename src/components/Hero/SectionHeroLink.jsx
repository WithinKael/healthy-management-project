import { SectionHeroLinkContact, SectionHeroLinkServices } from "./Hero.styled";
import PropTypes from "prop-types";

const SectionHeroLink = ({ type, children, href, onClick }) => {
  if (type === "contact") {
    return (
      <SectionHeroLinkContact href={href} onClick={onClick}>
        {children}
      </SectionHeroLinkContact>
    );
  } else if (type === "services") {
    return (
      <SectionHeroLinkServices href={href} onClick={onClick}>
        {children}
      </SectionHeroLinkServices>
    );
  }

  return null;
};

SectionHeroLink.propTypes = {
  type: PropTypes.oneOf(["contact", "services"]).isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SectionHeroLink;
