"use client";
import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export default function useDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallDevice = () => {
    const { width } = windowDimensions;
    return width <= 675;
  };

  const isMediumDevice = () => {
    const { width } = windowDimensions;
    return width > 675 && width < 1450;
  };

  const isLargeDevice = () => {
    const { width } = windowDimensions;
    return width >= 1450;
  };

  const setSizeByScreen = (smallScreen: number, mediumScreen: number, largeScreen: number) => {
    const { width } = windowDimensions;
    if (width <= 675) {
      return smallScreen;
    }
    if (width > 675 && width < 1450) {
      return mediumScreen;
    }
    return largeScreen;
  };

  return {
    setSizeByScreen,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
  };
}
