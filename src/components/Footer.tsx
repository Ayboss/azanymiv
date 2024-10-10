import Link from "next/link";
import React from "react";
import logo from "../../public/img/logo.png";
import instagram from "../../public/img/instagram.svg";
import linkedin from "../../public/img/linkedln.svg";
import facebook from "../../public/img/facebook.svg";
import twitter from "../../public/img/twitter.svg";
import Image from "next/image";
function Footer() {
  return (
    <footer>
      <div className="bg-[#102A5BFA] text-white flex items-start gap-[30px] px-[72px] py-[100px]">
        <div className="w-[412px]">
          <Image src={logo} alt="logo" width={140} height={40} />
          <p className="text-[14px] font-light my-[14px]">
            We have compared and reviewed the best money transfer websites and
            apps based on features, fees, and transfer remittance options,
            offering a secure payment solution with My Island Visa.
          </p>
          <p className="font-bold text-[20px] mb-5">Follow us</p>
          <div className="flex gap-[18px] items-center">
            <Link
              href="#"
              className="w-[40px] h-[40px] bg-primary flex justify-center items-center rounded-full"
            >
              <Image alt="logo" src={instagram} />
            </Link>
            <Link
              href="#"
              className="w-[40px] h-[40px] bg-primary flex justify-center items-center rounded-full"
            >
              <Image alt="logo" src={linkedin} />
            </Link>
            <Link
              href="#"
              className="w-[40px] h-[40px] bg-primary flex justify-center items-center rounded-full"
            >
              <Image alt="logo" src={facebook} />
            </Link>
            <Link
              href="#"
              className="w-[40px] h-[40px] bg-primary flex justify-center items-center rounded-full"
            >
              <Image alt="logo" src={twitter} />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-[20px] smallunderline mb-[37px]">Useful Links</h4>
          <ul>
            <li>
              <Link
                href={""}
                className="font-light text-[14px] underline text-underline-offset-1"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[20px] smallunderline mb-[37px]">Subscribe</h4>
          <p className="text-[14px] font-light mb-[13px]">
            Don’t miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <div className="bg-white rounded-full overflow-hidden flex w-[415px]">
            <input
              type="text"
              placeholder="Email Address"
              className="py-[15px] px-[28px] flex-1"
            />
            <button className="w-[60px] border-none bg-primary">ds</button>
          </div>
        </div>
      </div>
      <div className="p-[15px] text-center bg-primary text-white font-light">
        Copyright © 2024, All Rights Reserved 
      </div>
    </footer>
  );
}

export default Footer;
