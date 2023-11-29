import { useState, useEffect } from "react";
import sprite from "../../images/sprite.svg";
import { ScrollToTopButton } from "./ScrollToTop.styled";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 480);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <ScrollToTopButton onClick={scrollToTop}>
          <svg width="24" height="24">
            <use href={`${sprite}#icon-arrowup`} />
          </svg>
        </ScrollToTopButton>
      )}
    </>
  );
};

export default ScrollToTop;
