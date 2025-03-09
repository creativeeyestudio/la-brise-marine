import React from 'react';
import Navigation from './Navigation';

const Header: React.FC<{secondary_page: boolean}> = ({ secondary_page }) => {
    
    const baseClasses = 'w-full h-24 bg-primary flex justify-between items-center fixed z-50 p-4 xl:p-0';
    const classes = `${baseClasses} ${secondary_page ? "secondary-page " : ""}`.trim();

    function openNav(classTarget: string) {
        document.querySelector(classTarget)?.classList.toggle('open');
    }

    return(
        <>
        <header className={classes}>
            <button className='toggle-nav hidden md:flex flex-col justify-between w-10 h-6 xl:ms-lg-px' onClick={() => openNav('.menu--primary')}>
                <span className='w-full bg-secondary h-0.5'></span>
                <span className='w-full bg-secondary h-0.5'></span>
                <span className='w-full bg-secondary h-0.5'></span>
            </button>

            <figure className='bg-black opacity-40 w-full h-full md:w-80 md:h-4/6 md:absolute md:left-40 xl:left-1/2 xl:-translate-x-1/2'></figure>

            <button className="hidden bg-tertiary h-full px-12 md:block" onClick={() => openNav('.menu--secondary')}>
                <span className='uppercase'>Réserver et offrir</span>
            </button>
        </header>
        </>
    );
}

export default Header;