"use client";
import Image from "next/image";
import Logo from "../../../../public/Imiges/Group 6.png";
import Link from "next/link";
import Globe from "../../../../public/Icons/Globe.svg";
import { Languages, Navbar } from "@/utils/data";
import useHeaderProps from "./useHeaderProps";

export default function Header() {
  const { open, dropdownRef, handleChange, handleClick, indexItem } =
    useHeaderProps();

  return (
    <header className="py-[17px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="/">
            <Image src={Logo} alt="" width={238} height={60} />
          </a>

          <ul className="flex gap-[24px]">
            {Navbar.map((item, index) => (
              <li key={index}>
                <Link className="text-[16px] font-semibold" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center">
            <div className="relative flex flex-col" ref={dropdownRef}>
              <button
                className="flex gap-x-2.5 text-[16px] font-normal "
                onClick={handleClick}
              >
                <span>
                  <Globe />
                </span>
                {Languages[indexItem].title}
              </button>
              <ul
                className={`absolute z-10  top-10 bg-white rounded-lg shadow-xl overflow-hidden ${
                  open ? "block" : "hidden"
                }`}
              >
                {Languages.map((item, index) => (
                  <li key={index}>
                    <button
                      className="py-[12px] px-[15px] w-full hover:bg-[#F2F3F7] duration-300"
                      onClick={() => handleChange(index)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              className="py-[18px] px-[32px] bg-[#F2F3F7] rounded-[12px] text-[16px] font-medium ml-[26px]"
              href={"tel:+998"}
            >
              Связатся с нами
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
