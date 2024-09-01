import React from 'react';
import {formatTodayDate} from "@/utils/timeFormatter";
import UserBalance from "@/modules/Dashboard/UserBalance";

const Page = () => {
    return (
        <div className="w-full h-full flex flex-col items-start">
            <div className="w-auto h-auto">
                <p className="text-left text-white text-xl">Good morning, {"Mike!"}</p>
                <p className="text-left text-nav-sub-menu-heading-text text-base-500 mt-1.5">{formatTodayDate()}</p>
            </div>
            <div className="mt-8">
                <UserBalance/>
            </div>

        </div>
    );
};

export default Page;