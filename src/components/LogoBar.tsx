import React from 'react';
import { UnifeedLogo } from './UnifeedLogo';

const LogoBar = ({ children }: { children?: React.ReactNode }) => (

    <div className="flex">
        <UnifeedLogo />
        <div className="flex-1" />
        <div className="flex-initial">
            {children}
        </div>
    </div>

)


export { LogoBar }