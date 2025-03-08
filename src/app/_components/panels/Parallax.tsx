import Image from "next/image";
import { ImageProps } from "@/app/interfaces/_image";
import Ukiyo from "ukiyojs";
import { useEffect } from "react";

interface ParallaxProps {
    image: ImageProps
    speed: number
}

const Parallax: React.FC<ParallaxProps> = (content: ParallaxProps) => {

    useEffect(() => {
        if (window.innerWidth >= 1280) {
            new Ukiyo('.prx_img', {
                speed: content.speed ?? 1.5
            });
        }
    }, [content.speed])

    if (typeof window !== "undefined" && window.innerWidth < 1280) return (<></>);

    return(
        <>
            <figure className="prx h-[70vh] overflow-hidden relative">
                <Image
                    className="prx_img"
                    src={process.env.NEXT_PUBLIC_API_URL + content.image.data.attributes.url}
                    alt={content.image.data.attributes.alternativeText}
                    fill={true}/>
            </figure>
        </>
    )
}

export default Parallax;