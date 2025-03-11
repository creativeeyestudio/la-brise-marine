import React from 'react';

const Header: React.FC<{secondary_page: boolean}> = ({ secondary_page }) => {
    
    const baseClasses = 'header w-full h-24 bg-primary flex justify-between items-center fixed z-50 p-4 xl:p-0';
    const classes = `${baseClasses} ${secondary_page ? "secondary-page " : ""}`.trim();

    function toggleNav(classTarget: string) {
        const menus = document.querySelectorAll('.menu--primary, .menu--secondary');
    
        document.querySelector(classTarget)?.classList.toggle('open');
    
        menus.forEach(menu => {
            if (!menu.matches(classTarget)) {
                menu.classList.remove('open');
            }
        });
    }
    
    return(
        <>
        <header className={classes}>
            <button className='main-nav' onClick={() => toggleNav('.menu--primary')}>
                <span className='bar origin-right'></span>
                <span className='bar origin-left'></span>
                <span className='bar origin-right'></span>
            </button>

            <figure className='bg-black opacity-40 w-full h-full md:w-80 md:h-4/6 md:absolute md:left-40 xl:left-1/2 xl:-translate-x-1/2'></figure>

            <button className="hidden bg-tertiary h-full px-12 md:block" onClick={() => toggleNav('.menu--secondary')}>
                <span className='uppercase'>Réserver et offrir</span>
            </button>
        </header>
        </>
    );
}

export default Header;