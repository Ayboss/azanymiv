"use client";
import React, { useState } from "react";
import logo from "../../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";

import { Dropdown, Button as RizzButton } from "rizzui";

function Nav({ active }: { active: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-[74px] py-5 smd:px-5">
      <Image src={logo} alt="logo" width={140} height={41} />
      <div className="hidden md:block">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <ul className="flex gap-5 text-black font-semibold md:hidden">
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
      <div className="gap-5 flex items-center  md:hidden">
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

        <Button text="Login" />
      </div>
      {isOpen && (
        <div
          className={`absolute bg-visaisland  right-0 top-0 w-full h-screen bg-red-50 flex-col items-center justify-center flex transform   z-50`}
          style={{ transition: "all 0.3s ease-in-out" }}
        >
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="absolute top-5 right-5 "
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <ul className={`flex gap-3 flex-col mb-10`}>
            <li
              className={` text-[20px] ${
                active === "home" ? "text-primary" : "text-black"
              } hover:text-primary`}
            >
              <Link href={"/"} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li
              className={`text-[20px] ${
                active === "about" ? "text-primary" : "text-black"
              } hover:text-primary`}
            >
              <Link href={"/about"} onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li
              className={` text-[20px] ${
                active === "blog" ? "text-primary" : "text-black"
              } hover:text-primary`}
            >
              <Link href={"/blog"} onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li
              className={` text-[20px] ${
                active === "contact" ? "text-primary" : "text-black"
              } hover:text-primary`}
            >
              <Link href={"/contact"} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="gap-5 flex items-center ">
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

            <Button text="Login" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
