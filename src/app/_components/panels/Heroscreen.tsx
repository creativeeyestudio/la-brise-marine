import Image from "next/image";
import React from "react";
import { ImageMultipleProps } from "@/app/interfaces/_image";

export interface HeroscreenProps {
  images: ImageMultipleProps;
}

const Heroscreen: React.FC<HeroscreenProps> = (content: HeroscreenProps) => {
  
  console.log(content);
  
  return (
    <div className="hero w-full h-screen">
      {content.images.data.map((image, index) => (
        <figure key={index} className="relative h-screen">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + image.attributes.url}
            alt={image.attributes.alternativeText}
            fill={true}
            objectFit="cover"
            objectPosition="center"
            priority={true}
            className="hero_img"
          />
        </figure>
      ))}    
    </div>
  );
};

export default Heroscreen;
