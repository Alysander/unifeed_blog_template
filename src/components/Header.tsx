import React from 'react';
import { UnifeedLogo } from './UnifeedLogo';

const Header = ({ children }: { children?: React.ReactNode }) => (

    <header className="flex justify-between my-4 md:my-7">
        <UnifeedLogo />
        <div>
            {children}
        </div>
    </header>

)


export { Header }