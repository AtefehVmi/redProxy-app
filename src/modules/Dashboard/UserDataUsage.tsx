'use client'
import React from 'react';
import CustomCard from "@/components/CustomCard/customCard";
import Image from "next/image";
import growUpIcon from "@public/icons/growup.svg"
import CustomSelect from "@/components/CustomSelect/CustomSelect";

const UserDataUsage = () => {
    function onChartFilterChange() {

    }

    return (
        <CustomCard
            borderRadius={"rounded"}
            borderClassName="
                w-[78%] h-[364px] p-[1.75px]
            "
            containerClassName="
                px-4 pt-[18px] pb-5
            "
        >
            <div className="flex justify-between items-center">
                {/*col1*/}
                <div className="flex flex-col items-start">
                    <p className="text-white text-left text-lg">Data usage</p>
                    <p className="text-profile-card-text text-sm mt-[23px]">TOTAL DATA</p>
                    <div className="flex justify-center items-center gap-2 mt-[11px]">
                        <p className="text-white text-left text-2xl">
                            786.34 GB
                        </p>
                        <CustomCard
                            borderRadius={"rounded"}
                            borderClassName="
                                w-[63px] h-[26px] p-px
                            "
                            containerClassName="flex justify-center items-center gap-px"
                        >
                            <Image src={growUpIcon} alt={''} className="w-[13px] h-4"/>
                            <p className="text-profile-card-text text-sm">
                                {"9.54"}%
                            </p>
                        </CustomCard>
                    </div>
                </div>
                {/*col2*/}
                <div className="flex flex-col justify-start items-end">
                    <CustomSelect
                        options={[
                            {label: "Last 12 months", value: "year"},
                            {label: "Last 30 days", value: "month"},
                            {label: "Last 7 days", value: "week"},
                        ]}
                        defaultValue={"week"}
                        onChange={onChartFilterChange}
                        className="w-[119px] h-26px"
                    />
                    <p className="text-profile-card-text text-sm mt-[45px]">
                        January 2024 - December 2024
                    </p>
                </div>
            </div>
        </CustomCard>
    );
};

export default UserDataUsage;