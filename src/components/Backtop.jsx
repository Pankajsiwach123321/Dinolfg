import React, { useEffect, useRef, useState } from "react";
import backtop from "../assets/images/BackTotop.webp";
const Backtop = () => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });
  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 1000
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });
  return (
    <div>
      <div
        onClick={() =>
          setPosition({ ...position, position: { top: 0, left: 0 } })
        }
        className="fixed hidden bottom-[1%] right-[1%] z-30 translate-y-[0%] animate-bounce"
        ref={scrollTop}
      >
        <div className=" rounded-[50%] p-[6px] sm:p-[12px] cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear] bg-[linear-gradient(306.99deg,#0A4740_-13.72%,#09655A_102.02%)] hover:bg-[linear-gradient(306.99deg,#09655A_102%,#0A4740_-13.02%)] flex justify-center items-center">
          <img
            src={backtop}
            alt="backtop"
            //   className=" bg-[white] hover:bg-[#BD7D41] duration-300 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Backtop;
