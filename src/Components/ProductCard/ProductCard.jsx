import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "../../../public/Icons/ArrowUpRight.svg";

export const ProductCard = ({ text, title, img, id }) => {
  return (
    <Link
      className="relative bg-[#fff] rounded-[32px] pt-[44px] pb-[43px] px-[20px] hover:shadow-custom-shadow duration-300"
      href={`/category/${id}`}
    >
      <li>
        <span className="absolute top-[16px] right-[16px] rounded-[50%] py-[16px] px-[16px] hover:bg-[#F2F3F7] duration-300">
          <ArrowUpRight />
        </span>

        <span className="text-[13px] text-[#000]">{text}</span>
        <h3 className="text-[20px] text-[#121212] font-bold mt-[8px]">
          {title}
        </h3>
        <Image
          className="mt-[71px] ml-auto mr-auto"
          src={img}
          alt=""
          width={159}
          height={219}
        />
      </li>
    </Link>
  );
};
