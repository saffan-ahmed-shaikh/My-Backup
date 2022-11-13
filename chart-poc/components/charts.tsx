import { Box } from "@chakra-ui/react";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "Nov'21",
//     Liability: -4000,
//     Assets: 2400,
//     uv: 2400,
//   },
//   {
//     name: "Dec’ 22",
//     Liability: -3000,
//     Assets: 3800,
//     uv: 2210,
//   },
//   {
//     name: "Jan’ 22",
//     Liability: -2000,
//     Assets: 9800,
//     uv: 8290,
//   },
//   {
//     name: "Feb'22",
//     Liability: -2700,
//     Assets: 3800,
//     uv: 2000,
//   },
//   {
//     name: "Mar'22",
//     Liability: -1800,
//     Assets: 4000,
//     uv: 2181,
//   },
//   {
//     name: "Apr’ 22",
//     Liability: -2000,
//     Assets: 3000,
//     uv: 2500,
//   },
// ];
const data = [
  {
    date: "10/02/2022",
    asset: 100,
    liability: 0,
    netWorth: 100,
  },
  {
    date: "10/03/2022",
    asset: 110,
    liability: 0,
    netWorth: 110,
  },
  {
    date: "10/04/2022",
    asset: 200,
    liability: 100,
    netWorth: 100,
  },
  {
    date: "10/05/2022",
    asset: 400,
    liability: 100,
    netWorth: 300,
  },
  {
    date: "10/06/2022",
    asset: 1000,
    liability: 100,
    netWorth: 900,
  },
  {
    date: "10/07/2022",
    asset: 1000,
    liability: 0,
    netWorth: 1000,
  },
  {
    date: "10/08/2022",
    asset: 1000,
    liability: 0,
    netWorth: 1000,
  },
  {
    date: "10/09/2022",
    asset: 1000,
    liability: 0,
    netWorth: 1000,
  },
  {
    date: "10/10/2022",
    asset: 1000,
    liability: 0,
    netWorth: 1000,
  },
  {
    date: "10/11/2022",
    asset: 1000,
    liability: 0,
    netWorth: 1000,
  },
  {
    date: "10/12/2022",
    asset: 1000,
    liability: 0,
    netWorth: 1000,
  },
  {
    date: "10/13/2022",
    asset: 1000,
    liability: 0,
    netWorth: 1000,
  },
  {
    date: "10/14/2022",
    asset: 1000,
    liability: 0,
    netWorth: 1000,
  },
  {
    date: "10/15/2022",
    asset: 1000,
    liability: 0,
    netWorth: 1000,
  },
  {
    date: "10/16/2022",
    asset: 1000,
    liability: 500,
    netWorth: 500,
  },
  {
    date: "10/17/2022",
    asset: 1000,
    liability: 600,
    netWorth: 400,
  },
  {
    date: "10/18/2022",
    asset: 1000,
    liability: 700,
    netWorth: 300,
  },
  {
    date: "10/19/2022",
    asset: 1000,
    liability: 800,
    netWorth: 200,
  },
  {
    date: "10/20/2022",
    asset: 1000,
    liability: 1000,
    netWorth: 0,
  },
  {
    date: "10/21/2022",
    asset: 1000,
    liability: 1100,
    netWorth: -100,
  },
  {
    date: "10/22/2022",
    asset: 1000,
    liability: 1600,
    netWorth: -600,
  },
  {
    date: "10/23/2022",
    asset: 1000,
    liability: 5000,
    netWorth: -4000,
  },
  {
    date: "10/24/2022",
    asset: 1000,
    liability: 5000,
    netWorth: -4000,
  },
  {
    date: "10/25/2022",
    asset: 1000,
    liability: 5000,
    netWorth: -4000,
  },
  {
    date: "10/26/2022",
    asset: 1000,
    liability: 5000,
    netWorth: -4000,
  },
  {
    date: "10/27/2022",
    asset: 3000,
    liability: 5000,
    netWorth: -2000,
  },
  {
    date: "10/28/2022",
    asset: 5000,
    liability: 5000,
    netWorth: 0,
  },
  {
    date: "10/29/2022",
    asset: 7000,
    liability: 5000,
    netWorth: 2000,
  },
  {
    date: "10/30/2022",
    asset: 7000,
    liability: 5000,
    netWorth: 2000,
  },
  {
    date: "10/31/2022",
    asset: 7000,
    liability: 5000,
    netWorth: 2000,
  },
  {
    date: "11/01/2022",
    asset: 7000,
    liability: 5000,
    netWorth: 2000,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default function Charts() {
  return (
    <Box p="50px">
      <Box bg="#000">
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 40,
              right: 50,
              left: 40,
              bottom: 40,
            }}
          >
            <CartesianGrid
              strokeWidth={1}
              stopColor="#504F4F"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              padding={{ left: 25 }}
              dy={20}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              dx={-10}
              tickFormatter={(tick) => {
                return `$ ${tick}M`;
              }}
            />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="#a8894a" stopOpacity={1} />
                <stop offset={off} stopColor="#c43e3e" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#a8894a" />
                <stop offset="70%" stop-color="#2e2618" stop-opacity="1" />
                <stop offset="10%" stop-color="#411c1c" stop-opacity="1" />
                <stop offset="100%" stop-color="#c43e3e" />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              strokeWidth={2}
              stroke="url(#splitColor)"
              fill="url(#Gradient2)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
