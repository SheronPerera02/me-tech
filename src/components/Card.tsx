import Image from "next/image";

import { HouseInfo } from "../types";

type CardProps = {
  houseInfo: HouseInfo;
};

const Card = ({ houseInfo }: CardProps) => {
  return (
    <div className="cursor-pointer rounded-[16px] p-2.5 shadow">
      <div className="h-56 relative">
        <Image
          className="rounded-[16px]"
          src={houseInfo.image}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-row items-end justify-between pl-4 pr-6 py-3">
        <div className="flex flex-col gap-1">
          <p className="text-[#425466] font-semibold text-sm">
            {houseInfo.name}
          </p>
          <div className="flex flex-col gap-[1px]">
            <p className="text-[#425466] text-[11px] font-semibold">
              {houseInfo.location}
            </p>
            <p className="text-xl font-semibold">
              ${houseInfo.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p className="text-[#999999] text-[10px] font-semibold">
              By {houseInfo.developer}
            </p>
          </div>
        </div>
        <div className="h-8 w-8 relative">
          <Image
            className="rounded-[16px]"
            src="/assets/icons/water_mark.svg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
