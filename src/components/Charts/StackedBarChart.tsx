import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        month: 'Page A',
        residential: 4000,
        mobile: 2400,
        datacenter: 2400,
    },
    {
        month: 'Page B',
        residential: 3000,
        mobile: 1398,
        datacenter: 2210,
    },
    {
        month: 'Page C',
        residential: 2000,
        mobile: 9800,
        datacenter: 2290,
    },
    {
        month: 'Page D',
        residential: 2780,
        mobile: 3908,
        datacenter: 2000,
    },
    {
        month: 'Page E',
        residential: 1890,
        mobile: 4800,
        datacenter: 2181,
    },
    {
        month: 'Page F',
        residential: 2390,
        mobile: 3800,
        datacenter: 2500,
    },
    {
        month: 'Page G',
        residential: 3490,
        mobile: 4300,
        datacenter: 2100,
    },
];

const StackedBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                // width={500}
                // height={300}
                data={data}
                // margin={{
                //     top: 20,
                //     right: 30,
                //     left: 20,
                //     bottom: 5,
                // }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="mobile" stackId="a" fill="#8884d8" />
                <Bar dataKey="residential" stackId="a" fill="#82ca9d" />
                <Bar dataKey="residential" stackId="a" fill="#f8f8f8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChart;