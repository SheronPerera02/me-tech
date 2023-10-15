import Card from "./Card";

import { HouseInfo } from "../types";

type ContentProps = {
  houseInfoList: HouseInfo[];
};

const Content = ({ houseInfoList }: ContentProps) => {
  return (
    <div className="house-info w-full grid grid-cols-1 gap-y-8 mt-[80px] py-10 px-4 lg:grid-cols-3 lg:gap-y-10 lg:gap-x-10 lg:px-20 lg:py-16 2xl:px-60 2xl:gap-x-24 2xl:py-20">
      {houseInfoList.map((houseInfo, index) => {
        return <Card key={index} houseInfo={houseInfo} />;
      })}
    </div>
  );
};

export default Content;
