/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode, useState } from 'react';
import { UnifeedLogo } from './UnifeedLogo';
import hamburgerMenu from '../assets/HamburgerMenu.svg';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (

        <header className="my-4 md:my-7">
            <div className="flex justify-between mb-2">
                <UnifeedLogo />
                <button className="md:hidden">
                    <img src={hamburgerMenu} alt="Menu" onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }} />
                </button>
                <NavList className="hidden md:block" />

            </div>
            <NavList className={"md:hidden transform transition  ease-in duration-200 origin-top " + (
                mobileMenuOpen ? "opacity-100 scale-y-100 h-auto"
                    : "opacity-0 scale-y-0 h-1px ")} />
        </header>
    )
}

const NavList = ({ className }: { className: string }) => (
    <nav className={className}>
        <ul className="flex flex-col gap-2 bg-white md:flex-row text-l text-mediumGray">
            <ListLink>Home</ListLink>
            <ListLink>Features</ListLink>
            <ListLink>Pricing</ListLink>
            <ListLink>
                <button className="rounded-lg bg-orange text-black font-semibold px-2 py-1">
                    Subscribe
                </button>
            </ListLink>
        </ul>
    </nav >
)
const ListLink = ({ children }: { children: ReactNode }) => (
    <a href="#" className="self-center hover:text-orange">
        <li>{children}</li>
    </a>
)
export { Header }