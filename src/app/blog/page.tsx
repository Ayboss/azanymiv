"use client";
import Nav from "@/components/Nav";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import blog1 from "../../../public/img/blog1.png";
import blog2 from "../../../public/img/blog2.png";
import blog3 from "../../../public/img/blog3.png";
import Footer from "@/components/Footer";
import { FaArrowRight } from "react-icons/fa";
import useInView from "@/hooks/useInView";
import { motion } from "framer-motion";

function Card({
  image,
  title,
  text,
}: {
  image: StaticImageData;
  title: string;
  text: string;
}) {
  const ref = useRef<any>(null);
  const inview = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inview ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="rounded-[10px] overflow-hidden shadow-blogcard flex-1 max-w-[400px] min-w-[330px] flex flex-col sm:min-w-full"
    >
      <Image src={image} alt="blog" className="h-[266px] w-full object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[24px] leading-[31px] font-extralight mb-4">
          {title}
        </h3>
        <p className="text-secondary text-[14px] leading-[23px] mb-2 flex-1">
          {text}
        </p>
        <Link
          href={"/blog/123412342141"}
          className="text-[#142E5E] italic font-medium text-[15px] flex gap-[13px] items-center transition-all duration-300 hover:gap-[13px] group"
        >
          Read More
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 font-light" />
        </Link>
      </div>
    </motion.div>
  );
}

function page() {
  return (
    <main>
      <Nav active="blog" />
      <section className="px-5">
        <h2 className="text-center text-primary tracking-[2px] font-bold mb-5 mt-[63px]">
          BLOG POSTS
        </h2>
        <h3 className="text-center font-semibold text-secondary text-[40px] mb-[63px]">
          Read Our Recent Blog Posts
        </h3>
        <div className="flex gap-12 justify-center px-[60px] flex-wrap mb-[120px] md:px-0">
          <Card
            title="How My Island Visa Simplifies Global Money Transfers"
            text="International money transfers can often be a complicated and time-consuming process, but My Island Visa is changing the game...."
            image={blog1}
          />

          <Card
            title="Top 5 Tips for Safe and Secure International Money Transfers..."
            text="When sending money across borders, security is a top concern..."
            image={blog2}
          />

          <Card
            title="The Benefits of Mobile Money Transfers with My Island Visa..."
            text="As the world becomes more connected, mobile money is revolutionizing the way people manage and transfer funds."
            image={blog3}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default page;
