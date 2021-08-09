import React from 'react';
import logo from '../assets/Logo.svg'


const LogoBar = ({ children }: { children?: React.ReactNode }) => (

    <div className="flex">
        <img src={logo} alt="Unifeed logo" className="flex-initial" />
        <div className="flex-1" />
        <div className="flex-initial">
            {children}
        </div>
    </div>

)


export { LogoBar }