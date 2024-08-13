import Image from "next/image";
import Logo from "../../../../public/Imiges/Group 6.png";
import Link from "next/link";
import { Navbar } from "@/app/utils/data";
import Globe from "../../../../public/Icons/Globe.svg";

export default function Header() {
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
            <button className="flex gap-x-2.5 text-[16px] font-normal">
              <span>
                <Globe />
              </span>
              Русский
            </button>

            <Link
              className="py-[18px] px-[32px] bg-[#F2F3F7] rounded-[12px] text-[16px] font-medium  ml-[26px]"
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
