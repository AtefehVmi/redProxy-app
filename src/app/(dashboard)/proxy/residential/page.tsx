import React from 'react';
import CustomLink from "@/components/CustomLink/customLink";
import Image from "next/image";
import ResidentialConfigCard from "@/modules/Residential/ResidentialConfigCard";

import rawArrowRightIcon from "@public/icons/raw_arrow_right.svg"

const CHART_DATA = [
    {
        month: 'Page A',
        usage: 2400,

    },
    {
        month: 'Page B',
        usage: 1398,
    },
    {
        month: 'Page C',
        usage: 3800,
    },
    {
        month: 'Page D',
        usage: 3908,
    },
    {
        month: 'Page E',
        usage: 4800,
    },
    {
        month: 'Page F',
        usage: 3800,
    },
    {
        month: 'Page G',
        usage: 4300,
    },
];

const Page = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full flex justify-between items-center">
                <div
                    className="flex flex-col items-start gap-1.5"
                >
                    <p className="text-xl font-semibold text-white">Your configurations</p>
                    <p className="text-sm font-medium text-nav-sub-menu-heading-text">You have 2 active configurations</p>
                </div>
                <CustomLink href={''} className="py-2 pl-[15px] pr-2.5">
                    <p>Create new</p>
                    <Image src={rawArrowRightIcon} alt={''} className="w-4 h-4"/>
                </CustomLink>
            </div>
            <div className="w-full h-auto mt-[30px]">
                <ResidentialConfigCard
                    configName={"Residential for reddit"}
                    dataUsed={4920000000}
                    dataUsage={CHART_DATA}
                    portType={"SOCKS5"}
                    geoLocation={"Germany"}
                    format={"hostname:port:username:password"}
                    username={"elixrgfx@protonmail.com"}
                    rotation={"Sticky"}
                    quantityGenerated={720}
                    port={6608}
                    password={"prrrrrjhhkjdsfiued"}
                />
            </div>
        </div>
    );
};

export default Page;