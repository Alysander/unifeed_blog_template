import React from 'react';
import logo from '../assets/Logo.svg'


const LogoBar = ({ children }: { children?: React.ReactNode }) => (

    <div>
        <img src={logo} alt="Unifeed logo" />
        {children}
    </div>

)


export { LogoBar }