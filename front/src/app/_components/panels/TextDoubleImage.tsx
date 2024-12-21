import Image from 'next/image';
import React from 'react';

interface TextDoubleImageProps {
    title: string,
    content: string,
    image1: {
        src: string,
        width: number,
        height: number,
        alt: string
    },
    image2: {
        src: string,
        width: number,
        height: number,
        alt: string
    }
}

const TextDoubleImage: React.FC<TextDoubleImageProps> = (content: TextDoubleImageProps) => {
    return(
        <section className="text-double-img">
            <div className="text-double-img_content">
                <h2 className="text-double-img_title">{content.title}</h2>
                <>
                    {content.title}
                </>
            </div>
            
            <figure className="text-double-img_image text-double-img_image--first">
                <Image
                    src={content.image1.src}
                    width={content.image1.width}
                    height={content.image1.height}
                    alt={content.image1.alt}/>
            </figure>
            
            <figure className="text-double-img_image text-double-img_image--second">
                <Image
                    src={content.image2.src}
                    width={content.image2.width}
                    height={content.image2.height}
                    alt={content.image2.alt}/>
            </figure>
        </section>
    )
}

export default TextDoubleImage;