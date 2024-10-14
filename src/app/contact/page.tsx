import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";
import location from "../../../public/img/location.svg";
import phone from "../../../public/img/phoneicon.svg";
import clock from "../../../public/img/clock.svg";
import contactemail from "../../../public/img/contactmail.png";
import Image, { StaticImageData } from "next/image";

function Card({
  title,
  value,
  valuebottom,
  image,
}: {
  title: string;
  value: string;
  valuebottom?: string;
  image: StaticImageData;
}) {
  return (
    <div className="border border-primary rounded-[10px] p-[31px] flex gap-5 items-start flex-1 sm:p-5">
      <div className="bg-primary rounded-lg flex justify-center items-center w-[70px] h-[70px] flex-shrink-0">
        <Image src={image} alt="icon" />
      </div>
      <div>
        <p className="text-[17px] text-secondary font-light mb-[10px]">
          {title}
        </p>
        <p className="text-[15px] text-secondary font-extralight mb-1 ">
          {value}
        </p>
        {valuebottom && (
          <p className="text-[15px] text-secondary font-extralight ">
            {valuebottom}
          </p>
        )}
      </div>
    </div>
  );
}
function page() {
  return (
    <main>
      <Nav active="contact" />
      <section className="flex gap-6 px-[72px] mt-[63px] mb-[100px] flex-wrap slg:p-5">
        <Card title="Address" value="text address" image={location} />
        <Card
          title="Contact"
          value="Mobile: (+1) - 23355 - 8674"
          valuebottom="E-mail: hello@example.com"
          image={phone}
        />
        <Card
          title="Hours of Operation"
          value="Monday - Friday: 10:00 - 20:00"
          valuebottom="Sunday & Saturday: 9:30 - 22:00"
          image={clock}
        />
      </section>
      <section className="mb-[100px] px-[60xp]  ">
        <h2 className="text-center text-primary tracking-[2px] font-bold mb-5">
          CONTACT US
        </h2>
        <h3 className="text-center font-semibold text-secondary text-[40px] mb-[35px] ">
          Get In Touch With Us
        </h3>
        <div className="flex justify-center items-center gap-[84px] px-5 lg:gap-5 slg:flex-col slg:p-5">
          <Image src={contactemail} alt="email" className="object-cover" />
          <form action="">
            <div className="flex gap-6 mb-[15px] smd:flex-col smd:gap-[15px]">
              <input
                type="text"
                placeholder="Name.."
                className="border border-[#39393933] px-[25px] py-[13px] rounded-[15px] flex-1"
              />
              <input
                type="text"
                placeholder="Email.."
                className="border border-[#39393933] px-[25px] py-[13px] rounded-[15px] flex-1"
              />
            </div>
            <input
              type="text"
              placeholder="Subject.."
              className="border border-[#39393933] px-[25px] py-[13px] rounded-[15px] mb-[15px] w-full"
            />
            <textarea
              className="border border-[#39393933] px-[25px] py-[13px] rounded-[15px] mb-[15px] w-full h-[118px]"
              placeholder="Message..."
            />
            <button className="bg-primary text-center text-white p-[14px] text-[15px] rounded-full w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default page;
