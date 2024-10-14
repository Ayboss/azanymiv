"use client";
import React, { useRef } from "react";
import finra from "../../public/img/finra.png";
import share from "../../public/img/shares.png";
import mifid from "../../public/img/mifid.png";
import banker from "../../public/img/banker.png";
import Image, { StaticImageData } from "next/image";
import CardSwiper from "./CardSwiper";
import useInView from "@/hooks/useInView";
import { motion } from "framer-motion";
import ReadmoreLink from "./ReadmoreLink";
function Card({
  type,
  heading,
  image,
}: {
  type: string;
  heading: string;
  image: StaticImageData;
}) {
  const ref = useRef<any>(null);
  const inview = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inview ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="flex-1 bg-[#013DAD1F] min-w-[378px] min-h-[234px] md:w-full md:min-w-0 "
    >
      <div className="pt-[25px] px-[34px] max-w-[378px] min-h-[234px] md:w-full">
        <h3 className="text-primary font-bold tracking-[2px] mb-3 font-urbanist">
          {type}
        </h3>
        <p className="font-bold text-[29px] leading-[36px] font-urbanist">
          {heading}
        </p>
      </div>
      <Image src={image} alt="card" className="w-full object-cover" />
    </motion.div>
  );
}
function FinancialConcepts() {
  return (
    <div className="bg-[#FAFAFA]">
      <CardSwiper />
      <section className=" py-[27px] px-[80px] bg-financeside bg-no-repeat bg-right-top smd:px-5 sxl:bg-smaller">
        <h3 className="text-primary font-bold tracking-[2px] text-center">
          BLOGS
        </h3>
        <h2 className="text-center text-[48px] leading-[52px] font-light mb-[60px] text-secondary tracking-[2px] max-w-[961px] m-auto">
          Important Concepts and Topics on{" "}
          <span className="financedesign">Finance</span> and Financial Analysis.
        </h2>
        <div className="bg-[#013DAD1F] flex justify-between mb-[31px] slg:flex-col">
          <div className="py-8 px-[30px] w-[594px] md:w-full">
            <h5 className="text-primary font-bold tracking-[2px] mb-3 font-urbanist">
              INVESTMENT
            </h5>
            <h4 className="font-bold text-[29px] font-urbanist">
              Financial Industry Regulatory Authority (FINRA)
            </h4>
            <p className="text-[#808080] leading-[28px] font-light mb-[30px] font-lexadeca">
              The Financial Industry Regulatory Authority (or FINRA) is a
              non-governmental organization that...
            </p>

            <ReadmoreLink />
          </div>

          <Image
            src={finra}
            className="w-[530px] slg:w-full object-cover"
            alt="finra"
          />
        </div>
        <div className="flex gap-[30px] flex-wrap md:flex-nowrap md:flex-col">
          <Card
            type="BEST PRACTICES"
            heading="Dividend vs Share Buyback/Repurchase"
            image={share}
          />
          <Card
            type="Capital market"
            heading="Markets in Financial Instruments Directive (MiFID)"
            image={mifid}
          />
          <Card
            type="Analysis"
            heading="Infinite Banking – Becoming Your Own Banker"
            image={banker}
          />
        </div>
      </section>
    </div>
  );
}

export default FinancialConcepts;
