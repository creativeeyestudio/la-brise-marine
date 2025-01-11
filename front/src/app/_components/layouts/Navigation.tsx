import { MenuLink } from '@/interfaces/menu';
import getMenu from '@/pages/api/menus';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface NavigationProps {
    menuId: number;
    imageNav?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({menuId, imageNav = false}) => {

    const [menuItems, setMenuItems] = useState<MenuLink[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Indicateur de chargement

    useEffect(() => {
        async function fetchMenuItems() {
            try {
                setIsLoading(true); // Active le chargement
                const menuData = await getMenu(menuId); // Appel à l'API
                const links = menuData?.data?.attributes?.menu_links?.data || [];
                setMenuItems(links); // Définit les éléments du menu
            } catch (error) {
                console.error("Error fetching menu:", error);
                setMenuItems([]); // Réinitialise les items en cas d'erreur
            } finally {
                setIsLoading(false); // Désactive le chargement
            }
        }
    
        if (menuId) {
            fetchMenuItems();
        }
    }, [menuId]);

    const imageList = imageNav ? [
        { src: '/image1.png', alt: 'First Image', width: 100, height: 100 },
        { src: '/image2.png', alt: 'Second Image', width: 100, height: 100 },
        { src: '/image3.png', alt: 'Third Image', width: 100, height: 100 },
    ] : [];

    return(
        <>
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            {item.attributes.custom_link ? (
                                <Link href={item.attributes.custom_link}>
                                    {item.attributes.label}
                                </Link>
                            ) : item.attributes.page?.data ? (
                                <Link href={`/${item.attributes.page.data.attributes.slug}`}>
                                    {item.attributes.label}
                                </Link>
                            ) : item.attributes.post?.data ? (
                                <Link href={`/blog/${item.attributes.post.data.attributes.slug}`}>
                                    {item.attributes.label}
                                </Link>
                            ) : (
                                <Link href="#">
                                    {item.attributes.label} (no link)
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
*

            {imageList.length > 0 && (
                <div className="navimages">
                    {imageList.map((image, index) => (
                        <figure key={index}>
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                        </figure>
                    ))}
                </div>
            )}
        </>
    );
}

export default Navigation;