import React from "react";
import roadmapimg from "../assets/images/RoadMapimg.webp";
const RoadMap = () => {
  return (
    <div
      className=" bg-[#09655A] relative z-[1] -mt-[2px] overflow-hidden"
      id="Roadmap"
    >
      <img
        src={roadmapimg}
        alt="roadmapimg"
        className="max-sm:hidden 2xl:max-w-[991px] mx-auto absolute top-[10%] right-[0%] z-[-1] left-0  h-[89%] w-full"
      />
      <div class="sm:hidden block absolute sm:left-[70px] left-[40px] bottom-0 top-[11%] h-[85%] w-[15px] border-l-[11px] border-dotted border-[#0a4740]"></div>
      <div className=" max-w-[1164px] px-3 mx-auto pb-[35px] sm:pb-[60px]">
        <h2
          data-aos="fade-down"
          className=" text-[64px] text-white text-center font-chewy leading-[83px]"
        >
          Roadmap
        </h2>
        <div
          data-aos="fade-right"
          className=" max-sm:after:absolute max-sm:relative after:bg-[#FBA11D]  max-sm:after:border-2 after:border-white  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[440px] lg:max-w-[630px] sm:mt-[97px] mt-[50px]"
        >
          <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
            <h3 className=" text-[#FBA11D] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
              01
            </h3>
            <ul>
              <li className="  list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Launch $DINO & Website & Social Media.
              </li>
              <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Building the community.
              </li>
              <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Marketing Phase 1.
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="max-sm:after:absolute max-sm:relative after:bg-[#8EC627]  max-sm:after:border-2 after:border-white  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[440px] lg:max-w-[630px] sm:ml-auto sm:mt-[272px] mt-[50px]"
        >
          <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
            <h3 className=" text-[#8EC627] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
              02
            </h3>
            <ul>
              <li className=" list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                CoinGecko & Coinmarketcap listing.
              </li>
              <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Introduction to Buyback & Burning mechanism
              </li>
              <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Marketing Phase 2.
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="max-sm:after:absolute max-sm:relative after:bg-[#D45B07]  max-sm:after:border-2 after:border-white  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[440px] lg:max-w-[630px]  sm:mt-[128px] mt-[50px]"
        >
          <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
            <h3 className=" text-[#D45B07] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
              03
            </h3>
            <ul>
              <li className="  list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Utility and Usecase Introduction.
              </li>
              <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                CEX Listings
              </li>
              <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Marketing Phase 3.
              </li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="max-sm:after:absolute max-sm:relative after:bg-[#23AAAC]  max-sm:after:border-2 after:border-white  after:w-[30px] after:h-[30px] after:rounded-full after:left-[5.5%] after:top-[10%] max-w-[440px] lg:max-w-[630px] sm:ml-auto  sm:py-[128px] mt-[50px]"
        >
          <div className="max-sm:flex-col flex sm:items-center max-sm:ml-[90px] gap-[45px]">
            <h3 className=" text-[#23AAAC] text-[100px] lg:text-[200px] font-chewy leading-[100px] lg:leading-[261px]">
              04
            </h3>
            <ul>
              <li className="  list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Staking Introduction.
              </li>
              <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                DINO NFT Collection.
              </li>
              <li className=" pt-4 list-disc text-[20px] leading-[24px] font-normal font-BalsamiqSans text-white">
                Marketing Phase 4
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
