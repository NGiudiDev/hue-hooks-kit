import { useEffect, useState } from "react";

export const useMediaQuery = (mediaQuery) => {
  //? initialize with false to avoid hydration mismatch in SSR, but calculate initial value once
  const [isMatch, setIsMatch] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    } 
    
    return window.matchMedia(mediaQuery).matches;
  });

  useEffect(() => {
    //? verify that we are on the client
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event) => {
      setIsMatch(event.matches);
    };

    //? add listener
    mediaQueryList.addEventListener("change", handleChange);

    //? cleanup
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [mediaQuery]);

  return isMatch;
};