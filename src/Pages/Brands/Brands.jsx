import Link from "next/link";
import Waller from "../../../public/Imiges/Waller.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Img from "../../../public/Imiges/Group 1000005870.png";
import Img2 from "../../../public/Imiges/ALOE-RDY-removebg-preview.png";
import Img3 from "../../../public/Imiges/Group 1000005867 (1).png";

export const Brands = () => {
  return (
    <section className="pt-[198px] pb-[124px]">
      <div className="container">
        <h2 className="text-[#121212] text-[32px] font-bold mb-[50px]">
          Наши бренды
        </h2>

        <div className="grid grid-cols-[minmax(0,470px)_minmax(0,470px)_minmax(0,308px)] gap-[16px]">
          <div className="relative overflow-hidden py-[32px] px-[32px] max-w-[479px] h-[479px] bg-blue-gradient rounded-[32px] col-span-1 row-span-2">
            <div className="flex flex-col justify-between h-full">
              <div className="max-w-[230px]">
                <h3 className="text-[36px] text-[#fff] font-medium">Wallner</h3>
                <p className="text-[16px] text-[#fff] mt-[8px] ">
                  Моющие средства для дома
                </p>
              </div>
              <Link
                className="w-[70px] h-[70px] bg-[#FFFFFF33] py-[24px] px-[24px] inline-flex items-center rounded-[50%]"
                href={"/category"}
              >
                <FaArrowRight className="text-[20px] text-white" />
              </Link>
            </div>

            <Image
              className="absolute right-0 bottom-[2px]"
              src={Waller}
              alt=""
              width={318}
              height={438}
            />
          </div>

          <div className="relative bg-[#F2F3F7] pt-[32px] px-[32px] rounded-[32px] overflow-hidden">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-[36px] text-[#121212] font-medium">
                  Esviro
                </h3>
                <p className="text-[16px] text-[#121212] mt-[8px] max-w-[230px]">
                  Все для авто
                </p>
              </div>
              <Link
                className="w-[70px] h-[70px] bg-[#FFF] py-[24px] px-[24px] inline-flex items-center rounded-[50%] mt-[24px] mb-[32px]"
                href={"/category"}
              >
                <FaArrowRight className="text-[20px] text-black" />
              </Link>
            </div>

            <Image
              className="absolute right-0 bottom-[2px]"
              src={Img}
              alt=""
              width={250}
              height={239}
            />
          </div>

          <div className="relative bg-line-gradient py-[32px] px-[32px] rounded-[32px] w-full max-w-[308px] overflow-hidden">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-[36px] text-white font-medium">AKS</h3>
                <p className="text-[16px] text-white mt-[8px] max-w-[230px]">
                  Все для авто
                </p>
              </div>
              <Link
                className="w-[70px] h-[70px] bg-[#FFF] py-[24px] px-[24px] inline-flex items-center rounded-[50%] mt-[24px]"
                href={"/category"}
              >
                <FaArrowRight className="text-[20px] text-black" />
              </Link>
            </div>

            <Image
              className="absolute right-0 bottom-[2px]"
              src={Img2}
              alt=""
              width={185}
              height={255}
            />
          </div>

          <div className="relative overflow-hidden flex bg-[#000003] rounded-[32px] py-[32px] px-[32px] max-w-[794px] col-span-2 row-span-1">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-[36px] text-white font-medium">Holzer</h3>
                <p className="text-[16px] text-white mt-[8px] max-w-[230px]">
                  Все для авто
                </p>
              </div>
              <Link
                className="w-[70px] h-[70px] bg-link-background py-[24px] px-[24px] inline-flex items-center rounded-[50%] mt-[24px]"
                href={"/category"}
              >
                <FaArrowRight className="text-[20px] text-white" />
              </Link>
            </div>
            <Image
              className="absolute right-1 z-20"
              src={Img3}
              alt=""
              width={392}
              height={426}
            />

            <div className="absolute top-0 right-[-50px] z-10 w-[400px] h-[500px] bg-[#FEDE00] rounded-full blur-[110px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
