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

const data = [
  {
    name: "10/26/2022",
    asset: 100,
    liability: 0,
    netWorth: 100,
  },
  {
    name: "10/27/2022",
    asset: 200,
    liability: 0,
    netWorth: 200,
  },
  {
    name: "10/28/2022",
    asset: 400,
    liability: 0,
    netWorth: 400,
  },
  {
    name: "10/29/2022",
    asset: 0,
    liability: 200,
    netWorth: -200,
  },
  {
    name: "10/30/2022",
    asset: 100,
    liability: 100,
    netWorth: -100,
  },
  {
    name: "10/31/2022",
    asset: 200,
    liability: 0,
    netWorth: 200,
  },
  {
    name: "10/01/2022",
    asset: 300,
    liability: 0,
    netWorth: 300,
  },
  {
    name: "10/02/2022",
    asset: 300,
    liability: 0,
    netWorth: 300,
  },
];

// const data = [
//   {
//     date: "10/02/2022",
//     asset: 100,
//     liability: 0,
//     netWorth: -100,
//   },
//   {
//     date: "10/03/2022",
//     asset: 110,
//     liability: 0,
//     netWorth: 110,
//   },
//   {
//     date: "10/04/2022",
//     asset: 200,
//     liability: 100,
//     netWorth: 100,
//   },
//   {
//     date: "10/05/2022",
//     asset: 400,
//     liability: 100,
//     netWorth: 300,
//   },
//   {
//     date: "10/06/2022",
//     asset: 1000,
//     liability: 100,
//     netWorth: 900,
//   },
//   {
//     date: "10/07/2022",
//     asset: 1000,
//     liability: 0,
//     netWorth: 1000,
//   },
//   {
//     date: "10/08/2022",
//     asset: 1000,
//     liability: 0,
//     netWorth: 1000,
//   },
//   {
//     date: "10/09/2022",
//     asset: 1000,
//     liability: 0,
//     netWorth: 1000,
//   },
//   {
//     date: "10/10/2022",
//     asset: 1000,
//     liability: 0,
//     netWorth: 1000,
//   },
//   {
//     date: "10/11/2022",
//     asset: 1000,
//     liability: 0,
//     netWorth: 1000,
//   },
//   {
//     date: "10/12/2022",
//     asset: 1000,
//     liability: 0,
//     netWorth: 1000,
//   },
//   {
//     date: "10/13/2022",
//     asset: 1000,
//     liability: 0,
//     netWorth: 1000,
//   },
//   {
//     date: "10/14/2022",
//     asset: 1000,
//     liability: 0,
//     netWorth: 1000,
//   },
//   {
//     date: "10/15/2022",
//     asset: 1000,
//     liability: 0,
//     netWorth: 1000,
//   },
//   {
//     date: "10/16/2022",
//     asset: 1000,
//     liability: 500,
//     netWorth: 500,
//   },
//   {
//     date: "10/17/2022",
//     asset: 1000,
//     liability: 600,
//     netWorth: 400,
//   },
//   {
//     date: "10/18/2022",
//     asset: 1000,
//     liability: 700,
//     netWorth: 300,
//   },
//   {
//     date: "10/19/2022",
//     asset: 1000,
//     liability: 800,
//     netWorth: 200,
//   },
//   {
//     date: "10/19/2022",
//     asset: 1000,
//     liability: 800,
//     netWorth: 200,
//   },
//   {
//     date: "10/19/2022",
//     asset: 1000,
//     liability: 800,
//     netWorth: 200,
//   },
//   {
//     date: "10/20/2022",
//     asset: 1000,
//     liability: 1000,
//     netWorth: 0,
//   },
//   {
//     date: "10/21/2022",
//     asset: 1000,
//     liability: 1100,
//     netWorth: -100,
//   },
//   {
//     date: "10/22/2022",
//     asset: 1000,
//     liability: 1600,
//     netWorth: -600,
//   },
//   {
//     date: "10/23/2022",
//     asset: 1000,
//     liability: 5000,
//     netWorth: -4000,
//   },
//   {
//     date: "10/24/2022",
//     asset: 1000,
//     liability: 5000,
//     netWorth: -4000,
//   },
//   {
//     date: "10/25/2022",
//     asset: 1000,
//     liability: 5000,
//     netWorth: -4000,
//   },
//   {
//     date: "10/26/2022",
//     asset: 1000,
//     liability: 5000,
//     netWorth: -4000,
//   },
//   {
//     date: "10/27/2022",
//     asset: 3000,
//     liability: 5000,
//     netWorth: -2000,
//   },
//   {
//     date: "10/27/2022",
//     asset: 3000,
//     liability: 5000,
//     netWorth: -2000,
//   },
//   {
//     date: "10/27/2022",
//     asset: 3000,
//     liability: 5000,
//     netWorth: 2000,
//   },
//   {
//     date: "10/28/2022",
//     asset: 5000,
//     liability: 5000,
//     netWorth: 0,
//   },
//   {
//     date: "10/29/2022",
//     asset: 7000,
//     liability: 5000,
//     netWorth: 2000,
//   },
//   {
//     date: "10/30/2022",
//     asset: 7000,
//     liability: 5000,
//     netWorth: 2000,
//   },
//   {
//     date: "10/31/2022",
//     asset: 7000,
//     liability: 5000,
//     netWorth: 2000,
//   },
//   {
//     date: "11/01/2022",
//     asset: 7000,
//     liability: 5000,
//     netWorth: 2000,
//   },
// ];
const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.netWorth));
  const dataMin = Math.min(...data.map((i) => i.netWorth));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();
console.log("off", off);

export default function AreaNegChart() {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <Box
          w="150px"
          color="#fff"
          bg="#2B363B"
          padding="10px"
          borderRadius="5px"
          border="none !important"
          _hover={{
            border: "0px !important",
          }}
        >
          <Box pb="10px">{payload[0].payload.name}</Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              {payload.map((label: any, id: any) => (
                <Box key={id}>{label.name}</Box>
              ))}
            </Box>
            <Box></Box>
            <Box color="#475f64">
              {payload.map((amount: any, id: any) => (
                <Box key={id}>$ {amount.value} </Box>
              ))}
            </Box>
          </Box>
        </Box>
      );
    }
    return null;
  };
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
              stroke="#4D4D4D"
              axisLine={false}
              tickLine={false}
              dx={-10}
              tickFormatter={(tick) => {
                return `$ ${tick}M`;
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="#769EA7" stopOpacity={1} />
                <stop offset={off} stopColor="#c43e3e" stopOpacity={1} />
              </linearGradient>
              <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset={"20%"} stopColor="#769EA7" />
                <stop offset={off} stopColor="#2f3f43d1" />
                <stop offset={off} stopColor="#411c1c" stopOpacity="1" />
                <stop offset={"90%"} stopColor="#c43e3e" />
              </linearGradient>
            </defs>
            <Area
              name="Amount"
              dataKey="netWorth"
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
