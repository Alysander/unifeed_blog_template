/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode, useState } from 'react';
import { UnifeedLogo } from './UnifeedLogo';
import hamburgerMenu from '../assets/HamburgerMenu.svg';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (

        <header className="my-4 md:my-7">
            <div className="flex justify-between flex-wrap">
                <UnifeedLogo />
                <button className="md:hidden">
                    <img src={hamburgerMenu} alt="Menu" onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }} />
                </button>
                {/* 1) Must overflow on small screens so set min-w to 100%
                    2) So that it doesn't permanently take up space on the screen, set it to 1px height when it's closed.
                    3) Scale up height when it's open and add on appropriate margin above it
                    4) Prevent it overflowing on md screens and closed state styling (extra margin, opacity, height)
                      */}
                <NavList className={"md:mt-unset min-w-full md:min-w-min " +
                    " md:opacity-100 md:scale-y-100 md:h-auto md:transition-none" +
                    " transform transition ease-in duration-200 origin-top " +
                    (
                        mobileMenuOpen ? "mt-2 opacity-100 scale-y-100 h-auto"
                            : "opacity-0 scale-y-0 h-1px ")} />

            </div>
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
                <button className="rounded-lg bg-orange hover:bg-lightOrange text-black font-semibold px-2 py-1">
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