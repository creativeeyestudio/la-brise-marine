import Image from "next/image";

export default function Parallax() {
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