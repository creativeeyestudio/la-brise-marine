import Image from 'next/image';

export default function TextImage() {
    return(
        <section className="text-img">

            <div className="text-img_text">
                <h2></h2>
                <div></div>
            </div>
            
            <figure className="text-img_img">
                <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author" />
            </figure>

        </section>
    )
}