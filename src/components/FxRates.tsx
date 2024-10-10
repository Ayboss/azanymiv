import React from "react";
import Image from "next/image";
// import usa from "@public/img/countrys/usa.svg";
import usa from "../../public/img/countries/usa.svg";
function Countrycard() {
  return (
    <div className="py-3 px-[10px] bg-white rounded-[10px] w-[207px] items-start flex gap-2">
      <Image src={usa} className="w-8 h-8" alt="country" />
      <div>
        <p className="text-primary font-thin text-xs mb-[10px]">
          United States
        </p>
        <p className="text-secondary text-xs">1 GHS = 0.07 EUR</p>
      </div>
    </div>
  );
}

function FxRates() {
  return (
    <section className="bg-primary text-white py-[80px] px-6">
      <h2 className="mb-[82px] text-center font-light text-[40px]">
        Monitoring Real-time Foreign Exchange (FX) Rates Worldwide.
      </h2>

      <div className="flex flex-col justify-center items-center gap-6">
        <label className="block text-center" htmlFor="country">
          Select Country
        </label>
        <div className="w-[329px] bg-white py-[7px] rounded-[8px] mb-[55px]">
          <input id="country" className="w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <p className="text-[20px] mb-6">Sending Country</p>
          <div
            className="flex gap-6 flex-wrap 
            "
          >
            {[...Array(8)].map(() => (
              <Countrycard />
            ))}
          </div>
        </div>
        <div>
          <p className="text-[20px] mb-6">Receiving Country</p>
          <div
            className="flex gap-6 flex-wrap 
            "
          >
            {[...Array(38)].map(() => (
              <Countrycard />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FxRates;
