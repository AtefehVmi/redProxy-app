import React from 'react';
import {formatTodayDate} from "@/utils/timeFormatter";
import UserBalance from "@/modules/Dashboard/UserBalance";
import UserDataUsage from "@/modules/Dashboard/UserDataUsage";
import UserInvoices from "@/modules/Dashboard/UserInvoices";

const Page = () => {
    return (
        <div className="w-full h-full flex flex-col items-start">
            <div className="w-auto h-auto">
                <p className="text-left text-white text-xl">Good morning, {"Mike!"}</p>
                <p className="text-left text-nav-sub-menu-heading-text text-base-500 mt-1.5">{formatTodayDate()}</p>
            </div>
            <div className="w-full h-auto mt-8 flex justify-between items-center gap-4">
                <UserBalance/>
                <UserDataUsage/>
            </div>
            <div className="w-full h-auto mt-4">
                <UserInvoices/>
            </div>

        </div>
    );
};

export default Page;