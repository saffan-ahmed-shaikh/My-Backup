import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Line,
  ResponsiveContainer,
} from "recharts";
import { Box } from "@chakra-ui/react";

const data = [
  {
    name: "Nov'21",
    Liability: -4000,
    Assets: 2400,
    amt: 2400,
  },
  {
    name: "Dec' 22",
    Liability: -3000,
    Assets: 3800,
    amt: 2210,
  },
  {
    name: "Jan' 22",
    Liability: -2000,
    Assets: 9800,
    amt: 8290,
  },
  {
    name: "Feb'22",
    Liability: -2700,
    Assets: 3800,
    amt: 2000,
  },
  {
    name: "Mar'22",
    Liability: -1800,
    Assets: 4000,
    amt: 2181,
  },
  {
    name: "Apr' 22",
    Liability: -2000,
    Assets: 3000,
    amt: 2500,
  },
];

const DataFormater = (number: any) => {
  if (number > 1000000000) {
    return "USD" + (number / 1000000000).toString() + "B";
  } else if (number > 1000000) {
    return "USD " + (number / 1000000).toString() + "M";
  } else if (number > 1000) {
    return "USD " + (number / 1000).toString() + "K";
  } else {
    return number.toString();
  }
};

const CustomTooltip = ({ active, payload, name }: any) => {
  if (active && payload && payload.length) {
    return (
      <Box
        color="#fff"
        bg="#2b363b"
        padding="10px"
        borderRadius="5px"
        border="none !important"
        _hover={{
          border: "0px !important",
        }}
        w="200px"
      >
        <Box>
          <Box mb="10px" fontSize="18px">
            <Box>{payload[0].payload.name}</Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Box>Assets</Box>
              <Box>Liability</Box>
            </Box>
            <Box></Box>
            <Box color="#5d777e">
              <Box>$ {payload[0].payload.Assets}</Box>
              <Box>$ {payload[0].payload.Liability}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return null;
};
export default function BarLineChart() {
  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#000000"
    >
      <Box w="50%" justifyContent="center" display="flex">
        <ResponsiveContainer width="100%" height="100%" aspect={2}>
          <ComposedChart
            width={1200}
            height={400}
            data={data}
            layout="horizontal"
            stackOffset="sign"
            margin={{
              top: 8,
              right: 30,
              left: 30,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeWidth="1" vertical={false} />
            <XAxis
              dataKey="name"
              dy={10}
              tickLine={false}
              allowDataOverflow={true}
              allowDuplicatedCategory={false}
            />
            <XAxis
              dataKey="name"
              dy={10}
              tickLine={false}
              allowDataOverflow={true}
              allowDuplicatedCategory={false}
            />

            <YAxis
              dx={-10}
              width={90}
              strokeWidth="0"
              tickFormatter={DataFormater}
            />

            <Tooltip cursor={false} content={<CustomTooltip />} />

            <Legend
              iconType="circle"
              wrapperStyle={{
                bottom: 0,
              }}
              className="mysection"
              height={50}
            />

            <ReferenceLine y={0} />

            <Bar
              dataKey="Liability"
              fill="#ffb29c"
              barSize={30}
              stackId="stack"
            />
            <Bar dataKey="Assets" fill="#9bd2db" stackId="stack" />
            <Line
              name="Amount"
              dataKey="amt"
              stroke="#ff7300"
              dot={true}
              fill="#ff7300"
              scale="point"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
