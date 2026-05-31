import { useMediaQuery } from "./useMediaQuery";

export const BREAKPOINTS = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
  
  mobileSm: "(max-width: 479px)",
  mobileMd: "(min-width: 480px) and (max-width: 767px)",
  
  desktopSm: "(min-width: 1024px) and (max-width: 1279px)",
  desktopLg: "(min-width: 1280px)",
  
  //? orientation
  portrait: "(orientation: portrait)",
  landscape: "(orientation: landscape)",
  
  //? device type
  touch: "(hover: none) and (pointer: coarse)",
  mouse: "(hover: hover) and (pointer: fine)",
};

export const useResponsive = () => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);
  
  const isMobileSm = useMediaQuery(BREAKPOINTS.mobileSm);
  const isMobileMd = useMediaQuery(BREAKPOINTS.mobileMd);
  
  const isDesktopSm = useMediaQuery(BREAKPOINTS.desktopSm);
  const isDesktopLg = useMediaQuery(BREAKPOINTS.desktopLg);
  
  const isPortrait = useMediaQuery(BREAKPOINTS.portrait);
  const isLandscape = useMediaQuery(BREAKPOINTS.landscape);
  
  const isTouchDevice = useMediaQuery(BREAKPOINTS.touch);
  const isMouseDevice = useMediaQuery(BREAKPOINTS.mouse);

  const isMobileDevice = isMobile || (isTablet && isTouchDevice);
  const isSmallScreen = isMobile;
  const isMediumScreen = isTablet;
  const isLargeScreen = isDesktop;

  return {
    isMobile,
    isTablet,
    isDesktop,
    isMobileSm,
    isMobileMd,
    isDesktopSm,
    isDesktopLg,
    
    //? orientation
    isPortrait,
    isLandscape,
    
    //? device type
    isTouchDevice,
    isMouseDevice,
    
    //? helpers
    isMobileDevice,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    
    //? breakpoints objects.
    breakpoints: BREAKPOINTS,
  };
};
