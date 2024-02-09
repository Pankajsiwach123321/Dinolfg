import React from "react";
import toplayerutility from "../assets/images/UtilityTopLayer.webp";
import bottomlayerutility from "../assets/images/bottomutility.webp";
import scatreboard from "../assets/images/ScatBoard.webp";
import utilitystandbike from "../assets/images/DinoWithCycle.webp";
import utlititytree from "../assets/images/UtilityRightTree.webp";
const Utility = () => {
  return (
    <div className=" bg-[#0A4740] -mt-[2px] overflow-x-clip relative z-[1] pt-[35px] sm:pt-[100px] lg:pt-[221px] pb-[70px] sm:pb-[100px] lg:pb-[498px]">
      <img
        src={toplayerutility}
        alt="toplayerutility"
        className="max-sm:hidden absolute top-0 left-0 right-0 w-full z-[-1]"
      />
      <img
        src={bottomlayerutility}
        alt="bottomlayerutility"
        className=" absolute bottom-0 left-0 right-0 w-full z-[-1]"
      />
      <img
        src={utlititytree}
        alt="utlititytree"
        className=" absolute right-[-3%] z-[-1] min-w-[352px] max-h-[446px] bottom-[31%]"
      />
      <div className=" max-w-[1164px] px-3 mx-auto">
        <h2
          data-aos="fade-down"
          className=" text-[64px] text-white text-center font-chewy leading-[83px]"
        >
          Utility and Usecase
        </h2>
        <div className=" max-w-[1014px] mx-auto mt-[70px] sm:mt-[100px] lg:mt-[158px]">
          <div
            data-aos="fade-right"
            className=" border border-white relative z-[1]  rounded-[20px] bg-[#09655A] sm:p-[62px_280px_62px_39px] p-[20px]"
          >
            <p className=" max-w-[681px] font-BalsamiqSans text-white font-normal text-[21px] sm:text-[32px] leading-[38px]">
              We are going to work hard in otder to add
              <span className=" text-[#8EC627] font-bold"> $</span>
              <span className=" text-[#FBA11D] font-bold">D</span>
              <span className=" text-[#23AAAC] font-bold">I</span>
              <span className=" text-[#D45B07] font-bold">N</span>
              <span className=" text-[#FB5352] font-bold">O </span>
              to main platforms as a form of payment
            </p>
            <p className=" max-w-[184px] sm:max-w-[695px] font-BalsamiqSans text-white font-normal text-[21px] sm:text-[32px] leading-[38px] pt-[28px]">
              You will be able to buy a lot of things with{" "}
              <span className=" text-[#8EC627] font-bold"> $</span>
              <span className=" text-[#FBA11D] font-bold">D</span>
              <span className=" text-[#23AAAC] font-bold">I</span>
              <span className=" text-[#D45B07] font-bold">N</span>
              <span className=" text-[#FB5352] font-bold">O </span>
            </p>
            <img
              src={scatreboard}
              alt="scatreboard"
              className=" animate-herobounceanimnate absolute right-2 sm:right-[24px] sm:max-w-[255px] max-h-[98px] max-w-[111px] sm:max-h-[323px] bottom-[0%]"
            />
          </div>
          <div
            data-aos="fade-left"
            className=" border border-white relative z-[1]  rounded-[20px] bg-[#09655A] sm:p-[95px_25px_95px_306px] p-[20px_20px_20px_95px] mt-[40px] md:mt-[125px]"
          >
            <p className=" max-w-[681px] text-end font-BalsamiqSans text-white font-normal text-[21px] sm:text-[32px] leading-[38px] ">
              We are going to have staking and buyback/ burning mechanism
            </p>
            <img
              src={utilitystandbike}
              alt="utilitystandbike"
              className=" animate-herobounceanimnate absolute -left-2 sm:left-[-7px] sm:max-w-[267px] max-h-[140px] max-w-[300px] sm:max-h-[334px] bottom-[0%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;
