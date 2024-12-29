import Image from "next/image";
import React from 'react';
import nextConfig from "../../../../next.config";

interface ParallaxProps {
    image: ImageProps
}

const Parallax: React.FC<ParallaxProps> = (content: ParallaxProps) => {
    return(
        <figure className="parallax">
            <Image
                className="parallax_img"
                src={nextConfig.apiUrl + content.image.data.attributes.url}
                alt={content.image.data.attributes.alternativeText}
                fill={true}/>
        </figure>
    )
}

export default Parallax;