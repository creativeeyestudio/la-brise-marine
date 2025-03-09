import { MenuItem } from '@/app/interfaces/menu';
import getMenu from '@/app/api/menus';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

interface NavigationProps {
    menuId: string
    fullNav: boolean
}

function updateImageView(target: string) {
    const images = document.querySelectorAll('.nav-image');
    images.forEach((image) => {
        image.classList.remove('opacity-100');
        image.classList.add('opacity-0');
    });

    document.querySelector(`.${target}`)?.classList.add('opacity-100');
}

const Navigation: React.FC<NavigationProps> = ({menuId, fullNav=true}) => {

    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchMenuItems() {
            try {
                setIsLoading(true); // Active le chargement
                const menuData = await getMenu(menuId); // Appel à l'API
                const items: MenuItem[] = menuData;
                setMenuItems(items); // Définit les éléments du menu
            } catch (error) {
                console.error("Error fetching menu:", error);
                setMenuItems([]); // Réinitialise les items en cas d'erreur
            } finally {
                setIsLoading(false); // Désactive le chargement
            }
        }
    
        if (menuId) {
            fetchMenuItems();
        } else {
            console.error("Menu with " + menuId + " not found !");
        }
    }, [menuId]);

    if (isLoading) {
        return <p></p>;
    }

    return fullNav ? (
        <>
            <nav className='xl:flex-1'>
                <ul>
                    {menuItems?.length > 0 ? menuItems.map((item) => (
                        <li key={item.id} onMouseEnter={() => updateImageView('image-' + item.id)} className='w-[max-content]'>
                            {item.path ? (
                                <Link href={item.path}>
                                    {item.title}
                                </Link>
                            ) : (
                                <span>{item.title}</span>
                            )}

                            {item.items?.length > 0 && (
                                <ul>
                                    {item.items.map((subItem) => (
                                        <li key={subItem.id} className='w-[max-content]'>
                                            {subItem.path ? (
                                                <Link href={subItem.path}>
                                                    {subItem.title}
                                                </Link>
                                            ) : (
                                                <span>{subItem.title}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )) : <></>}
                </ul>
            </nav>

            <div className="relative w-full xl:flex-1">
            {menuItems.length > 0 &&
                menuItems.map((image, index) => 
                    image.image?.url && (
                        <figure 
                            key={image.id}
                            className={`nav-image image-${image.id} ${index === 0 ? 'opacity-100' : 'opacity-0'} duration-700`}>
                            <Image
                                src={process.env.NEXT_PUBLIC_API_URL + image.image.url}
                                alt={image.title}
                                fill={true}
                                objectFit='cover'
                                objectPosition='center'
                            />
                        </figure>
                ))
            }
            </div>
        </>
    ) : (<></>);
}

export default Navigation;