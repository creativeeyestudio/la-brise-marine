import {Link} from "@heroui/react";
import { useRouter } from "next/router";

interface ButtonLinkProps {
    primary: boolean
    label: string
    href: string
    external?: boolean
}

export default function ButtonLink({ primary, label, href, external }: ButtonLinkProps) {
    const { locale } = useRouter();
    const className = primary ? 'link primary' : 'link secondary';
    const linkHref = !external ? `/${locale}/${href}` : href;

    return(
        <>
            <Link href={linkHref} className={className} isExternal={external}>{label}</Link>
        </>
    );
}
