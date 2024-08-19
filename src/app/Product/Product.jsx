import { ProductData } from "@/utils/ProductData";
import ArrowRightLarge from "../../../public/Icons/ArrowRightLarge.svg";
import { ProductCard } from "./ProductCard/ProductCard";

export const Product = () => {
  return (
    <section className="pb-[198px]">
      <div className="container">
        <div className="bg-[#F2F3F7] pt-[54px] pb-[38px] px-[16px] rounded-[16px]">
          <div className="ml-[24px]">
            <div className="flex items-center">
              <h2 className="text-[#121212] text-[32px] font-bold">
                Продукты от Wallner
              </h2>
              <ArrowRightLarge />
            </div>

            <div className="flex gap-[12px] mt-[24px]">
              <button className="bg-custom-background py-[16px] px-[40px] rounded-[11px] text-[#121212] text-[18px]">
                Алое
              </button>
              <button className="bg-custom-background py-[16px] px-[40px] rounded-[11px] text-[#121212] text-[18px]">
                Жидкое мыло
              </button>
              <button className="bg-custom-background py-[16px] px-[40px] rounded-[11px] text-[#121212] text-[18px]">
                Хозяйственное мыло
              </button>
              <button className="bg-custom-background py-[16px] px-[40px] rounded-[11px] text-[#121212] text-[18px]">
                Другие
              </button>
            </div>
          </div>

          <ul className="grid grid-cols-4 mt-[68px] gap-[7px]">
            {ProductData.map((product, index) => (
              <ProductCard
                key={index}
                text={product.text}
                title={product.title}
                img={product.img}
                id={product.id}
              />
            ))}
          </ul>
        </div>

        <div className="bg-[#F2F3F7] pt-[54px] pb-[38px] px-[16px] rounded-[16px] mt-[47px]">
          <div className="ml-[24px]">
            <div className="flex items-center">
              <h2 className="text-[#121212] text-[32px] font-bold">
                Продукты от Wallner
              </h2>
              <ArrowRightLarge />
            </div>

            <div className="flex gap-[12px] mt-[24px]">
              <button className="bg-custom-background py-[16px] px-[40px] rounded-[11px] text-[#121212] text-[18px]">
                Алое
              </button>
              <button className="bg-custom-background py-[16px] px-[40px] rounded-[11px] text-[#121212] text-[18px]">
                Жидкое мыло
              </button>
              <button className="bg-custom-background py-[16px] px-[40px] rounded-[11px] text-[#121212] text-[18px]">
                Хозяйственное мыло
              </button>
              <button className="bg-custom-background py-[16px] px-[40px] rounded-[11px] text-[#121212] text-[18px]">
                Другие
              </button>
            </div>
          </div>

          <ul className="grid grid-cols-4 mt-[68px] gap-[7px]">
            {ProductData.map((product, index) => (
              <ProductCard
                key={index}
                text={product.text}
                title={product.title}
                img={product.img}
                id={product.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
