import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const testWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        return !!(window.WebGLRenderingContext && gl);
      } catch (e) {
        return false;
      }
    };
    setIsWebGLSupported(testWebGL());

    const mq = window.matchMedia("(max-width: 480px)");
    setIsSmallScreen(mq.matches);
    const handler = (e) => setIsSmallScreen(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const shouldFallbackToImages = !isWebGLSupported || isSmallScreen;

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {shouldFallbackToImages ? (
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-full h-full object-contain'
              loading='lazy'
            />
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
