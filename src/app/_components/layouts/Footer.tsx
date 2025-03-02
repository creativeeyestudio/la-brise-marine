import React from 'react';
import Navigation from './Navigation';


const Footer: React.FC = () => {
    return(
        <footer className='bg-grey-dark'>
            <div className='p-xs-px border-b-secondary border-b-2'>
                <Navigation menuId='footer-navigation' />
            </div>
            <div className='p-xs-px flex flex-col gap-xs'>
                <div className="social flex gap-xs-px">
                    <a className='size-12'></a>
                    <a className='size-12'></a>
                    <a className='size-12'></a>
                </div>
                <div className='newsletter-sign'>
                    <button className='px-9 py-3 bg-secondary'>S&apos;inscrire à la newsletter</button>
                    <p className='text-xs mt-xs text-secondary font-body'>
                        Mentions légales - Confidentialité - Cookies<br />
                        Marketing digital : SiteMinder | Conception et développement : Creative Eye Studio
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;