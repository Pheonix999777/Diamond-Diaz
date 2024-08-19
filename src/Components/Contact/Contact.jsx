import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import Instagram from "../../../public/Icons/Instagram.svg";
import YouTube from "../../../public/Icons/YouTube.svg";
import LinkedIn from "../../../public/Icons/LinkedIn.svg";
import Twitter from "../../../public/Icons/Twitter.svg";
import Image from "next/image";
import Huge from "../../../public/Icons/Huge.svg";
import WorldMap from "../../../public/Imiges/Vector.png";

export const Contact = () => {
  return (
    <section className="">
      <div className="container flex">
        <div className="max-w-[665px] bg-[rgb(247,248,250)] rounded-[24px] pt-[65px] px-[14px] pb-[14px]">
          <div className="max-w-[500px] ml-[34px]">
            <div className="relative flex items-center">
              <h3 className="text-[#172D33] text-[40px] font-Roboto font-semibold">
                Связаться с нами
              </h3>
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="21"
                viewBox="0 0 29 21"
                fill="none"
              >
                <path
                  d="M21.442 0.813952C21.8737 0.469492 22.5029 0.540217 22.8474 0.971918L28.4606 8.0069C28.8051 8.4386 28.7344 9.06781 28.3027 9.41227C27.871 9.75672 27.2418 9.686 26.8973 9.2543L21.9077 3.00098L15.6544 7.99057C15.2227 8.33503 14.5935 8.2643 14.249 7.8326C13.9046 7.4009 13.9753 6.7717 14.407 6.42724L21.442 0.813952ZM2.00189 14.8294C2.09101 15.1059 2.2036 15.3658 2.33719 15.6092L0.584023 16.5717C0.389089 16.2166 0.226217 15.8398 0.0983008 15.4428L2.00189 14.8294ZM3.41707 16.9082C3.848 17.2656 4.35621 17.5613 4.92907 17.784L4.20447 19.6481C3.44701 19.3537 2.74909 18.9526 2.14019 18.4475L3.41707 16.9082ZM6.69214 18.2067C7.28003 18.2716 7.90223 18.2728 8.54642 18.2037L8.75977 20.1923C7.97788 20.2762 7.21038 20.2761 6.47252 20.1946L6.69214 18.2067ZM10.3944 17.822C10.9796 17.6433 11.5712 17.4074 12.1605 17.1107L13.0601 18.8969C12.3709 19.244 11.6738 19.5225 10.9785 19.7348L10.3944 17.822ZM13.801 16.1151C14.3064 15.7528 14.804 15.3412 15.2875 14.8779L16.6712 16.322C16.12 16.8502 15.5495 17.3225 14.9661 17.7407L13.801 16.1151ZM16.6012 13.4422C16.9949 12.9529 17.374 12.4224 17.7345 11.8491L19.4277 12.9135C19.0267 13.5513 18.6026 14.1452 18.1594 14.6961L16.6012 13.4422ZM18.6948 10.1236C18.9751 9.55279 19.2385 8.94814 19.4819 8.30855L21.3511 9.02005C21.0861 9.71609 20.7982 10.3776 20.4899 11.0053L18.6948 10.1236ZM20.1137 6.41091C20.292 5.79251 20.4531 5.1465 20.595 4.47219L22.5521 4.88415C22.4004 5.60497 22.2276 6.29844 22.0354 6.96503L20.1137 6.41091ZM20.9429 2.49512C20.9903 2.16405 21.0334 1.82701 21.072 1.48392L23.0594 1.70732C23.0186 2.07019 22.973 2.42727 22.9227 2.7786L20.9429 2.49512Z"
                  fill="#2DB7CA"
                />
              </svg>
              <span className="absolute top-[-50px] left-[310px] text-[#000] text-[14px] font-medium font-Roboto bg-white py-[12px] px-[9px] rounded-[9px] rotate-[8deg]">
                Все очень просто
              </span>
            </div>

            <p className="text-[#172D33] text-[16px] mt-[16px]">
              Endilikda, siz shartnoma tuzish uchun hamkoringiz bilan yuzma-yuz
              uchrashishingiz shart emas, masofada
            </p>

            <Link className="flex items-center mt-[21px]" href={"#"}>
              <button className="text-[#fff] text-[16px] font-medium  bg-[#379FFF] rounded-[16px] py-[18px] px-[32px]">
                Связаться с нами
              </button>
              <span className="text-[#fff] text-[26px] bg-[#379FFF] py-[15px] px-[15px] rounded-[50%]">
                <RiArrowRightUpLine />
              </span>
            </Link>

            <div className="flex gap-[29px] mt-[28px]">
              <a href="">
                <Instagram />
              </a>
              <div className="w-[1px] h-[24px] bg-[#E5E7EB]"></div>
              <a href="">
                <YouTube />
              </a>
              <div className="w-[1px] h-[24px] bg-[#E5E7EB]"></div>
              <a href="">
                <LinkedIn />
              </a>
              <div className="w-[1px] h-[24px] bg-[#E5E7EB]"></div>
              <a href="">
                <Twitter />
              </a>
            </div>
          </div>

          <iframe
            className="mt-[48px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6139992883864!2d69.28879976711025!3d41.31726149012081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4d260e55d71%3A0x3871e584b31645d4!2sATK%20Turon!5e0!3m2!1sru!2s!4v1723701670010!5m2!1sru!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="relative max-w-[610px] bg-[#379FFF] rounded-[24px] pt-[56px] px-[48px] ml-[16px] overflow-hidden">
          <h3 className="text-[#fff] text-[40px] font-Roboto font-semibold">
            Партнерство с нами
          </h3>
          <p className="text-[#fff] text-[16px] mt-[16px] mb-[32px]">
            Endilikda, siz shartnoma tuzish uchun hamkoringiz bilan yuzma-yuz
            uchrashishingiz shart emas, masofadan turib ham bemalol shartnomalar
            tuzishingiz mumkin
          </p>

          <button className="relative z-10 flex gap-[8px] items-center py-[16px] px-[24px] rounded-lg border border-custom-border bg-link-background backdrop-blur-custom text-[#fff] text-[16px] font-medium">
            <span>
              <Huge />
            </span>
            Стать партеном
          </button>

          <div className="absolute z-[1] left-0 top-[100px] bg-radio-gradient opacity-20 rounded-custom-large  w-[1266.508px] h-[1266.508px]"></div>

          <Image className="absolute" src={WorldMap} alt="" />
        </div>
      </div>
    </section>
  );
};
