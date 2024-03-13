"use client";
import React, { useState, useEffect } from "react";

type PropsType = {
  src: string;
  alt: string;
  blurHash: string;
  height: string;
};

const BlurHashImage = ({ src, alt, blurHash, height }: PropsType) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      <div className="w-full" style={{ height: height }}>
        {!imageLoaded && (
          <img
            src={blurHash}
            alt="blurredImage"
            loading="eager"
            className={`w-full object-cover ${
              imageLoaded ? "opacity-0" : "opacity-100"
            } transition-all duration-300`}
            style={{ height: height }}
          />
        )}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full object-cover ${
            imageLoaded ? "opacity-100" : "opacity-0"
          } transition-all duration-500`}
          style={{ height: height }}
        />
      </div>
    </>
  );
};

export default BlurHashImage;
