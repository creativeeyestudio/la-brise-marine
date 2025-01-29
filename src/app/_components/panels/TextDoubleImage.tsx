import Image from "next/image";
import React from "react";
import nextConfig from "../../../../next.config";
import { ImageProps } from "@/interfaces/_image";

export interface TextDoubleImageProps {
  title: string;
  content: string;
  image1: ImageProps;
  image2: ImageProps;
}

const TextDoubleImage: React.FC<TextDoubleImageProps> = (
  content: TextDoubleImageProps
) => {
  return (
    <section className="text-double-img">
      <div className="text-double-img_content">
        <h2 className="text-double-img_title">{content.title}</h2>
        {content.content}
      </div>

      <figure className="text-double-img_image text-double-img_image--first">
        <Image
          src={nextConfig.apiUrl + content.image1.data.attributes.url}
          width={content.image1.data.attributes.width}
          height={content.image1.data.attributes.height}
          alt={content.image1.data.attributes.alternativeText}
        />
      </figure>

      <figure className="text-double-img_image text-double-img_image--second">
        <Image
          src={nextConfig.apiUrl + content.image2.data.attributes.url}
          width={content.image2.data.attributes.width}
          height={content.image2.data.attributes.height}
          alt={content.image2.data.attributes.alternativeText}
        />
      </figure>
    </section>
  );
};

export default TextDoubleImage;
