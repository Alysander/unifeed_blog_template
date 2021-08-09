import React from "react";
import { Copyright } from "./Copyright";
import { UnifeedLogo } from "./UnifeedLogo";

const Footer = () => (
    /*
        For mobile everything is a block.
        For tablet and up, logo is on the left and copyright is on the right
    */
    <div className="md:flex md:items-center	md:my-7">
        <UnifeedLogo />
        <div className="md:flex-grow" />
        <Copyright />
    </div>
);

export { Footer }