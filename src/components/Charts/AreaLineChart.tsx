import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const AreaLineChart = ({ data, color }: { data: any[]; color: string }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="customColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="usage"
          stroke={color}
          fill="url(#customColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaLineChart;
