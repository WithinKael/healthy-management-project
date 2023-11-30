import { useState, useEffect } from "react";
import sprite from "../../images/sprite.svg";
import { ScrollToTopButton } from "./ScrollToTop.styled";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.getElementById("footer");
      const distanceFromBottom =
        window.innerHeight + window.scrollY - footer.offsetTop;
      const newBottom = Math.max(80, distanceFromBottom);

      setIsVisible(scrollY > 480 || distanceFromBottom > 80);
      document.documentElement.style.setProperty(
        "--scroll-to-top-bottom",
        `${newBottom}px`
      );
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
