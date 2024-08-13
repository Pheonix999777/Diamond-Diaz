import Link from "next/link";
import BlackArrowRight from "../../../../public/Icons/BlackArrowRight.svg";
import DiamondDiaz from "../../../../public/Imiges/Diamond diaz.png";
import { AchievementsData } from "@/app/utils/data";
import Image from "next/image";
import "./style.css";

export const Achievements = () => {
  return (
    <section className="pt-[172px] pb-[246px]">
      <div className="container flex justify-between">
        <div className="mt-[70px]">
          <h2 className="text-[#121212] text-[32px] font-bold max-w-[432px] leading-tight">
            О нас и наши достижения
          </h2>
          <div className="max-w-[484px] mt-[23px] mb-[44px]">
            <p className="text-[#121212] text-[16px]">
              Миссией компании обеспечить миллионы покупателей качественными
              химическими продуктами по доступной цене.
            </p>

            <p className="text-[#121212] text-[16px] mt-8">
              Чтобы каждый человек который пользуется нашей продукцией был
              полностью спокоен за себя и своё окружение.
            </p>
          </div>
          <Link className="flex items-center" href={"#"}>
            <button className="bg-[#F2F3F7] py-[12px] px-[26px] rounded-lg text-[#121212] text-[16px] font-medium">
              Хочу узнать больше
            </button>
            <BlackArrowRight />
          </Link>
        </div>

        <div className="ss grid-rows-2 gap-[16px] ml-[20px]">
          {AchievementsData.map((item, index) => (
            <div
              className="bg-[#F2F3F7] rounded-[32px] pt-[32px] px-[32px] pb-[51px]"
              key={index}
            >
              <div className="flex flex-col justify-between h-full">
                <span className="text-[#121212] text-[16px] font-Roboto">
                  {item.text}
                </span>
                <h3 className=" text-[#379FFF] text-[46px] mt-auto">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

          <div className="">
            <Image src={DiamondDiaz} alt="" width={308} height={332} />
          </div>
        </div>
      </div>
    </section>
  );
};
