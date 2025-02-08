import Link from 'next/link';

interface ButtonLinkProps {
    primary: boolean;
    label: string;
    href: string;
    external?: boolean;
}

export default function ButtonLink({ primary, label, href, external }: ButtonLinkProps) {
    const className = primary ? 'link primary' : 'link secondary';

    return external ? (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
            {label}
        </a>
    ) : (
        <Link href={href} className={className}>{label}</Link>
    );
}
