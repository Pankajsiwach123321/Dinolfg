import React, { useState } from "react";
import Faquppr from "../assets/images/FaqTopLayer.webp";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// className={`${
//   id === open ? "" : "rotate-90"
// } h-5 w-5   transition-transform`}
function OpenSign({ id, open }) {
  return (
    <div className="relative ">
      <svg
        className={`${id === open ? "rotate-180" : ""} duration-300`}
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="18"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 36 36)"
          fill="white"
        />
        <path
          d="M12.2857 14L18 19.625L23.7143 14L26 15.125L18 23L10 15.125L12.2857 14Z"
          fill="#0A4740"
        />
      </svg>
    </div>
  );
}

const Faq = () => {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="relative z-[6] bg-[#0a4740] " id="Faq">
        <div className="max-w-[800px] mx-auto px-3 relative z-[1] pt-[35px] md:pt-[150px]  sm:pb-[70px] lg:pb-[100px]">
          <div className="pt-[90px] md:pt-[130px]   pb-[12px]">
            <h2
              data-aos="fade-up"
              className="text-[64px]  font-chewy leading-[84px] font-normal text-center mb-6 md:mb-[61px] text-white"
            >
              Faq
            </h2>
            <Accordion
              className=" border-[#fff] py-3 bg-[#09655a] border mb-[26px] rounded-[40px] "
              open={open === 1}
              icon={<OpenSign id={1} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="   font-BalsamiqSans  px-5  py-1 text-base gap-2 sm:text-xl text-start font-bold  text-white leading-[24px]  border-transparent"
              >
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody className=" font-BalsamiqSans text-lg   font-bold px-5  leading-[160%]  text-[#CCD0D1] max-w-[880px] pt-2">
                En Exclusive Games, ofrecemos experiencias únicas y
                personalizadas, respaldadas por más de 15 años de dedicación al
                desarrollo de multiplataformas para juegos de azar.
              </AccordionBody>
            </Accordion>
            <Accordion
              className=" border-[#fff] py-3 bg-[#09655a] border mb-[26px] rounded-[40px]  overflow-hidden "
              open={open === 2}
              icon={<OpenSign id={2} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className=" font-BalsamiqSans  px-5  py-1 text-base gap-2 sm:text-xl text-start font-bold text-white leading-[24px] border-transparent"
              >
                {" "}
                Maecenas laoreet, sapien vel cursus ultricies?{" "}
              </AccordionHeader>
              <AccordionBody className=" font-BalsamiqSans text-base  md:text-[16px] font-medium leading-[160%] px-5  text-[#CCD0D1] max-w-[880px] pt-2">
                En Exclusive Games, ofrecemos experiencias únicas y
                personalizadas, respaldadas por más de 15 años de dedicación al
                desarrollo de multiplataformas para juegos de azar.
              </AccordionBody>
            </Accordion>
            <Accordion
              className=" border-[#80898D] py-3 bg-[#09655a] border mb-[26px] rounded-[40px] "
              open={open === 3}
              icon={<OpenSign id={3} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className=" font-BalsamiqSans  px-5  py-1 text-base gap-2 sm:text-xl text-start font-bold text-white leading-[24px] border-transparent"
              >
                {" "}
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody className=" font-BalsamiqSans text-base  md:text-[16px] font-medium leading-[160%] px-5 text-[#CCD0D1] max-w-[880px] pt-2  ">
                En Exclusive Games, ofrecemos experiencias únicas y
                personalizadas, respaldadas por más de 15 años de dedicación al
                desarrollo de multiplataformas para juegos de azar.
              </AccordionBody>
            </Accordion>
            <Accordion
              className=" border-[#fff] py-3 bg-[#09655a] border mb-[26px] rounded-[40px] "
              open={open === 4}
              icon={<OpenSign id={4} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className=" font-BalsamiqSans  px-5  py-1 text-base gap-2 sm:text-xl text-start font-bold text-white leading-[24px] border-transparent"
              >
                Maecenas laoreet, sapien vel cursus ultricies?{" "}
              </AccordionHeader>
              <AccordionBody className=" font-BalsamiqSans text-base  md:text-[16px] font-medium leading-[160%] px-5 text-[#CCD0D1] max-w-[880px] pt-2  ">
                En Exclusive Games, ofrecemos experiencias únicas y
                personalizadas, respaldadas por más de 15 años de dedicación al
                desarrollo de multiplataformas para juegos de azar.
              </AccordionBody>
            </Accordion>
            <Accordion
              className=" border-[#fff] py-3 bg-[#09655a] border mb-[26px] rounded-[40px]  "
              open={open === 5}
              icon={<OpenSign id={5} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className=" font-BalsamiqSans  px-5  py-1 text-base gap-2 sm:text-xl text-start font-bold text-white leading-[24px]  border-transparent"
              >
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody className=" font-BalsamiqSans text-base  md:text-[16px] px-5 font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2  ">
                En Exclusive Games, ofrecemos experiencias únicas y
                personalizadas, respaldadas por más de 15 años de dedicación al
                desarrollo de multiplataformas para juegos de azar.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <img className="absolute top-0 " src={Faquppr} alt="" />
      </div>
    </>
  );
};

export default Faq;
