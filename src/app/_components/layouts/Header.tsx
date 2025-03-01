import React from 'react';
import Navigation from './Navigation';

const Header: React.FC<{secondary_page: boolean}> = ({ secondary_page }) => {
    
    const baseClasses = 'w-full h-24 bg-primary flex justify-between items-center absolute p-4 xl:p-0';
    const classes = `${baseClasses} ${secondary_page ? "secondary-page " : ""}`.trim();

    return(
        <>
        <header className={classes}>
            <button className='toggle-nav hidden md:flex flex-col justify-between w-10 h-6 xl:ms-lg-py'>
                <span className='w-full bg-secondary h-0.5'></span>
                <span className='w-full bg-secondary h-0.5'></span>
                <span className='w-full bg-secondary h-0.5'></span>
            </button>

            <figure className='bg-black opacity-40 w-full h-full md:w-80 md:h-4/6 md:absolute md:left-40 xl:left-1/2 xl:-translate-x-1/2'></figure>

            <button className="hidden bg-secondary h-full px-12 md:block">
                <span className='uppercase'>Réserver et offrir</span>
            </button>
        </header>
        <Navigation menuId={'main-navigation'} />
        </>
    );
}

export default Header;