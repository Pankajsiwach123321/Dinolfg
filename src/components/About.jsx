import React from "react";
import lefttree from "../assets/images/lefttree.webp";
import righttree from "../assets/images/righttree.webp";
import dragon from "../assets/images/dragangreen.webp";
const About = () => {
  return (
    <div className="bg-[#09655A] relative z-[2] -mt-[2px]" id="about">
      <img
        src={lefttree}
        alt="lefttree"
        className=" absolute z-[-1] left-0 bottom-0 md:bottom-[-39%] max-h-[442px]"
      />
      <img
        src={righttree}
        alt="righttree"
        className=" absolute z-[-1] right-0 bottom-0 md:bottom-[-21%] max-h-[446px]"
      />
      <img
        src={dragon}
        alt="dragon"
        className=" animate-herobounceanimnate max-sm:hidden absolute z-[-1] right-0 max-w-[169px] bottom-0 md:bottom-[-24%]"
      />
      <div className="max-w-[1164px] px-3 mx-auto pt-[35px] sm:pt-[68px]">
        <h2
          data-aos="fade-down"
          className="font-normal  text-center leading-[37px] drop-shadow-[0px_1.337px_0px_#000] sm:text-[64px] text-[39px]"
        >
          <span className="font-chewy text-white leading-[43px] sm:leading-[83px]">
            About
          </span>
          <span className="text-[#FBA11D] leading-[43px] sm:leading-[66px] font-lucky"> D</span>
          <span className="text-[#23AAAC] leading-[43px] sm:leading-[66px] font-lucky">i</span>
          <span className="text-[#D45B07] leading-[43px] sm:leading-[66px] font-lucky">n</span>
          <span className="text-[#8EC627] leading-[43px] sm:leading-[66px] font-lucky">o</span>
          <span className="text-[#FCCA2B] leading-[43px] sm:leading-[66px] font-lucky">L</span>
          <span className="text-[#8F78D2] leading-[43px] sm:leading-[66px] font-lucky">F</span>
          <span className="text-[#8EC627] leading-[43px] sm:leading-[66px] font-lucky">G</span>
        </h2>
        <p
          data-aos="fade-down"
          className=" font-BalsamiqSans text-white pt-[20px] sm:pt-[42px] font-normal text-2xl leading-[28px] text-center"
        >
          $DINO is a meme coin with very strong utility.
        </p>
        <p
          data-aos="fade-down"
          className=" max-w-[560px] mx-auto font-BalsamiqSans text-white pt-[18px] font-normal text-2xl leading-[28px] text-center"
        >
          Biggest problem of meme coins is lack of utility and usecase,
          <span className=" text-[#8EC627]"> $</span>
          <span className=" text-[#FBA11D]">D</span>
          <span className=" text-[#23AAAC]">I</span>
          <span className=" text-[#D45B07]">N</span>
          <span className=" text-[#FB5352]">O </span>
          is going to fix it.
        </p>
        <p
          data-aos="fade-down"
          className=" max-w-[560px] mx-auto font-BalsamiqSans text-white pt-[10px] font-normal text-2xl leading-[28px] text-center"
        >
          We want to bring a lot of usecases and utility to $DINO holders, just
          sit back and relax.
        </p>
        <p
          data-aos="fade-down"
          className=" max-w-[560px] mx-auto font-BalsamiqSans text-white pt-[14px] pb-[17px] font-normal text-2xl leading-[28px] text-center"
        >
          In $DINO, we want to build a very strong community, that’s why we are
          going to have a lot of games and crypto tips in our Telegram and
          Twitter.
        </p>
      </div>
    </div>
  );
};

export default About;
