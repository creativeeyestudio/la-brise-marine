import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NavigationProps {
    imageNav?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({imageNav = false}) => {
    const imageList = imageNav ? [
        { src: '/image1.png', alt: 'First Image' },
        { src: '/image2.png', alt: 'Second Image' },
        { src: '/image3.png', alt: 'Third Image' },
    ] : [];

    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link href={""}></Link>
                    </li>
                </ul>
            </nav>

            {imageList.length > 0 && (
                <div className="navimages">
                    {imageList.map((image, index) => (
                        <figure key={index}>
                            <Image src="" alt="" width={100} height={100} />
                        </figure>
                    ))}
                </div>
            )}
        </>
    );
}

export default Navigation;