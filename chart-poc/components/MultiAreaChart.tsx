import React from "react";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
export default function MultiAreaChart() {
  const data = [
    {
      Bankaccounts: 200000,
      Realestate: 1000000,
      Privateequity: 1000000,
      Publicdebt: 200000,
      Mutualfunds: 200000,
      Etfs: 200000,
      Others: 0,
    },
    {
      name: "22 Feb 2021",
      Bankaccounts: 500000,
      Realestate: 1000000,
      Privateequity: 1000000,
      Publicdebt: 205000,
      Mutualfunds: 250000,
      Etfs: 250000,
      Others: 0,
    },
    {
      name: "23 Feb 2021",
      Bankaccounts: 150000,
      Realestate: 2600000,
      Privateequity: 900000,
      Publicdebt: 300000,
      Mutualfunds: 150000,
      Etfs: 150000,
      Others: 0,
    },
    {
      name: "24 Feb 2021",
      Bankaccounts: 250000,
      Realestate: 3200000,
      Privateequity: 1000000,
      Publicdebt: 180000,
      Mutualfunds: 270000,
      Etfs: 270000,
      Others: 0,
    },
    {
      name: "25 Feb 2021",
      Bankaccounts: 225000,
      Realestate: 4700000,
      Privateequity: 950000,
      Publicdebt: 180000,
      Mutualfunds: 250000,
      Etfs: 250000,
      Others: 0,
    },
    {
      name: "26 Feb 2021",
      Bankaccounts: 275000,
      Realestate: 4700000,
      Privateequity: 1400000,
      Publicdebt: 180000,
      Mutualfunds: 200000,
      Etfs: 200000,
      Others: 0,
    },
    {
      name: "27 Feb 2021",
      Bankaccounts: 275000,
      Realestate: 4700000,
      Privateequity: 600000,
      Publicdebt: 950000,
      Mutualfunds: 200000,
      Etfs: 200000,
      Others: 0,
    },
    {
      Bankaccounts: 275000,
      Realestate: 4700000,
      Privateequity: 1700000,
      Publicdebt: 50000,
      Mutualfunds: 80000,
      Etfs: 200000,
      Others: 0,
    },
  ];
  const DataFormater = (number: any) => {
    if (number > 1000000000) {
      return "USD " + (number / 1000000000).toString() + "B";
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
          bg="#2B363B"
          padding="10px"
          borderRadius="5px"
          border="none !important"
          _hover={{
            border: "0px !important",
          }}
          w="250px"
        >
          {/* <Box pb="10px">[date + year / continent / currency]</Box> */}
          <Box display="flex" justifyContent="space-around">
            <Box>
              {payload.map((label: any, id: any) => (
                <Box key={id}>{label.name}</Box>
              ))}
            </Box>
            <Box color="#5D777E">
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
    <Box bg="#111111" p="50px">
      <Box p="20px" bg="#171717">
        <ResponsiveContainer width={"100%"} aspect={3}>
          <AreaChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeWidth={1} strokeOpacity={0.2} />
            <XAxis
              height={90}
              dataKey="name"
              tickSize={20}
              tick={{ fill: "#A9A9A9" }}
              tickLine={false}
            />
            <YAxis
              width={90}
              tickCount={5}
              tickSize={15}
              tick={{ fill: "#A9A9A9" }}
              tickLine={false}
              tickFormatter={DataFormater}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              iconSize={20}
              height={36}
              className={styles.legendWrapper}
            />
            <Area
              name="Real estate"
              type="linear"
              dataKey="Realestate"
              stackId="1"
              strokeWidth="3"
              stroke="#C19358"
              fill="#4B3D20"
            />
            <Area
              name="Private equity"
              type="linear"
              dataKey="Privateequity"
              strokeWidth="3"
              stackId="1"
              stroke="#4952E5"
              fill="#151D66"
            />
            <Area
              name="Public debt"
              type="linear"
              dataKey="Publicdebt"
              strokeWidth="3"
              stackId="1"
              stroke="#5FA88A"
              fill="#214344"
            />
            <Area
              name="Etfs"
              type="linear"
              dataKey="Etfs"
              strokeWidth="3"
              stackId="1"
              stroke="#5D8616"
              fill="#5D8616"
            />
            <Area
              name="Mutual funds"
              type="linear"
              dataKey="Mutualfunds"
              strokeWidth="3"
              stackId="1"
              stroke="#DDFF98"
              fill="#DDFF98"
            />
            <Area
              name="Bank accounts"
              type="linear"
              dataKey="Bankaccounts"
              strokeWidth="3"
              stackId="1"
              stroke="#FC9B77"
              fill="#4F1415"
            />
            <Area
              name="Others"
              type="linear"
              dataKey="Others"
              strokeWidth="0"
              stackId="1"
              stroke="#77BBD0"
              fill="#2B535C"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
