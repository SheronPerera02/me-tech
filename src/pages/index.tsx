import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";
import axios from "axios";

import Header from "../components/Header";
import Content from "../components/Content";

import { HouseInfo } from "../types";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  houseInfoList: HouseInfo[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const res = await axios.get(
      "https://iqaccbyrzi.execute-api.ap-southeast-1.amazonaws.com/default/getHouseInfo"
    );
    return {
      props: {
        houseInfoList: res.data,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        houseInfoList: [],
      },
    };
  }
};

export default function Home({ houseInfoList }: HomeProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-white ${inter.className}`}
    >
      <Header />
      <Content houseInfoList={houseInfoList} />
    </main>
  );
}
