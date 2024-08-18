"use client";
import { CategoryData, ProductData } from "@/utils/ProductData";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArrowRightUp from "../../../../public/Icons/ArrowRightUp.svg";
import ArrowRightLarge from "../../../../public/Icons/ArrowRightLarge.svg";
import ArrowUpRight from "../../../../public/Icons/ArrowUpRight.svg";

const Category = () => {
  const params = useParams();
  const { id } = params;

  const product = CategoryData.find((item) => item.id === parseInt(id, 10));

  const text = "главная > каталог товаров";

  return (
    <section className="py-[72px]">
      <div className="container">
        <div className="flex">
          <div className="w-full max-w-[591px] border border-[#E1E1E1] rounded-[32px] py-[25px] px-[43px]">
            <Image
              className="max-w-full mr-auto ml-auto"
              src={product.img}
              alt=""
              height={504}
            />
          </div>

          <div className="max-w-[595px] ml-[57px]">
            <span className="text-[#121212] text-[13px] opacity-60">
              {text}
            </span>
            <h1 className="text-[#121212] text-[32px] font-bold mt-[8px] mb-[16px]">
              AKS — Арбуз
            </h1>
            <p className="text-[#121212] text-[16px] ">
              Раствор также подходит для обработки кухонных поверхностей:
              столешниц, шкафов, моек, плит, духовок, кафеля, пола. <br />{" "}
              Свежие жирные пятна на скатертях, салфетках, полотенцах, одежде
              можно вывести при помощи чистящего средства AKS. Капают гель
              непосредственно на загрязнение, выжидают 15-20 минут, затем
              стирают обычным способом
            </p>

            <Link className="inline-flex items-center mt-[140px]" href={"#"}>
              <button className="py-[12px] px-[26px] bg-[#379FFF] rounded-lg text-[#fff] text-[16px] font-medium">
                Узнать оптовую цену
              </button>
              <ArrowRightUp />
            </Link>
          </div>
        </div>

        <div className="flex items-center mt-[96px]">
          <h2 className="text-[#121212] text-[32px] font-bold">
            Продукты от Wallner
          </h2>
          <ArrowRightLarge />
        </div>

        <ul className="grid grid-cols-4 mt-[32px] gap-[7px]">
          {ProductData.map((item, index) => (
            <Link
              key={index}
              className="relative bg-[#fff] rounded-[32px] pt-[44px] pb-[43px] px-[20px] hover:shadow-custom-shadow duration-300"
              href={`/category/${item.id}`}
            >
              <li>
                <span className="absolute top-[16px] right-[16px] rounded-[50%] py-[16px] px-[16px] hover:bg-[#F2F3F7] duration-300">
                  <ArrowUpRight />
                </span>

                <span className="text-[13px] text-[#000]">{item.text}</span>
                <h3 className="text-[20px] text-[#121212] font-bold mt-[8px]">
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
