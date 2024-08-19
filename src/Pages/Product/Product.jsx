import { ProductData } from "@/utils/ProductData";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { Button } from "@/Components/Button/Button";
import { TittleArrow } from "@/Components/TittleArrow/TittleArrow";

export const Product = () => {
  return (
    <section className="pb-[198px]">
      <div className="container">
        <div className="bg-[#F2F3F7] pt-[54px] pb-[38px] px-[16px] rounded-[16px]">
          <div className="ml-[24px]">
            <TittleArrow text={"Продукты от Wallner"} />

            <div className="flex gap-[12px] mt-[24px]">
              <Button text={"Алое"} />
              <Button text={"Жидкое мыло"} />
              <Button text={"Хозяйственное мыло"} />
              <Button text={"Другие"} />
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
            <TittleArrow text={"Продукты от Wallner"} />

            <div className="flex gap-[12px] mt-[24px]">
              <Button text={"Алое"} />
              <Button text={"Жидкое мыло"} />
              <Button text={"Хозяйственное мыло"} />
              <Button text={"Другие"} />
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
