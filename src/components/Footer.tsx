import React from "react";
import { Copyright } from "./Copyright";
import { UnifeedLogo } from "./UnifeedLogo";

const Footer = () => (
    /*
        For mobile everything is a block.
        For tablet and up, logo is on the left and copyright is on the right
    */
    <footer className="md:flex md:items-center md:justify-between md:my-7">
        <UnifeedLogo />
        <Copyright />
    </footer>
);

export { Footer }