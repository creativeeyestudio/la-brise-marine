import React from 'react';
// import Navigation from './Navigation';

import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";

const Footer: React.FC = () => {
    return(
        <footer className='bg-grey-dark'>
            {/*<div className='border-b-secondary border-b-2 p-sm-px md:p-md-px lg:p-lg-px'>
                <Navigation menuId='footer-navigation' />
            </div>*/}
            <div className='flex flex-col p-sm-px gap-sm md:p-md-px md:gap-md lg:px-lg lg:gap-lg lg:flex lg:flex-row lg:justify-between lg:items-end'>
                <div className="social flex gap-sm-px md:gap-md-px">
                    <a className='size-9 lg:size-12 text-secondary'>
                        <FaInstagram className='size-full' />
                    </a>
                    <a className='size-9 lg:size-12 text-secondary'>
                        <FaFacebookF className='size-full' />
                    </a>
                    <a className='size-9 lg:size-12 text-secondary'>
                        <FaTripadvisor className='size-full' />
                    </a>
                </div>
                <div className='newsletter-sign lg:text-end'>
                    <button className='px-9 py-3 bg-secondary'>S&apos;inscrire à la newsletter</button>
                    <p className='text-xs mt-sm text-secondary font-light md:mt-sm'>
                        Mentions légales - Confidentialité - Cookies<br />
                        Marketing digital : SiteMinder | Conception et développement : Creative Eye Studio
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;