import React from "react";
import toplayer from "../assets/images/toptokenellipes.webp";
import chart from "../assets/images/Chart.webp";
import centerdragon from "../assets/images/CenterDragon.webp";
import chartline from "../assets/images/Chartline.webp";
import fullchart from "../assets/images/TokenFullChart.webp";
import layergray from "../assets/images/TokenShadows.webp";
import bottomlayer from "../assets/images/Tokenbottomlayer.webp";
import dargantooken from "../assets/images/TokenDragontoken.webp";
import tokentree from "../assets/images/TokenLeftTree.webp";
const Tokenomics = () => {
  return (
    <div className="bg-[#0A4740] -mt-[2px] relative z-[1]" id="Tokenomic">
      <img
        src={toplayer}
        alt="toplyare"
        className="absolute top-0 z-[-1] left-0 right-0 object-cover w-full"
      />
      <img
        src={dargantooken}
        alt="dargantooken"
        data-aos="zoom-in"
        className=" animate-herobounceanimnate max-sm:hidden absolute z-[2] left-[0%] max-w-[211px] max-h-[193px] w-full bottom-[3%]"
      />
      <img
        src={tokentree}
        alt="tokentree"
        className=" absolute z-[1] left-[-1%] sm:max-w-[352px] max-w-[150px] max-h-[150px] sm:max-h-[446px] w-full bottom-[7%]"
      />
      <img
        src={bottomlayer}
        alt="bottomlayer"
        className=" max-sm:hidden absolute bottom-0 left-0 right-0 w-full"
      />
      <img
        src={layergray}
        alt="loyelggrey"
        className=" absolute right-[0%] z-[-1] top-[18%] max-w-[383px] max-h-[267px]"
      />
      <div className=" max-w-[1164px] mx-auto px-3 sm:pt-[100px] pt-[70px] lg:pt-[246px] pb-[35px] sm:pb-[100px] lg:pb-[428px]">
        <h2
          data-aos="fade-down"
          className=" text-[64px] text-white text-center font-chewy leading-[83px]"
        >
          Tokenomics
        </h2>
        <div className="  relative z-[2]">
          <div
            data-aos="zoom-in-up"
            className=" relative max-w-[589px] mx-auto z-[1] mt-[50px] sm:mt-[100px] lg:mt-[166px]"
          >
            <img
              src={chart}
              alt="chart"
              className=" lg:flex mx-auto hidden  max-w-[493px] xl:max-w-[589px] w-full "
            />
            <img src={fullchart} alt="fullshart" className=" block lg:hidden" />
            <img
              src={centerdragon}
              alt="centerdragon"
              className=" animate-herobounceanimnate max-w-[133px] hidden  lg:block w-full absolute top-[-30%] left-[40%]"
            />
            <img
              src={chartline}
              alt="chartline"
              className=" max-w-[252px] hidden lg:block  w-full absolute top-[-4%] right-[28.5%]"
            />
          </div>
          <div
            data-aos="fade-right"
            className=" flex justify-center max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#FBA11D]  border-dotted max-lg:p-5 mx-auto rounded-full max-lg:max-w-[500px] items-center gap-[26px] lg:absolute top-[35px] left-[1%]"
          >
            <div className=" max-w-[189px] text-center lg:text-end">
              <p className=" text-[#FBA11D] text-[32px] font-normal leading-[38px] font-BalsamiqSans">
                333,333,333
              </p>
              <p className=" text-white font-normal text-2xl font-BalsamiqSans pt-[5px] leading-[33px]">
                Supply
              </p>
            </div>
            <div className=" lg:block hidden border-[1.48px] border-white w-[15px] h-[88px] border-r-0 border-b-0"></div>
          </div>
          <div
            data-aos="fade-up"
            className=" flex justify-center max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#23AAAC] border-dotted max-lg:p-5 mx-auto rounded-full max-lg:max-w-[500px] items-center gap-[26px] lg:absolute top-[76%] left-[11%]"
          >
            <div className=" max-w-[203px] text-center lg:text-end">
              <p className=" text-[#23AAAC] text-[32px] font-normal leading-[38px] font-BalsamiqSans">
                95% Uniswa
                <br />
                5% Marketing
              </p>
              <p className="  text-white font-normal text-2xl font-BalsamiqSans pt-[5px] leading-[33px]">
                Allocation
              </p>
            </div>
            <div className=" lg:block hidden border-[1.48px] border-white skew-y-[-50deg] w-[15px] h-[88px] border-r-0 border-b-0"></div>
          </div>
          <div
            data-aos="zoom-in"
            className=" flex flex-col max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#D45B07] border-dotted max-lg:p-5 mx-auto rounded-full max-lg:max-w-[500px] justify-center items-center gap-[17px] lg:absolute bottom-[-41%] left-[45%]"
          >
            <div className=" lg:block hidden border-r-[1.48px] border-white  w-[15px] h-[43px]  border-b-0"></div>
            <div className=" max-w-[203px] text-center lg:text-end">
              <p className=" text-[#D45B07] text-[32px] font-normal leading-[38px] font-BalsamiqSans">
                No Tax
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className=" flex flex-row-reverse max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#FB5352] border-dotted max-lg:p-5 mx-auto rounded-full max-lg:max-w-[500px] justify-center items-center gap-[26px] lg:absolute top-[83%] right-[7%]"
          >
            <div className=" max-w-[248px] text-center lg:text-end">
              <p className=" text-[#FB5352] text-[32px] font-normal leading-[38px] font-BalsamiqSans">
                No Mint Function
              </p>
            </div>
            <div className=" lg:block hidden border-[1.48px] border-white skew-y-[50deg] w-[15px] h-[88px] border-l-0 border-b-0"></div>
          </div>
          <div
            data-aos="fade-left"
            className=" flex flex-row-reverse max-lg:mt-[20px] max-lg:border-4 max-lg:backdrop-blur-sm border-[#5D9630] border-dotted max-lg:p-5 mx-auto rounded-full max-lg:max-w-[500px] justify-center items-center gap-[26px] lg:absolute top-[35px] right-[1%]"
          >
            <div className=" max-w-[189px] text-center lg:text-start">
              <p className=" text-[#8EC627] text-[32px] font-normal leading-[38px] font-BalsamiqSans">
                Liquidity lock for 1 year
              </p>
            </div>
            <div className=" lg:block hidden border-[1.48px] border-white w-[15px] h-[88px] border-l-0 border-b-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
