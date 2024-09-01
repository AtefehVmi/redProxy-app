'use client'
import React, {useEffect, useState} from 'react';
import CustomCard from "@/components/customCard/customCard";
import {formatBytes} from "@/utils/converter";
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

const CHART_DATA = [
    {name: "RESIDENTIAL", value: 400},
    {name: "MOBILE", value: 100},
    {name: "DATACENTER", value: 130},
];

const COLORS = ["#2ECB6D", "#2ECB6D80", "#2ECB6D33"]
const UserBalance = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    return (
        <CustomCard
            borderRadius={"rounded"}
            borderClassName="
                w-[344px] h-[364px] p-[1.75px]
            "
            containerClassName="px-4 py-[18px] flex flex-col items-start"
        >
            <p className="text-white text-lg">Your balance</p>
            <div className="w-[258px] h-[129px] mt-6 self-center relative">
                {mounted ?
                    <>
                        <ResponsiveContainer width={"100%"} height={"100%"}>
                            <PieChart>
                                <Pie
                                    data={CHART_DATA}
                                    cx={"50%"}
                                    cy={"100%"}
                                    startAngle={180}
                                    endAngle={0}
                                    innerRadius={79}
                                    outerRadius={119}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    width={"100%"}
                                >
                                    {CHART_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}
                                              stroke={"none"}/>
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <p className="absolute left-1/2 top-2/3 transform -translate-x-1/2 ">
                            <span className="text-white text-3xl">12.68</span>
                            &nbsp;
                            <span className="text-nav-sub-menu-heading-text text-base-600">GB</span>
                        </p>
                    </>: null
                }
            </div>
            <div className="flex flex-col items-center mt-[34px] gap-2">
                <ProxyUsageCard proxyType={"RESIDENTIAL"} proxyName={"Residential Proxies"} balance={9.67e+9}/>
                <ProxyUsageCard proxyType={"MOBILE"} proxyName={"Residential Proxies"} balance={182350000}/>
                <ProxyUsageCard proxyType={"DATACENTER"} proxyName={"Residential Proxies"} balance={192}/>
            </div>
        </CustomCard>
    );
};

export default UserBalance;

interface ProxyUsageCardProps {
    proxyType: "RESIDENTIAL" | "MOBILE" | "DATACENTER",
    proxyName: string,
    balance: number,
}

const ProxyUsageCard = (props: ProxyUsageCardProps) => {

    let proxyColor = "";
    switch (props.proxyType) {
        case "RESIDENTIAL":
            proxyColor = "bg-proxy-color";
            break;
        case "MOBILE":
            proxyColor = "bg-proxy-color/50";
            break;
        case "DATACENTER":
            proxyColor = "bg-proxy-color/20";
            break;
        default:
            proxyColor = "bg-proxy-color";
            break;
    }

    return (
        <CustomCard
            borderRadius={"rounded-[2px]"}
            borderClassName="
                w-[312px] h-[35px] p-px
            "
            containerClassName="
                flex items-center py-2.5 px-3.5 !shadow-nav-link !bg-[#1B1F21]
            "
        >
            <div className={`w-1.5 h-1.5 rounded-[1px] ${proxyColor}`}/>
            <p className="text-left text-profile-card-text text-sm ml-[7px]">{props.proxyName}</p>
            <p className="text-left text-white text-sm ml-auto">
                {props.proxyType === "DATACENTER" ? `${props.balance}IPs` : formatBytes(props.balance)}
            </p>
        </CustomCard>
    )
}