import Image from "next/image";
import React from "react";
import { ImageProps } from "@/app/interfaces/_image";
import { LinkItem } from "@/app/interfaces/page";
import ButtonLink from "../buttonLink";

export interface TextDoubleImageProps {
  title: string
  text: string
  links: LinkItem[]
  image1: ImageProps
  image2: ImageProps
}

const TextDoubleImage: React.FC<TextDoubleImageProps> = ({ title, text, links, image1, image2 }) => {
  return (
    <section className="text-double-img">
      <div className="text-double-img_content">
        <h2 className="text-double-img_title">{title}</h2>
        {text}
        <div className='btnLinks'>
            {links?.map((link) => (
                <>
                    <ButtonLink 
                        primary={true} 
                        label={link.label}
                        href={
                            link.external_link ? link.external_link : 
                            link.pages.data[0] ? link.pages.data[0].attributes.slug : 
                            link.posts.data[0] ? 'blog/' + link.posts.data[0]?.attributes.slug : ""
                        }
                        external={link.external_link ? true : false}
                    />
                </>
            ))}
        </div>
      </div>

      <figure className="text-double-img_image text-double-img_image--first">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + image1.data.attributes.url}
          width={image1.data.attributes.width}
          height={image1.data.attributes.height}
          alt={image1.data.attributes.alternativeText}
        />
      </figure>

      {image2.data != null ? <figure className="text-double-img_image text-double-img_image--second">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + image2.data?.attributes.url}
          width={image2.data?.attributes.width}
          height={image2.data?.attributes.height}
          alt={image2.data?.attributes.alternativeText}
        />
      </figure> : <></>}
    </section>
  );
};

export default TextDoubleImage;
