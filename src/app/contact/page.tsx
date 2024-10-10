import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";
import location from "../../../public/img/location.svg";
import phone from "../../../public/img/phoneicon.svg";
import clock from "../../../public/img/clock.svg";
import contactemail from "../../../public/img/contactmail.png";
import Image from "next/image";

function Card() {
  return (
    <div className="border border-primary rounded-[10px] p-[31px] flex gap-5 items-start flex-1 ">
      <div className="bg-primary rounded-lg flex justify-center items-center w-[70px] h-[70px]">
        <Image src={location} alt="icon" />
      </div>
      <div>
        <p className="text-[17px] text-secondary font-light mb-[14px]">
          Address
        </p>
        <p className="text-[15px] text-secondary font-extralight ">
          text address
        </p>
      </div>
    </div>
  );
}
function page() {
  return (
    <main>
      <Nav active="contact" />
      <section className="flex gap-6 px-[72px] mt-[63px] mb-[100px]">
        <Card />
        <Card />
        <Card />
      </section>
      <section className="mb-[100px] px-[60xp]">
        <h2 className="text-center text-primary tracking-[2px] font-bold mb-5">
          CONTACT US
        </h2>
        <h3 className="text-center font-semibold text-secondary text-[40px] mb-[35px]">
          Get In Touch With Us
        </h3>
        <div className="flex justify-center items- gap-[84px]">
          <Image src={contactemail} alt="email" />
          <form action="">
            <div className="flex gap-6 mb-[15px]">
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
