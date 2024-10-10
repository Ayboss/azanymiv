import React from "react";

import Button from "./Button";
import RateCalculator from "./RateCalculator";
import Nav from "./Nav";
import Image from "next/image";
import play from "../../public/img/play.svg";
function Header() {
  return (
    <header className="bg-landingbg bg-cover pb-[150px]">
      <Nav active="home" />
      <div className="flex gap-2 px-[74px] items-center justify-between mt-[63px] ">
        <div className="max-w-[665px]">
          <h2 className="text-[55px] font-extrabold leading-[71px] max-w-[464px]">
            Effortless Global Money Transfers
          </h2>
          <p className="font-medium leading-8 text-[#393939] mb-5">
            At My Island Visa, we are dedicated to uniting hearts and empowering
            dreams through secure, fast, and reliable money transfers. Whether
            you're supporting family overseas or managing international business
            transactions, our state-of-the-art remittance solution is your
            dependable partner.
          </p>
          <div className="flex items-center gap-[37px] ">
            <Button text="Join Today" />
            <button className="bg-[#0115AD] w-[50px] h-[50px] rounded-full grid place-content-center">
              <Image src={play} alt="plau" />
            </button>
          </div>
        </div>
        <RateCalculator />
      </div>
    </header>
  );
}

export default Header;
