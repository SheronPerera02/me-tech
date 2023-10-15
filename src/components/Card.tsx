import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="cursor-pointer rounded-[16px] p-2.5 shadow">
      <div className="h-56 relative">
        <Image
          className="rounded-[16px]"
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-row items-end justify-between pl-4 pr-6 py-3">
        <div className="flex flex-col gap-1">
          <p className="text-[#425466] font-semibold text-sm">Lux Residences</p>
          <div className="flex flex-col gap-[1px]">
            <p className="text-[#425466] text-[11px] font-semibold">
              15th Avenue
            </p>
            <p className="text-xl font-semibold">$1,500,000</p>
            <p className="text-[#999999] text-[10px] font-semibold">
              By SN Properties
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
