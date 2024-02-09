import React from "react";

const Loader = () => {
  return (
    <div>
      <div className=" min-h-screen fixed top-0 left-0 bg-[#0A4740] z-[100] w-full flex flex-col gap-5 justify-center items-center">
        <h1 className="font-lucky font-normal text-[75px] leading-[91%] text-center drop-shadow-[0px_6px_0px_#000]">
          <span className="text-[#FBA11D]">D</span>
          <span className="text-[#23AAAC]">I</span>
          <span className="text-[#D45B07]">N</span>
          <span className="text-[#8EC627]">O</span>
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
        <div className=" w-16 h-16 border-[5px] border-t-[#FBA11D] border-b-[#23AAAC] border-l-[#D45B07] border-r-[#8EC627]  animate-spin rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
