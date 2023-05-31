"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export const ImageWithPlaceholder = ({ src, alt, className }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={classNames("relative w-full h-full", className)}>
      <Image
        fill
        src={src}
        alt={alt}
        className={classNames(
          "object-cover object-center transition-opacity duration-300 ease-in-out",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin">
            <svg fill="none" viewBox="0 0 24 24" className="fill-white">
              <path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
