import Image from "next/image";
import React from "react";
import { ImageMultipleProps } from "@/app/interfaces/_image";

export interface HeroscreenProps {
  image: ImageMultipleProps;
}

const Heroscreen: React.FC<HeroscreenProps> = (content: HeroscreenProps) => {
  
  console.log(content);
  
  
  return (<></>)
  
  // return (
  //   <>
  //     {content.image.data.map((image, index) => (
  //       <figure key={index} className="hero">
  //         <Image
  //           src={process.env. NEXT_PUBLIC_API_TOKEN + image.attributes.url}
  //           alt={image.attributes.alternativeText}
  //           fill={true}
  //           objectFit="cover"
  //           objectPosition="center"
  //           priority={true}
  //           className="hero_img"
  //         />
  //       </figure>
  //     ))}    
  //   </>
  // );
};

export default Heroscreen;
