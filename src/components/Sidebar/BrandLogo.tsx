import React from 'react';
import Image from "next/image";
import logo from '@public/icons/logo.svg'

const BrandLogo = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center gap-[7px]">
            <Image src={logo} alt={'mopodata.io'} className="w-6 h-6" />
            <p className="text-white text-left text-lg">
                mopodata.io
            </p>
        </div>
    );
};

export default BrandLogo;