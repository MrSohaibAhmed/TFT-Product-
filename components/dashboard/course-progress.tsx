"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "CS101",
    progress: 80,
  },
  {
    name: "MATH202",
    progress: 65,
  },
  {
    name: "PHY303",
    progress: 90,
  },
  {
    name: "ENG104",
    progress: 75,
  },
  {
    name: "HIS205",
    progress: 55,
  },
  {
    name: "ART106",
    progress: 85,
  },
];

export default function CourseProgress() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
          formatter={(value: number) => [`${value}%`, "Progress"]}
          cursor={{ fill: "transparent" }}
        />
        <Bar 
          dataKey="progress" 
          fill="hsl(var(--chart-1))" 
          radius={[4, 4, 0, 0]} 
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}