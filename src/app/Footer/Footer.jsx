import Link from "next/link";
import Instagram from "../../../public/Icons/Instagram.svg";
import YouTube from "../../../public/Icons/YouTube.svg";
import LinkedIn from "../../../public/Icons/LinkedIn.svg";

export default function Footer() {
  return (
    <footer className="pt-[145px]">
      <div className="container">
        <div className="flex justify-between mb-[28px]">
          <div className="block">
            <p className="text-[#5A6161] text-[14px] font-Roboto mb-[8px]">
              местоположение
            </p>
            <Link
              className="text-[#172D33] text-[20px] font-Roboto font-medium"
              href={"#"}
            >
              Город Ташкент, улица Шахрисабз 16А
            </Link>
          </div>

          <div className="block">
            <p className="text-[#5A6161] text-[14px] font-Roboto mb-[8px]">
              Тел.номер:
            </p>
            <Link
              className="text-[#172D33] text-[20px] font-Roboto font-medium"
              href={"#"}
            >
              +998 93 982 50 01
            </Link>
          </div>

          <div className="block">
            <p className="text-[#5A6161] text-[14px] font-Roboto mb-[8px]">
              Эл.адрес
            </p>
            <Link
              className="text-[#172D33] text-[20px] font-Roboto font-medium"
              href={"#"}
            >
              info@icangroup.uz
            </Link>
          </div>

          <div>
            <p className="text-[#5A6161] text-[14px] font-Roboto mb-[8px]">
              Тел.номер:
            </p>

            <div className="flex gap-[29px]">
              <a href="">
                <Instagram />
              </a>
              <div className="w-[1px] h-[24px] bg-[#E5E7EB]"></div>
              <a href="">
                <YouTube />
              </a>
              <div className="w-[1px] h-[24px] bg-[#E5E7EB]"></div>
              <a href="">
                <LinkedIn />
              </a>
              <div className="w-[1px] h-[24px] bg-[#E5E7EB]"></div>
            </div>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid #D9D9D9" }}
          className="flex justify-between pt-[15px] pb-[15px]"
        >
          <p className="text-[14px text-[#172D33] font-Roboto">
            2024 All rights received.
          </p>
          <p className="text-[14px text-[#172D33] font-Roboto">Design by</p>
        </div>
      </div>
    </footer>
  );
}
