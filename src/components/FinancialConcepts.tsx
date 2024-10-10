import Link from "next/link";
import React from "react";
import finra from "../../public/img/finra.png";
import share from "../../public/img/shares.png";
import mifid from "../../public/img/mifid.png";
import banker from "../../public/img/banker.png";
import Image, { StaticImageData } from "next/image";
function Card({
  type,
  heading,
  image,
}: {
  type: string;
  heading: string;
  image: StaticImageData;
}) {
  return (
    <div className="flex-1 bg-[#013DAD1F] min-w-[378px] min-h-[234px] ">
      <div className="pt-[25px] px-[34px] max-w-[378px] min-h-[234px]">
        <h3 className="text-primary font-bold tracking-[2px] mb-3">{type}</h3>
        <p className="font-bold text-[29px] leading-[36px]">{heading}</p>
      </div>
      <Image src={image} alt="card" className="w-full object-cover" />
    </div>
  );
}
function FinancialConcepts() {
  return (
    <section className="bg-[#FAFAFA] py-[27px] px-[80px] bg-financeside bg-no-repeat bg-right-top ">
      <h3 className="text-primary font-bold tracking-[2px] text-center">
        BLOGS
      </h3>
      <h2 className="text-center text-[48px] leading-[52px] font-light mb-[60px] text-secondary tracking-[2px] max-w-[961px] m-auto">
        Important Concepts and Topics on{" "}
        <span className="financedesign">Finance</span> and Financial Analysis.
      </h2>
      <div className="bg-[#013DAD1F] flex justify-between mb-[31px]">
        <div className="py-8 px-[30px] w-[594px]">
          <h5 className="text-primary font-bold tracking-[2px] mb-3">
            INVESTMENT
          </h5>
          <h4 className="font-bold text-[29px]">
            Financial Industry Regulatory Authority (FINRA)
          </h4>
          <p className="text-[#808080] leading-[28px] font-light mb-[30px]">
            The Financial Industry Regulatory Authority (or FINRA) is a
            non-governmental organization that...
          </p>
          <Link
            className="text-primary font-semibold flex gap-[13px]"
            href={"#"}
          >
            Read More
          </Link>
        </div>

        <Image src={finra} className="w-[530px] object-cover" alt="finra" />
      </div>
      <div className="flex gap-[30px] flex-wrap">
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
  );
}

export default FinancialConcepts;
