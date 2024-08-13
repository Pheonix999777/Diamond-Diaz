import { HeroData } from "@/app/utils/data";
import ArrowRightUp from "../../../../public/Icons/ArrowRightUp.svg";
import Img from "../../../../public/Imiges/Rectangle 24932.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-7">
      <div className="container">
        <div className="flex items-end">
          <div className=" max-w-[670px]">
            <h1 className="text-[24px] text-[#121212] font-bold">
              <span className="ml-[140px]"> Мы продвигаем и экспортируем </span>
              четыре ведущих бренда модных товаров, предлагая высокое качество и
              толька
            </h1>
            <p className="max-w-[350px] text-[12px] text-[#121212]  leading-[16px] font-normal mt-[8px]">
              Миссией компании обеспечить миллионы покупателей качественными
              химическими продуктами по доступной цене.
            </p>

            <div className="flex mt-[33px] items-center gap-[5px]">
              <button className="py-[12px] px-[26px] bg-[#379FFF] rounded-[8px] text-[16px] text-[#fff] ">
                перейти в каталог
              </button>
              <ArrowRightUp />
            </div>

            <div className="flex gap-[10px] max-w-[600px] mt-[40px]">
              {HeroData.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[205px] py-[28px] px-[25px] bg-[#F2F3F7] rounded-[24px] text-center"
                >
                  <h2 className="text-[34px] text-[#000]  font-bold mb-[12px]">
                    {item.title}
                  </h2>
                  <p className="text-[13px] text-[#121212] font-normal leading-none">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative ml-[39px] w-full max-w-[587px]">
            <Image
              className="max-w-[100%] "
              src={Img}
              alt=""
              width={587}
              height={712}
            />
            <button className="absolute top-[31px] left-[28px] bg-[#fff] py-[13px] px-[16px] rounded-[18px] text-[#121212] text-[32px] font-bold">
              Wallner
            </button>

            <ul className="flex gap-[4px] absolute bottom-[151px] left-[41px]">
              <li className="w-[6px] h-[6px] bg-[#fff] rounded-[33px] opacity-40"></li>
              <li className="w-[6px] h-[6px] bg-[#fff] rounded-[33px] opacity-40"></li>
              <li className="w-[6px] h-[6px] bg-[#fff] rounded-[33px] opacity-40"></li>
              <li className="w-[6px] h-[6px] bg-[#fff] rounded-[33px] opacity-40"></li>
            </ul>

            <div className="max-w-[250px] absolute bottom-[36px] left-[28px]">
              <button className="bg-[#fff] py-[13px] px-[16px] rounded-[12px] text-[#121212] text-[16px] font-normal">
                Турецкая технология
              </button>
              <button className="bg-[#fff] py-[13px] px-[16px] rounded-[12px] text-[#121212] text-[16px] font-normal mt-[2px]">
                и высокое
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
