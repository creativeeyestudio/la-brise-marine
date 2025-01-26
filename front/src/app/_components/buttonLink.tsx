import {Link} from "@heroui/react";

export default function ButtonLink(primary: boolean, label: string, href: string, _external: boolean = false) {
    
    const className = primary ? 'link primary' : 'link secondary';

    return(
        <>
            <Link href={href} className={className} isExternal={_external}>
                {label}
            </Link>
        </>
    );
}