import Image from "next/image";
import React from 'react';
import { ImageProps } from "@/app/interfaces/_image";
import Ukiyo from "ukiyojs";

interface ParallaxProps {
    image: ImageProps
}

const Parallax: React.FC<ParallaxProps> = (content: ParallaxProps) => {
    
    new Ukiyo('.ukiyo', {
        speed: 1.5
    });

    return(
        <>
        <figure className="prx">
            <Image
                className="prx_img ukiyo"
                src={process.env. NEXT_PUBLIC_API_TOKEN + content.image.data.attributes.url}
                alt={content.image.data.attributes.alternativeText}
                fill={true}/>
        </figure>
        </>
        
    )
}

export default Parallax;