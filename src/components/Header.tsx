import React from "react";

import Button from "./Button";
import RateCalculator from "./RateCalculator";
import Nav from "./Nav";

import PlayBtn from "./PlayBtn";

function Header() {
  return (
    <header className="bg-landingbg bg-cover pb-[150px]">
      <Nav active="home" />
      <div className="max-w-[1434px] m-auto px-[74px] mt-[63px] smd:px-5 ">
        <div className="flex gap-2  items-center justify-between  lg:flex-col lg:gap-20 ">
          <div className="max-w-[665px]">
            <h2 className="text-[55px] font-extrabold leading-[71px] max-w-[464px]">
              Effortless Global Money Transfers
            </h2>
            <p className="font-medium leading-8 text-[#393939] mb-5">
              At My Island Visa, we are dedicated to uniting hearts and
              empowering dreams through secure, fast, and reliable money
              transfers. Whether you're supporting family overseas or managing
              international business transactions, our state-of-the-art
              remittance solution is your dependable partner.
            </p>
            <div className="flex items-center gap-[37px] ">
              <Button text="Join Today" />
              <PlayBtn />
            </div>
          </div>
          <RateCalculator />
        </div>
      </div>
    </header>
  );
}

export default Header;
