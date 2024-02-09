import React from "react";
import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";
import standbike from "../assets/images/bikestand1.webp";
import heartman from "../assets/images/heartbike.webp";

const Header = () => {
  return (
    <div
      id="home"
      className=" z-[6] overflow-x-clip relative min-h-[720px] sm:min-h-[720px] lg:min-h-[920px] bg-[url(./assets/images/herobg.webp)] bg-cover bg-center sm:bg-fullsize bg-no-repeat w-full"
    >
      <NavBar />
      <HeaderContent />
      <img
        src={standbike}
        alt="standbike"
        className=" absolute right-[39%] bottom-[18%] z-[-1] animate-movebike1"
      />
      <img
        src={heartman}
        alt="heartbike"
        className=" absolute right-[8%] max-sm:h-[200px] bottom-[12%] z-[-1] animate-movebike2"
      />
    </div>
  );
};

export default Header;
