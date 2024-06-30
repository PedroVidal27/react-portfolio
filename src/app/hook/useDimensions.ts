"use client";
import { useState, useEffect } from "react";

const defaultDimensions = { width: 0, height: 0 };

export default function useDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(defaultDimensions);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isExtraSmallDevice = () => {
    if (!isClient) return false;
    return windowDimensions.width <= 675;
  };

  const isSmallDevice = () => {
    if (!isClient) return false;
    return windowDimensions.width <= 675;
  };

  const isMediumDevice = () => {
    if (!isClient) return false;
    return windowDimensions.width > 675 && windowDimensions.width < 1450;
  };

  const isLargeDevice = () => {
    if (!isClient) return false;
    return windowDimensions.width >= 1450;
  };

  const setSizeByScreen = (
    extraSmallScreen: number,
    smallScreen: number,
    mediumScreen: number,
    largeScreen: number
  ) => {
    if (!isClient) return smallScreen;
    const { width } = windowDimensions;
    if (width < 400) {
      return extraSmallScreen;
    }
    if (width >= 400 && width <= 675) {
      return smallScreen;
    }
    if (width > 675 && width < 1450) {
      return mediumScreen;
    }
    return largeScreen;
  };

  return {
    setSizeByScreen,
    isExtraSmallDevice,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
  };
}
