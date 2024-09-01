import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import StackedBarChartToolTip from "@/components/Charts/StackedBarChartToolTip";

export interface StackedBarChartProps {
    data: Array<any>;
    colors: any;
    XKey: string;
    barKeys: Array<string>;
    verticalCartesian?: boolean;
    horizontalCartesian?: boolean;
    horizontalPoints?: Array<number>;
    verticaPoints?: Array<number>;
    hasLegend?: boolean;
    barSize?: number | string;
}

const StackedBarChart = (props: StackedBarChartProps) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={props.data}
                barSize={props.barSize ?? ''}
                margin={{top: 0,right: 0,bottom: 0,left: 0}}
            >
                <CartesianGrid
                    stroke={"#726D6A"}
                    strokeDasharray="3 1"
                    vertical={props.verticalCartesian ?? false}
                    horizontal={props.horizontalCartesian ?? false}
                    horizontalPoints={props.horizontalPoints ?? undefined}
                    verticalPoints={props.verticaPoints ?? undefined}
                />
                <XAxis
                    dataKey={props.XKey}
                    tick={{ fontSize: 10, fill: '#726D6A', fontWeight: 'medium' }}
                />
                <YAxis
                    tick={{ fontSize: 10, fill: '#726D6A', fontWeight: 'medium' }}
                />
                <Tooltip
                    content={<StackedBarChartToolTip/>}
                    cursor={false}
                />
                {props.hasLegend && <Legend/>}
                {
                    props.barKeys.map((key, index) => (
                        <Bar
                            key={index}
                            dataKey={key}
                            stackId="a"
                            fill={props.colors[key]}
                            radius={[3, 3, 0, 0]}
                        />
                    ))
                }
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChart;