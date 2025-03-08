import Image from 'next/image';
import React, { JSX } from 'react';
import { ImageProps } from '@/app/interfaces/_image';
import { LinkItem, TextBlock } from '@/app/interfaces/page';
import ButtonLink from '../buttonLink';

import boatImg from '../../../assets/images/boat-illustration.png';

interface TextImageProps {
    title: string,
    text: TextBlock[],
    links: LinkItem[],
    image: ImageProps
}

const TextImage: React.FC<TextImageProps> = ({ title, text, links, image }) => {
    return (
        <section className='xl:py-lg xl:grid xl:grid-cols-2 xl:grid-rows-1'>
            <div className="text-img_text p-sm md:p-md lg:p-lg xl:pb-0 xl:py-lg xl:pt-lg">
                <h2 className='text-2xl md:text-3xl lg:text-center'>{title}</h2>
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

                <div className='btnLinks flex flex-col flex-1 gap-4'>
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
                                />
                            </>
                        ))}
                </div> 

                <div className="relative aspect-video opacity-35 max-w-[550] mx-auto">
                    <Image
                        src={boatImg}
                        alt='Bateau'
                        fill={true}
                        objectFit='contain'
                    />  
                </div>
                
            </div>
            
            <figure className="text-img_img aspect-[4/3] relative md:aspect-video xl:aspect-[inherit]">
                <Image
                    src={process.env.NEXT_PUBLIC_API_URL + image.data.attributes.url}
                    alt={image.data.attributes.alternativeText ?? "Missing Alt"}
                    fill={true}
                    objectFit="cover"
                    className='w-full h-full' />
            </figure>
        </section>
    );
}

export default TextImage;