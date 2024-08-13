import { CategoryData } from "@/app/utils/ProductData";
import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "../../../../public/Icons/ArrowUpRight.svg";

const Category = () => {
  const text = "главная > каталог товаров";

  return (
    <section className="py-[72px]">
      <div className="container">
        <span className="text-[#121212] text-[13px] opacity-60">{text}</span>
        <h2 className="text-[#121212] text-[32px] font-bold mt-[8px]">
          Жидкость для мытья посуды AKS
        </h2>

        <ul className="grid grid-cols-4 mt-[32px] gap-[7px]">
          {CategoryData.map((item, index) => (
            <Link
              key={index}
              className="relative bg-[#fff] rounded-[32px] pt-[44px] pb-[43px] px-[20px] hover:shadow-custom-shadow duration-300"
              href={`/Pages/category/${item.id}`}
            >
              <li>
                <span className="absolute top-[16px] right-[16px] rounded-[50%] py-[16px] px-[16px] hover:bg-[#F2F3F7] duration-300">
                  <ArrowUpRight />
                </span>

                <span className="text-[13px] text-[#000]">{item.text}</span>
                <h3 className="max-w-[245px] text-[20px] text-[#121212] font-bold mt-[8px]">
                  {item.title}
                </h3>
                <Image
                  className="mt-[71px] ml-auto mr-auto"
                  src={item.img}
                  alt=""
                  width={159}
                  height={219}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
