import React from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip} from "recharts";


const AreaLineChart = ({data}:{data: any[]}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="customColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2ECB6D" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2ECB6D" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <Tooltip />
                <Area type="monotone" dataKey="usage" stroke="#2ECB6D" fill="url(#customColor)" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaLineChart;