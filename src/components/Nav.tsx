"use client";
import React, { useState } from "react";
import logo from "../../public/img/logotransparent.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {
  FaBars,
  FaTimes,
  FaCaretDown,
  FaHome,
  FaAward,
  FaBook,
  FaRocket,
} from "react-icons/fa";

import { Dropdown, Button as RizzButton } from "rizzui";
import { FaPeopleGroup } from "react-icons/fa6";

function Nav({ active }: { active: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-[74px] py-5 smd:px-5">
      <Image src={logo} alt="logo" width={192} height={109} />
      <div className="hidden slg:block">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <ul className="flex gap-5 text-black font-semibold slg:hidden">
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
      <div className="gap-5 flex items-center  slg:hidden">
        <Dropdown>
          <Dropdown.Trigger>
            <RizzButton as="span" variant="outline">
              English
              <FaCaretDown color="#999999" />
            </RizzButton>
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item>French</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button text="Login" href="https://app.myislandvisa.com" link={true} />
        <Link
          href="https://app.myislandvisa.com/register"
          className="border-primary border rounded-full py-[10px] px-[27px] text-primary font-semibold"
        >
          Register
        </Link>
      </div>
      {isOpen && (
        <div
          className={`absolute hidden slg:block right-2 top-20  bg-white  z-50 rounded-md w-[250px] p-3`}
        >
          <ul className={`flex gap-7 flex-col `}>
            <li
              className={`  ${
                active === "home" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              <Link
                href={"/"}
                onClick={toggleMenu}
                className="flex items-center gap-2"
              >
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li
              className={`${
                active === "about" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              <Link
                href={"/about"}
                className="flex items-center gap-2"
                onClick={toggleMenu}
              >
                <FaAward />
                <span>About Us</span>
              </Link>
            </li>
            <li
              className={`  ${
                active === "blog" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              <Link
                href={"/blog"}
                onClick={toggleMenu}
                className="flex items-center gap-2"
              >
                <FaBook />
                <span>Blog</span>
              </Link>
            </li>
            <li
              className={`  ${
                active === "contact" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              <Link
                href={"/contact"}
                className="flex items-center gap-2"
                onClick={toggleMenu}
              >
                <FaPeopleGroup />
                <span>Contact</span>
              </Link>
            </li>
            <li
              className={`  ${
                active === "login" ? "text-primary" : "text-secondary"
              } hover:text-primary`}
            >
              <Link
                href="https://app.myislandvisa.com"
                className="flex items-center gap-2"
              >
                <FaRocket />
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
