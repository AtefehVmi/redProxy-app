import React from 'react';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

export interface PaddingPieChartProps {
    data: Array<any>,
    colors: Array<string>
    cx: string | number,
    cy: string | number,
    innerRadius: number,
    outerRadius: number,
}


const PaddingPieChart = (props: PaddingPieChartProps) => {
    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart>
                <Pie
                    data={props.data}
                    cx={props.cx}
                    cy={props.cy}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={props.innerRadius}
                    outerRadius={props.outerRadius}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {props.data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={props.colors[index % props.colors.length]}
                              stroke={"none"}/>
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PaddingPieChart;