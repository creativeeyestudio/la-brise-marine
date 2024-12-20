import Image from "next/image";
import React from 'react';

const Parallax: React.FC = () => {
    return(
        <figure className="parallax">
            <Image
                className="parallax_img"
                src="/profile.png"
                width={500}
                height={500}
                alt="Picture of the author"/>
        </figure>
    )
}

export default Parallax;