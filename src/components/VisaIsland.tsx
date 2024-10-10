import React from "react";
import fast_trans from "../../public/img/fast_transfer.svg";
import flex_options from "../../public/img/flexible_options.svg";
import app_integration from "../../public/img/app_intgration.svg";
import art_security from "../../public/img/art_security.svg";
import trans_track from "../../public/img/trans_track.svg";
import cust_support from "../../public/img/cust_support.svg";
import Image from "next/image";

function Card({
  image,
  heading,
  text,
}: {
  image: string;
  heading: string;
  text: string;
}) {
  return (
    <div className="flex-1 min-w-[350px] py-[40px] px-[15px] bg-white rounded-[10px] flex  items-start gap-3">
      <Image src={image} alt="card" className="w-[88px] h-[85px]" />
      <div className="">
        <h5 className="text-primary text-[20px] mb-[10px] tracking-[1px]">
          {heading}
        </h5>
        <p className="text-[#0B1131] font-light leading-[22px] text-[13px] ">
          {text}
        </p>
      </div>
    </div>
  );
}

function VisaIsland() {
  return (
    <div className="p-[60px]  bg-visaisland bg-cover">
      <h3 className="text-primary font-bold mb-[22px] text-center">
        OUR FEATURES
      </h3>
      <h4 className="text-[40px] mb-[59px] text-center font-light text-secondary  ">
        My Island Visa - Security And Efficiency
      </h4>
      <div className="flex gap-4 items-start flex-wrap">
        <Card
          text="Send money worldwide with incredible speed. Enjoy quick and secure
      international remittances for seamless cross-border transactions."
          heading="Fast International Transfers"
          image={fast_trans}
        />
        <Card
          text="Choose from various payment methods including bank transfers, credit/debit cards, and digital wallets. Enjoy the flexibility to pay in the way that’s most convenient for you."
          heading="Flexible Payment Options"
          image={flex_options}
        />
        <Card
          text="Seamlessly manage your transfers on the go with our fully integrated mobile app. Enjoy all the features of My Island Visa  right from your smartphone, anytime and anywhere."
          heading="Mobile App Integration"
          image={app_integration}
        />
        <Card
          text="Rely on robust security with two-factor authentication (2FA) and dedicated customer support. Trust our top-tier security measures and responsive assistance."
          heading="State of the Art Security"
          image={art_security}
        />
        <Card
          text="Stay updated with live transaction tracking. Monitor your money’s journey in real-time, providing peace of mind."
          heading="Real-time Transaction
Tracking"
          image={trans_track}
        />
        <Card
          text="Whether you have questions, need help with a transfer, or require technical support, our knowledgeable and friendly staff are available 24/7 to ensure your experience is seamless and stress-free."
          heading="Dedicated Customer Support"
          image={cust_support}
        />
      </div>
    </div>
  );
}

export default VisaIsland;
