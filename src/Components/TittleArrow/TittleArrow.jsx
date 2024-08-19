import ArrowRightLarge from "../../../public/Icons/ArrowRightLarge.svg";

export const TittleArrow = ({ text }) => {
  return (
    <div className="flex items-center">
      <h2 className="text-[#121212] text-[32px] font-bold">{text}</h2>
      <ArrowRightLarge />
    </div>
  );
};
