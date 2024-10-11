import React from "react";
import Button from "./Button";
import Image from "next/image";
import miv from "../../public/img/miv.png";
import PlayBtn from "./PlayBtn";

function Partner() {
  return (
    <section className="flex gap-[75px] items-center justify-center px-[72px] py-4 sxl:gap-[10px] lg:flex-col smd:px-5">
      <Image
        src={miv}
        alt="miv"
        className="w-[572px] flex-shrink-0  sxl:flex-shrink sxl:max-w-[572px] smd:w-full"
      />
      <div className="max-w-[660px]">
        <h3 className="text-primary font-bold mb-[18px] tracking-[2px]">
          WHY CHOOSE US
        </h3>
        <h2 className="text-center text-[40px] leading-[52px] font-light mb-[28px] text-secondary tracking-[2px]">
          Your Trusted Money Transfer Partner
        </h2>
        <p className="text-secondary text-[14px] leading-[23px] mb-[48px]">
          At My Island Visa, we are dedicated to being your reliable and secure
          financial partner. We prioritize your financial safety with advanced
          security measures and strong data protection. With a global presence
          and local expertise, we bridge borders effortlessly while
          understanding local financial systems. Our focus on efficiency ensures
          your money moves quickly and smoothly, free from cumbersome paperwork.
          Rely on our 24/7 customer support team to assist you whenever you need
          help, guaranteeing an exceptional experience.
        </p>
        <div className="flex items-center gap-[37px] ">
          <Button text="Get Started" />
          <PlayBtn />
        </div>
      </div>
    </section>
  );
}

export default Partner;
