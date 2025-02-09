import Image from "next/image";
import React from "react";
import { ImageProps } from "@/app/interfaces/_image";

export interface HeroscreenProps {
  image: ImageProps | undefined;
}

const Heroscreen: React.FC<HeroscreenProps> = (content: HeroscreenProps) => {
  if (content.image != undefined) {
    return (
      <>
        <figure className="hero">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + content.image.data.attributes.url}
            alt={content.image.data.attributes.alternativeText}
            fill={true}
            objectFit="cover"
            objectPosition="center"
            priority={true}
            className="hero_img"
          />
        </figure>
      </>
    );
  }
};

export default Heroscreen;
