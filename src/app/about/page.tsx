import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";
import about from "../../../public/img/about.png";
import miv from "../../../public/img/miv.png";
import Image from "next/image";
function page() {
  return (
    <main>
      <Nav active="about" />

      <section className="flex justify-center gap-2 items-end px-[60px] mt-[63px] mb-[10px] sxl:mb-40 slg:flex-col slg:items-center slg:gap-20 slg:px-5">
        <div className="max-w-[646px] translate-y-8">
          <h1 className="font-semibold text-secondary text-[40px] mb-3">
            About Us
          </h1>
          <p className="font-light text-[17px] text-secondary leading-7 mb-5">
            Welcome to My Island Visa - the Caribbean's first smart card
            designed to enhance your travel <br /> experience! We are dedicated
            to providing a seamless payment solution that caters not only to the{" "}
            <br /> locals but also to visitors who cherish the beauty and
            culture of the Caribbean.
          </p>
          <h3 className="font-semibold text-secondary text-[20px] mb-3">
            Our Vision
          </h3>
          <p className="font-light text-[17px] text-secondary leading-7 mb-5">
            At My Island Visa, we believe that exploring the Caribbean should be
            effortless and enjoyable. Our innovative reloadable debit card
            allows you to hold up to five different currencies in a single
            account, making transactions easier than ever. Whether you're
            shopping at local markets, dining at exquisite restaurants, or
            enjoying various attractions, My Island Visa empowers you to manage
            your spending with convenience and flexibility.
          </p>
        </div>
        <Image
          src={about}
          alt="about"
          className="w-[528px] h-[500px] sxl:w-[400px] sxl:h-auto"
        />
      </section>
      <section className="flex justify-center items-end gap-[75px] mb-[72px] sxl:px-5 slg:flex-col slg:items-center slg:gap-20">
        <Image
          src={miv}
          alt="miv"
          className="w-[572px] flex-shrink-0 sxl:w-[400px]"
        />
        <div className="max-w-[636px]">
          <h2 className="font-semibold text-secondary text-[30px] mb-3">
            Our Commitment to the Caribbean
          </h2>
          <p className="font-light text-[17px] text-secondary leading-7 mb-5">
            We are deeply committed to the Caribbean and its vibrant
            communities. Our mission is to support local economies by providing
            visitors with a reliable and efficient payment solution that
            encourages exploration and engagement. We understand the unique
            needs of travelers in this beautiful region, and we strive to
            enhance their experience while fostering connections with local
            businesses.
          </p>
          <h2 className="font-semibold text-secondary text-[30px] mb-3">
            Customer-Centric Service
          </h2>
          <p className="font-light text-[17px] text-secondary leading-7 mb-5">
            We pride ourselves on our customer service. That's why My Island
            Visa is available 24/7, ensuring that you can access your funds and
            support whenever you need it. Our dedicated team is here to assist
            you, answering questions and providing guidance to ensure a smooth
            and enjoyable experience.
          </p>
          <p className="font-light text-[17px] text-secondary leading-7 mb-5">
            Join us at My Island Visa, where your Caribbean adventure begins
            with a smarter way to pay!
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default page;
