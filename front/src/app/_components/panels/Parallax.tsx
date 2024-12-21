import Image from "next/image";
import React from 'react';

interface ParallaxProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const Parallax: React.FC<ParallaxProps> = (image: ParallaxProps) => {
    return(
        <figure className="parallax">
            <Image
                className="parallax_img"
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}/>
        </figure>
    )
}

export default Parallax;