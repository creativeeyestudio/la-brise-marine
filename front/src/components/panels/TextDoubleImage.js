import Image from 'next/image';

export default function TextDoubleImage() {
    return(
        <section className="text-double-img">
            <div className="text-double-img_content">
                <h2 className="text-double-img_title"></h2>
                <div className="text-double-img_text"></div>
            </div>
            
            <figure className="text-double-img_image text-double-img_image--first">
                <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"/>
            </figure>
            
            <figure className="text-double-img_image text-double-img_image--second">
                <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"/>
            </figure>
        </section>
    )
}