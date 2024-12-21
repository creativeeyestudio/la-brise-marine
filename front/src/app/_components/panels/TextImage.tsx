import Image from 'next/image';
import React from 'react';

interface TextImageProps {
    title: string,
    content: string,
    image: {
        src: string,
        width: number,
        height: number,
        alt: string
    }
}

const TextImage: React.FC<TextImageProps> = (content: TextImageProps) => {
    return(
        <section className="text-img">

            <div className="text-img_text">
                <h2>{content.title}</h2>
                <>
                {content.content}
                </>
            </div>
            
            <figure className="text-img_img">
                <Image
                    src={content.image.src}
                    width={content.image.width}
                    height={content.image.height}
                    alt={content.image.alt} />
            </figure>

        </section>
    )
}

export default TextImage;