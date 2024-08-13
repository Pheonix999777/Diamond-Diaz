import { Achievements } from "./Pages/Achievements/Achievements";
import { Brands } from "./Pages/Brands/Brands";
import { Faqs } from "./Pages/Faqs/Faqs";
import { Hero } from "./Pages/Hero/Hero";
import { Product } from "./Pages/Product/Product";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Product />
      <Faqs />
      <Achievements />
    </>
  );
}
