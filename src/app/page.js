import { Achievements } from "./Achievements/Achievements";
import { Brands } from "./Brands/Brands";
import { Faqs } from "./Faqs/Faqs";
import { Hero } from "./Hero/Hero";
import { Product } from "./Product/Product";

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
