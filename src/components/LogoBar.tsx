import React from 'react';
import { UnifeedLogo } from './UnifeedLogo';

const LogoBar = ({ children }: { children?: React.ReactNode }) => (

    <div className="flex my-4 md:my-7">
        <UnifeedLogo />
        <div className="flex-1" />
        <div className="flex-initial">
            {children}
        </div>
    </div>

)


export { LogoBar }