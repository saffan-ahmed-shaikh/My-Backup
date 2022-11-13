import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Charts from "../components/charts";
import AreaNegChart from "../components/AreaNegChart";
import MultiAreaChart from "../components/MultiAreaChart";
import BarLineChart from "../components/BarLineChart";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MultiAreaChart />
      {/* <AreaNegChart />
      <BarLineChart /> */}
    </div>
  );
};

export default Home;
