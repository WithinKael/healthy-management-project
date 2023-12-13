import { SectionHeroLinkContact, SectionHeroLinkServices } from "./Hero.styled";
import PropTypes from "prop-types";

const SectionHeroLink = ({ type, children, href }) => {
  if (type === "contact") {
    return (
      <SectionHeroLinkContact href={href}>{children}</SectionHeroLinkContact>
    );
  } else if (type === "services") {
    return (
      <SectionHeroLinkServices href={href}>{children}</SectionHeroLinkServices>
    );
  }

  return null;
};

SectionHeroLink.propTypes = {
  type: PropTypes.oneOf(["contact", "services"]).isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default SectionHeroLink;
