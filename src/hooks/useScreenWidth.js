import { useMediaQuery } from "react-responsive";

export const useScreenWidth = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1920 });

  const device =
    (isMobile && "mobile") ||
    (isTablet && "tablet") ||
    (isDesktop && "desktop") ||
    (isLargeDesktop && "largeDesktop");
  return device;
};
