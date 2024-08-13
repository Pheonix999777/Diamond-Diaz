"use client";
import { FaqsData } from "@/app/utils/data";
import Img from "../../../../public/Imiges/🔥.png";
import Image from "next/image";
import { useState } from "react";
import Images from "../../../../public/Imiges/IMIGES.png";

export const Faqs = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <section className="bg-[#F2F3F7] py-[84px]">
      <div className="container flex justify-between">
        <div className="max-w-[593px]">
          <h2 className="max-w-[455px] text-[#121212] text-[32px] font-bold leading-tight">
            Почему именно Diamonds diaz
          </h2>

          <div className="flex flex-col gap-[8px] mt-[57px]">
            {FaqsData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center rounded-[32px] py-[32px] px-[47px] cursor-pointer duration-300 ${
                  active === index
                    ? "bg-[#379FFF] text-white"
                    : "bg-white text-[#121212] hover:bg-[#E7E8EC]"
                }`}
                onClick={() => handleClick(index)}
              >
                <div>
                  <h3
                    className={`text-[32px] font-bold ${
                      active === index ? "text-white" : "text-[#000]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`max-w-[420px] text-[14px] leading-[22px] mt-[15px] ${
                      active === index ? "text-white" : "text-[#121212]"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
                <Image
                  src={Img}
                  alt=""
                  width={72}
                  className={`ml-auto ${active === index ? "" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <Image src={Images} alt="" width={687.329} height={730.224} />
        </div>
      </div>
    </section>
  );
};
