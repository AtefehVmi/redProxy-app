'use client'
import React from 'react';
import {formatBytes} from "@/utils/converter";
import CustomCard from "@/components/CustomCard/customCard";
import Image from "next/image";
import ConfigCardButton from "@/components/CustomButton/ConfigCardButton";

import copyIcon from '@public/icons/copy.svg'
import trashIcon from '@public/icons/trash.svg'
import AreaLineChart from "@/components/Charts/AreaLineChart";

interface ResidentialConfigCardProps {
    configName: string;
    dataUsed: number;
    dataUsage: {month: string, usage: number}[];
    portType: string;
    rotation: string;
    geoLocation: string;
    quantityGenerated: number;
    format: string;
    port: number;
    username: string;
    password: string;
}

const ResidentialConfigCard = (props: ResidentialConfigCardProps) => {


    const copyConfigItems = (propName: string) => {

    }


    const containerStyle = "w-auto h-auto flex flex-col items-start gap-[7px]"
    const headingStyle = "text-xs font-medium text-config-card-heading-text"
    const valueStyle = "text-sm font-semibold text-white"

    return (
        <CustomCard
            borderRadius={"rounded"}
            borderClassName={"w-full h-auto"}
            containerClassName="grid grid-cols-5 px-4 py-[19px] gap-x-[67px] !gap-y-2.5"
        >
            {/*col 1*/}
            <div className="col-span-1 grid grid-cols-3 grid-rows-3">
                <p className="col-span-3 row-span-1 mb-[13px] text-white text-base font-semibold">{props.configName}</p>
                <div className="col-span-1 row-span-2 grid grid-cols-1 grid-rows-2 gap-y-[7px]">
                    <p className="col-span-1 row-span-1 self-end text-xs text-profile-card-text font-medium">DATA
                        USED</p>
                    <p className="col-span-1 row-span-2 text-2xl text-white font-semibold">{formatBytes(props.dataUsed)}</p>
                </div>
                <div className="col-span-2 row-span-2">
                    <AreaLineChart data={props.dataUsage}/>
                </div>
            </div>
            {/*col 2*/}
            <div className="col-span-3 grid grid-cols-4 grid-rows-2 gap-[13px] items-center">
                <div className={containerStyle}>
                    <p className={headingStyle}>PORT TYPE</p>
                    <p className={valueStyle}>{props.portType}</p>
                </div>
                <div className={containerStyle}>
                    <p className={headingStyle}>GEO LOCATION</p>
                    <p className={valueStyle}>{props.geoLocation}</p>
                </div>
                <div className={containerStyle}>
                    <p className={headingStyle}>FORMAT</p>
                    <p className={valueStyle}>{props.format}</p>
                </div>
                <div className={containerStyle}>
                    <p className={headingStyle}>USERNAME</p>
                    <div className="flex items-center gap-[3px]">
                        <p className={valueStyle}>{props.username}</p>
                        <Image
                            src={copyIcon}
                            alt={''}
                            className="w-4 h-4 cursor-pointer transition-all duration-300 active:scale-90"
                            onClick={() => {
                                copyConfigItems('USERNAME')
                            }}
                        />
                    </div>
                </div>
                <div className={containerStyle}>
                    <p className={headingStyle}>ROTATION</p>
                    <p className={valueStyle}>{props.rotation}</p>
                </div>
                <div className={containerStyle}>
                    <p className={headingStyle}>QUANTITY GENERATED</p>
                    <p className={valueStyle}>{props.quantityGenerated}</p>
                </div>
                <div className={containerStyle}>
                    <p className={headingStyle}>PORT</p>
                    <div className="flex items-center gap-[3px]">
                        <p className={valueStyle}>{props.port}</p>
                        <Image
                            src={copyIcon}
                            alt={''}
                            className="w-4 h-4 cursor-pointer transition-all duration-300 active:scale-90"
                            onClick={() => {
                                copyConfigItems('PORT')
                            }}
                        />
                    </div>
                </div>
                <div className={containerStyle}>
                    <p className={headingStyle}>PASSWORD</p>
                    <div className="flex items-center gap-[3px]">
                        <p className={valueStyle}>{props.password}</p>
                        <Image
                            src={copyIcon}
                            alt={''}
                            className="w-4 h-4 cursor-pointer transition-all duration-300 active:scale-90"
                            onClick={() => {
                                copyConfigItems('PASSWORD')
                            }}
                        />
                    </div>
                </div>
            </div>
            {/*col 3*/}
            <div className="col-span-1 flex flex-col justify-center items-end gap-2.5">
                <ConfigCardButton>
                    <Image src={copyIcon} alt={''} className="w-4 h-4"/>
                    <p className="text-xs font-medium text-white">Copy all lines</p>
                </ConfigCardButton>
                <ConfigCardButton>
                    <Image src={trashIcon} alt={''} className="w-4 h-4"/>
                    <p className="text-xs font-medium text-white">Delete configuration</p>
                </ConfigCardButton>
            </div>
        </CustomCard>
    );
};

export default ResidentialConfigCard;