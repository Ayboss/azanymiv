import React from "react";
import logo from "../../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
// import { Dropdown, Button as RizzButton } from "rizzui";

function Nav({ active }: { active: string }) {
  return (
    <nav className="flex justify-between items-center px-[74px] py-5">
      <Image src={logo} alt="logo" width={140} height={41} />
      <ul className="flex gap-5 text-black font-semibold">
        <li
          className={`${
            active == "home" ? "text-primary" : "text-black"
          } hover:text-primary`}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={`${
            active == "about" ? "text-primary" : "text-black"
          } hover:text-primary`}
        >
          <Link href={"/about"}>About Us</Link>
        </li>
        <li
          className={`${
            active == "blog" ? "text-primary" : "text-black"
          } hover:text-primary`}
        >
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li
          className={`${
            active == "contact" ? "text-primary" : "text-black"
          } hover:text-primary`}
        >
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div>
        {/* <Dropdown>
          <Dropdown.Trigger>
            <RizzButton as="span" variant="outline">
              English
            </RizzButton>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item>French</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <Button text="Login" />
      </div>
    </nav>
  );
}

export default Nav;
