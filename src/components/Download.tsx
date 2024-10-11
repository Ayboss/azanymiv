import Image from "next/image";
import React from "react";
import phone from "../../public/img/iphone.png";
import person from "../../public/img/person.png";

function Download() {
  return (
    <section className="bg-visaisland bg-cover pt-[82px] pl-[80px] pb-2 flex items-start justify-center sxl:flex-col sxl:items-cente smd:px-5">
      <div className="w-[592px] md:w-full ">
        <h2 className="text-[#101828] text-[48px] leading-[72px] font-semibold mb-6">
          Download the My Island Visa App Today
        </h2>
        <p className="text-[#667085] text-[20px] leading-[30px] mb-[48px] max-w-[480px]">
          Experience seamless money transfers right from your smartphone with
          the My Island Visa mobile app. Download now and take control of your
          financial world! Available for both Android and iOS devices.
        </p>
        <div></div>
      </div>
      <div className="flex md:flex-col md:gap-10">
        <Image src={phone} alt="phone" />
        <Image src={person} alt="phone" className="self-end" />
      </div>
    </section>
  );
}

export default Download;
