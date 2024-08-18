"use client";
import { HeroData, SliderImges } from "@/utils/data";
import ArrowRightUp from "../../../public/Icons/ArrowRightUp.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./style.css";

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef(null);

  useEffect(() => {
    const items = slidesRef.current;
    if (items) {
      const slideSize = items.getElementsByClassName("slide")[0].offsetWidth;
      items.style.left = `-${slideSize * activeIndex}px`;

      items.addEventListener("transitionend", () => {
        items.style.transition = "none";
      });

      return () => {
        items.removeEventListener("transitionend", () => {
          items.style.transition = "none";
        });
      };
    }
  }, [activeIndex]);

  const handleIndicatorClick = (index) => {
    const items = slidesRef.current;
    if (items) {
      const slideSize = items.getElementsByClassName("slide")[0].offsetWidth;
      items.style.transition = "left 0.5s ease-in-out";
      setActiveIndex(index);
      items.style.left = `-${slideSize * index}px`;
    }
  };

  return (
    <section className="pt-7">
      <div className="container">
        <div className="flex items-end">
          <div className="max-w-[670px]">
            <h1 className="text-[24px] text-[#121212] font-bold">
              <span className="ml-[140px]"> Мы продвигаем и экспортируем </span>
              четыре ведущих бренда модных товаров, предлагая высокое качество и
              только
            </h1>
            <p className="max-w-[350px] text-[12px] text-[#121212] leading-[16px] font-normal mt-[8px]">
              Миссией компании обеспечить миллионы покупателей качественными
              химическими продуктами по доступной цене.
            </p>

            <Link
              href={"/category"}
              className="inline-flex mt-[33px] items-center gap-[5px]"
            >
              <button className="py-[12px] px-[26px] bg-[#379FFF] rounded-[8px] text-[16px] text-[#fff]">
                перейти в каталог
              </button>
              <ArrowRightUp />
            </Link>

            <div className="flex gap-[10px] max-w-[600px] mt-[40px]">
              {HeroData.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[205px] py-[28px] px-[25px] bg-[#F2F3F7] rounded-[24px] text-center"
                >
                  <h2 className="text-[34px] text-[#000] font-bold mb-[12px]">
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
            <div id="slider" className="slider">
              <div className="wrapper">
                <div id="slides" className="slides" ref={slidesRef}>
                  {SliderImges.map((item, index) => (
                    <div className="slide" key={index}>
                      <Image
                        src={item.Img}
                        alt="Slide"
                        width={587}
                        height={712}
                      />
                      <button className="absolute top-[31px] left-[28px] bg-[#fff] py-[13px] px-[16px] rounded-[18px] text-[#121212] text-[32px] font-bold">
                        Wallner
                      </button>
                      <div className="max-w-[250px] absolute bottom-[36px] left-[28px]">
                        <button className="bg-[#fff] py-[13px] px-[16px] rounded-[12px] text-[#121212] text-[16px] font-normal">
                          Турецкая технология
                        </button>
                        <button className="bg-[#fff] py-[13px] px-[16px] rounded-[12px] text-[#121212] text-[16px] font-normal mt-[2px]">
                          и высокое
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ul className="absolute bottom-[160px] left-10 z-30 flex gap-2">
              {SliderImges.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleIndicatorClick(index)}
                    className={`w-[6px] h-[6px] rounded-full cursor-pointer ${
                      activeIndex === index
                        ? "bg-gray-300"
                        : "bg-custom-background"
                    }`}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
