import Link from 'next/link';

interface ButtonLinkProps {
    primary: boolean;
    label: string;
    href: string;
    external?: boolean;
    classes?: string;
}

export default function ButtonLink({ primary, label, href, external, classes }: ButtonLinkProps) {
    const className = 'uppercase ';
    const classNameLink =  primary ? 'link link--primary ' : 'link link--secondary ';

    return external ? (
        <a href={href} className={className + classNameLink + classes} target="_blank" rel="noopener noreferrer">
            {label}
        </a>
    ) : (
        <Link href={href} className={className + classNameLink + classes}>{label}</Link>
    );
}
