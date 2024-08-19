"use client";
import { CategoryData, ProductData } from "@/utils/ProductData";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ArrowRightUp from "../../../../public/Icons/ArrowRightUp.svg";
import { TittleArrow } from "@/Components/TittleArrow/TittleArrow";
import { ProductCard } from "@/Components/ProductCard/ProductCard";
import { CatalogText } from "@/Components/CatalogText/CatalogText";

const Category = () => {
  const params = useParams();
  const { id } = params;

  const product = CategoryData.find((item) => item.id === parseInt(id, 10));

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
            <CatalogText text={"главная > каталог товаров"} />
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

        <div className="mt-[96px]">
          <TittleArrow text={"Продукты от Wallner"} />
        </div>

        <ul className="grid grid-cols-4 mt-[32px] gap-[7px]">
          {ProductData.map((item, index) => (
            <ProductCard
              key={index}
              text={item.text}
              title={item.title}
              img={item.img}
              id={item.id}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
