import Image from 'next/image';
import React from 'react';
import nextConfig from '../../../../next.config';

interface TextImageProps {
    title: string,
    content: string,
    image: ImageProps
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
                    src={nextConfig.apiUrl + content.image.data.attributes.url}
                    width={content.image.data.attributes.width}
                    height={content.image.data.attributes.height}
                    alt={content.image.data.attributes.alternativeText} />
            </figure>

        </section>
    )
}

export default TextImage;