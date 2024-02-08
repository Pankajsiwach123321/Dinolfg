import React from "react";

const Loader = () => {
  return (
    <div>
      <div className=" min-h-screen fixed top-0 left-0 bg-[#0A4740] z-[40] w-full flex justify-center items-center">
        <div className=" w-16 h-16 border-[5px] border-t-[#FBA11D] border-b-[#23AAAC] border-l-[#D45B07] border-r-[#8EC627]  animate-spin rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
