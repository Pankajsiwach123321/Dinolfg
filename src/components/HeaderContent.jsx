import React from "react";
import aeroplanehero from "../assets/images/aeroplanehero.webp";
const HeaderContent = () => {
  return (
    <div>
      <div className=" max-w-[1164px] px-3 mx-auto">
        <div className="flex sm:flex-row flex-col-reverse items-center flex-wrap">
          <div className="sm:w-5/12 w-full sm:mt-0 mt-5 flex items-end justify-center sm:justify-start xl:ps-10">
            <img
              src={aeroplanehero}
              alt="DinowithPlan"
              className="  sm:max-w-[395px] w-full max-w-[250px] plan_ani"
            />
          </div>
          <div
            data-aos="fade-left"
            className="sm:w-7/12 w-full flex justify-center"
          >
            <h1 className="font-lucky font-normal lg:text-[175.64px] md:text-[130px] sm:text-[110px] text-[75px] leading-[91%] text-center drop-shadow-[0px_6px_0px_#000]">
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">I</span>
              <span className="text-[#D45B07]">N</span>
              <span className="text-[#8EC627]">O</span>
              <br className="sm:block hidden" />
              <span className="text-[#8EC627] drop-shadow-[0px_2px_0px_#000] ">
                L
              </span>
              <span className="text-[#FCCA2B] drop-shadow-[0px_2px_0px_#000] ">
                F
              </span>
              <span className="text-[#8F78D2] drop-shadow-[0px_2px_0px_#000] ">
                G
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
