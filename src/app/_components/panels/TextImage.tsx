import Image from 'next/image';
import React from 'react';
import { ImageProps } from '@/app/interfaces/_image';
import { LinkItem } from '@/app/interfaces/page';
import ButtonLink from '../buttonLink';

interface TextImageProps {
    title: string,
    text: string,
    links: LinkItem[],
    image: ImageProps
}

const TextImage: React.FC<TextImageProps> = ({ title, text, links, image }) => {
    return(
        <section className="text-img">

            <div className="text-img_text">
                <h2>{title}</h2>
                <>
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
                </>
            </div>
            
            <figure className="text-img_img">
                <Image
                    src={process.env. NEXT_PUBLIC_API_TOKEN + image.data.attributes.url}
                    width={image.data.attributes.width}
                    height={image.data.attributes.height}
                    alt={image.data.attributes.alternativeText ?? "Missing Alt"} />
            </figure>

        </section>
    )
}

export default TextImage;