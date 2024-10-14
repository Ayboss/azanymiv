import React from "react";
import Image, { StaticImageData } from "next/image";
import phone from "../../public/img/phone.svg";
import pics from "../../public/img/pics.svg";
import rocket from "../../public/img/rocket.svg";
import mivphone from "../../public/img/mivphone.png";
import slantphone from "../../public/img/slantphone.png";
import img1 from "../../public/img/img1.png";
import img2 from "../../public/img/img2.png";
import img3 from "../../public/img/img3.png";

function Card({
  text,
  image,
  name,
  job,
  small = false,
}: {
  text: string;
  image: StaticImageData;
  name: string;
  job: string;
  small?: boolean;
}) {
  return (
    <div
      className={`pl-[30px] ${
        small ? "pt-[40px]" : "pt-[45px]"
      } pr-[40px] pb-[30px] rounded-[10px] shadow-testimonial flex-1 max-w-[412px] min-w-[300px]`}
    >
      <p
        className={` ${
          small ? "mb-[30px]" : "mb-[48px]"
        } text-secondary text-[14px] font-light`}
      >
        "{text}"
      </p>
      <div className="flex gap-4 items-center">
        <Image
          src={image}
          alt="testinmonial"
          className="w-[60px] h-[60px] rounded-full"
        />
        <div>
          <p className="mb-2 text-[18px]">{name}</p>
          <p className="text-secondary text-[14px]">{job}</p>
        </div>
      </div>
    </div>
  );
}
function Testimonial() {
  return (
    <>
      <section className="flex items-center gap-[63px] p-[60px] justify-center slg:flex-col smd:px-5">
        <Image
          src={slantphone}
          alt="miv phone"
          className="w-[636px] h-[855px] lg:w-[400px] lg:h-auto smd:w-full"
        />
        <div className="p-3">
          <h3 className="text-primary font-bold mb-[18px] tracking-[2px]">
            HOW IT WORKS
          </h3>
          <h2 className="text-center text-[40px] leading-[52px] font-light mb-[28px] text-secondary tracking-[2px]">
            The Smart Choice For Fast <br /> And <br /> Secure Remittances
          </h2>
          <div className="text-secondary text-[14px] leading-[23px] mb-10">
            <p>Getting started with My Island Visa is simple:</p>
            <ol>
              <li>
                1. Create Your Account Provide basic information and set up
                secure login credentials
              </li>
              <li>
                2. Choose Transfer Method Select your preferred transfer
                option—international remittance, bank transfer, or mobile
                money—and enter the recipient’s details along with the transfer
                amount.
              </li>
              <li>
                3. Confirm and Pay Review your transaction for accuracy, make a
                secure payment using your chosen method, and let My Island Visa
                handle the rest. Receive instant confirmation and real-time
                tracking, ensuring your money is on its way safely and
                conveniently.
              </li>
            </ol>
          </div>
          <div className="flex gap-7 flex-wrap">
            <div className="min-w-[195px] flex-1">
              <Image src={phone} alt="phone" />
              <h5 className="mb-[18px] mt-[15px] font-light text-[20px] leadding-[26px]">
                Create Your Account
              </h5>
              <p className="text-secondary text-[14px]">
                Just provide your basic information and set up your secure login
                credentials.
              </p>
            </div>
            <div className="min-w-[195px] flex-1">
              <Image src={pics} alt="phone" />
              <h5 className="mb-[18px] mt-[15px] font-light text-[20px] leadding-[26px]">
                Choose Transfer Method
              </h5>
              <p className="text-secondary text-[14px]">
                Select the transfer method that suits your needs –and enter the
                recipient’s details and the amount you wish to send.
              </p>
            </div>
            <div className="min-w-[195px] flex-1">
              <Image src={rocket} alt="phone" />
              <h5 className="mb-[18px] mt-[15px] font-light text-[20px] leadding-[26px]">
                Confirm and Pay
              </h5>
              <p className="text-secondary text-[14px]">
                Review your transaction details, ensuring accuracy. Make a
                secure payment using your preferred method
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[60px] pt-[60px] smd:px-5">
        <h3 className="text-primary font-bold mb-[16px] tracking-[2px] text-center">
          CLIENTS TESTIMONIALS
        </h3>
        <p className="text-secondary font-light text-[40px] mb-[60px] text-center">
          What Our Clients Say
        </p>
        <div className="flex px-3 pb-[70px] gap-[30px] justify-center items-start flex-wrap">
          <Card
            text="As a business owner, I depend on My Island Visa Pro for international
        transactions. The security features and quick bank transfers have saved
        me time and reduced stress. It’s a game-changer!"
            image={img1}
            name="John Anderson"
            job="Entrepreneur"
          />
          <Card
            text="As a business owner, I depend on My Island Visa Pro for international
        transactions. The security features and quick bank transfers have saved
        me time and reduced stress. It’s a game-changer!"
            image={img2}
            name="John Anderson"
            job="Entrepreneur"
            small
          />
          <Card
            text="As a business owner, I depend on My Island Visa Pro for international
        transactions. The security features and quick bank transfers have saved
        me time and reduced stress. It’s a game-changer!"
            image={img3}
            name="John Anderson"
            job="Entrepreneur"
          />
        </div>
      </section>
    </>
  );
}

export default Testimonial;
