import React from 'react';
import { UnifeedLogo } from './UnifeedLogo';

const LogoBar = ({ children }: { children?: React.ReactNode }) => (

    <header className="flex justify-between my-4 md:my-7">
        <UnifeedLogo />
        <div>
            {children}
        </div>
    </header>

)


export { LogoBar }