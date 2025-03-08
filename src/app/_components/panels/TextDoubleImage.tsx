import Image from "next/image";
import React from "react";
import { ImageProps } from "@/app/interfaces/_image";
import { LinkItem, TextBlock } from "@/app/interfaces/page";
import ButtonLink from "../buttonLink";

export interface TextDoubleImageProps {
  title: string
  text: TextBlock[]
  links: LinkItem[]
  image1: ImageProps
  image2: ImageProps
}

const TextDoubleImage: React.FC<TextDoubleImageProps> = ({ title, text, links, image1, image2 }) => {
  return (
    <section className="bg-primary-dark flex flex-col-reverse text-tertiary xl:grid xl:grid-cols-2 xl:gap-lg xl:px-lg xl:py-lg">
      {/* First Image */}
      <figure className="relative aspect-[4/3] md:aspect-video xl:aspect-[inherit] xl:col-start-1 xl:row-start-1 xl:h-2/3">
        <Image
          src={process.env.NEXT_PUBLIC_API_URL + image1.data.attributes.url}
          fill={true}
          objectFit="cover"
          alt={image1.data.attributes.alternativeText}
        />
      </figure>

      {/* Texte */}
      <div className="p-sm md:p-md lg:p-lg xl:pt-lg xl:p-0 xl:col-start-2 xl:row-start-1">
        <h2 className="text-2xl">{title}</h2>
        
        {text.map((paragraph, index) => (
            <p key={index}>
                {paragraph.children.map((child, childIndex) => {
                    if (child.type === "link" && child.url) {
                        // Si l'élément est un lien
                        const linkContent: JSX.Element[] = [];

                        child.children?.forEach((linkChild, linkChildIndex) => {
                            let linkText: JSX.Element | string = linkChild.text;

                            // Appliquer les styles bold et italic sur le texte du lien
                            if (linkChild.bold && linkChild.italic) {
                                linkText = <strong key={linkChildIndex}><em>{linkChild.text}</em></strong>;
                            } else if (linkChild.bold) {
                                linkText = <strong key={linkChildIndex}>{linkChild.text}</strong>;
                            } else if (linkChild.italic) {
                                linkText = <em key={linkChildIndex}>{linkChild.text}</em>;
                            }

                            linkContent.push(linkText);
                        });

                        return (
                            <a key={childIndex} href={child.url} target="_blank" rel="noopener noreferrer">
                                {linkContent}
                            </a>
                        );
                    }

                    // Gérer les autres types de texte (normal, avec bold et italic)
                    let textElement: JSX.Element = <>{child.text}</>;

                    if (child.bold && child.italic) {
                        textElement = <strong key={childIndex}><em>{child.text}</em></strong>;
                    } else if (child.bold) {
                        textElement = <strong key={childIndex}>{child.text}</strong>;
                    } else if (child.italic) {
                        textElement = <em key={childIndex}>{child.text}</em>;
                    }

                    return <span key={childIndex}>{textElement}</span>;
                })}
            </p>
        ))}
        
        <div className='flex flex-col gap-4 mt-8'>
            {links?.map((link) => (
                <>
                    <ButtonLink 
                        primary={false} 
                        label={link.label}
                        href={
                            link.external_link ? link.external_link : 
                            link.pages.data[0] ? link.pages.data[0].attributes.slug : 
                            link.posts.data[0] ? 'blog/' + link.posts.data[0]?.attributes.slug : ""
                        }
                        external={link.external_link ? true : false}
                        classes="white-border"
                    />
                </>
            ))}
        </div>

        {/* Second Image */}
        {image2.data != null ? <figure className="hidden xl:block relative aspect-square ml-xl col-start-2 row-start-2 mt-lg ml-lg">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + image2.data?.attributes.url}
            fill={true}
            objectFit="cover"
            alt={image2.data?.attributes.alternativeText}
          />
        </figure> : <></>}
      </div>

    </section>
  );
};

export default TextDoubleImage;
