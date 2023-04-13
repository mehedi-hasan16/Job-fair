import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

const data = [
  {
    id: 1,
    name: 'Assignment 1',
    marks: 60,
  },
  {
    id: 2,
    name: 'Assignment 2',
    marks: 60,
  },
  {
    id: 3,
    name: 'Assignment 3',
    marks: 57,
  },
  {
    id: 4,
    name: 'Assignment 4',
    marks: 60,
  },
  {
    id: 5,
    name: 'Assignment 5',
    marks: 60,
  },
  {
    id: 6,
    name: 'Assignment 6',
    marks: 60,
  },
  {
    id: 7,
    name: 'Assignment 7',
    marks: 60,
  },
];

export default function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
    <ComposedChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="name"
        label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
        scale="band"
      />
      <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="marks" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="marks" stroke="#ff7300" />
    </ComposedChart>
    </div>
  );
}
