import { GalleryProps } from '@/interfaces/_image';
import Image from 'next/image';
import nextConfig from '../../../../next.config';

export interface GalleryImageProps {
    data: GalleryProps[];
}

const thumbSize: number = 100;

const Gallery: React.FC<GalleryImageProps> = (content: GalleryImageProps) => {
    return(
        <>
            {content.data.map((image, index) => (
                <figure key={index}>
                    <Image 
                        src={nextConfig.apiUrl + image.attributes.url} 
                        alt={image.attributes.alternativeText}
                        width={thumbSize}
                        height={thumbSize}
                        objectFit='cover'
                        objectPosition='center'
                    />
                </figure>
            ))}
        </>
    )
}

export default Gallery