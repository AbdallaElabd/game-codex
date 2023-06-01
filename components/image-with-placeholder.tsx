"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

import { Spinner } from "./spinner";

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
          <Spinner />
        </div>
      )}
    </div>
  );
};
