/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { UnifeedLogo } from './UnifeedLogo';
import hamburgerMenu from '../assets/HamburgerMenu.svg';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (

        <header className="my-4 md:my-7">
            <div className="flex justify-between mb-2">
                <UnifeedLogo />
                <button>
                    <img src={hamburgerMenu} alt="Menu" onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }} />
                </button>
            </div>
            <nav className={"text-l text-mediumGray transform transition duration-200 ease-in " + (
                mobileMenuOpen ? "opacity-100 transform scale-y-1 origin-top h-auto"
                    : "opacity-0 scale-y-0 origin-top  h-1px ")}>
                <ul className="flex flex-col gap-1 bg-white">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>Features</li>
                    </a>
                    <a href="#">
                        <li>Pricing</li>
                    </a>
                    <a>
                        <button className="rounded-lg bg-orange text-black font-semibold p-1">
                            Subscribe
                        </button>
                    </a>

                </ul>
            </nav>

        </header>

    )
}


export { Header }