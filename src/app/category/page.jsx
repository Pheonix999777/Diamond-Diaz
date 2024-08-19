import { CategoryData } from "@/utils/ProductData";
import { ProductCard } from "@/Components/ProductCard/ProductCard";
import { CatalogText } from "@/Components/CatalogText/CatalogText";

const Category = () => {
  return (
    <section className="py-[72px]">
      <div className="container">
        <CatalogText text={"главная > каталог товаров"} />
        <h2 className="text-[#121212] text-[32px] font-bold mt-[8px]">
          Жидкость для мытья посуды AKS
        </h2>

        <ul className="grid grid-cols-4 mt-[32px] gap-[7px]">
          {CategoryData.map((item, index) => (
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
