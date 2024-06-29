"use client";
import { useState, useEffect, SetStateAction } from "react";

export default function useDimensions() {
  return {
    setSizeByScreen,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
  };
}

export const isSmallDevice = () => {
  const { innerWidth: width, innerHeight: height } = window;
  // Determinar a classe de tamanho com base na largura e altura da tela em pixels
  if (width <= 675) {
    return true;
  }
};

export const isMediumDevice = () => {
  const { innerWidth: width, innerHeight: height } = window;
  if (width > 675 && width < 1450) {
    //411
    return true;
  }

  return false;
};

export const isLargeDevice = () => {
  const { innerWidth: width, innerHeight: height } = window;
  if (width >= 1450) {
    return true;
  }
  return false;
};
export const setSizeByScreen = (
  smallScreen: number,
  mediumScreen: number,
  largeScreen: number
) => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState<
    { width: number; height: number } | undefined
  >(undefined);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!windowDimensions) return;
  if (windowDimensions.width <= 675) {
    return smallScreen;
  }
  if (windowDimensions.width > 675 && windowDimensions.width < 1450) {
    return mediumScreen;
  }

  return largeScreen;
};
