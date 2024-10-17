import React from "react";
import Image, { StaticImageData } from "next/image";
import ghana from "../../public/img/countries/ghana.png";
import usa from "../../public/img/countries/usa.svg";
import spain from "../../public/img/countries/spain.png";
import ngn from "../../public/img/countries/ngn.png";
import uk from "../../public/img/countries/uk.png";

import canada from "../../public/img/countries/canada.png";
function Countrycard({
  image,
  name,
  rate,
}: {
  image: StaticImageData;
  name: string;
  rate: string;
}) {
  return (
    <div className="py-3 px-[10px] bg-white rounded-[10px] w-[207px] items-start flex gap-2">
      <Image src={image} className="w-8 h-8" alt="country" />
      <div>
        <p className="text-primary font-thin text-xs mb-[10px]">{name}</p>
        <p className="text-secondary text-xs">{rate}</p>
      </div>
    </div>
  );
}

const countriesrate = [
  {
    image: usa,
    name: "United States",
    rate: "1 GHS = 0.07 USD",
  },
  {
    image: spain,
    name: "Spain",
    rate: "1 GHS = 0.07 EUR",
  },
  {
    image: canada,
    name: "Canada",
    rate: "1 GHS = 0.1 CAD",
  },
  {
    image: uk,
    name: "United Kingdom",
    rate: "1 GHS = 0.06 GBP",
  },
  {
    image: ngn,
    name: "Nigeria",
    rate: "1 GHS = 54.29 NGN",
  },
];

function FxRates() {
  return (
    <section className="bg-primary text-white py-[80px] px-6 smd:px-5">
      <h2 className="mb-[82px] text-center font-light text-[40px]">
        Stay Ahead Globally: Real-Time Forex Rates at Your Fingertips.
      </h2>

      <div className="flex flex-col justify-center items-center gap-6">
        <label className="block text-center" htmlFor="country">
          Select Country
        </label>
        <div className="w-[329px] bg-white py-[7px] rounded-[8px] mb-[55px] flex px-[15px] items-center">
          <Image src={ghana} alt="country" className="w-8 h-8" />
          <input
            id="country"
            className="w-full border-none flex-1 text-secondary"
            defaultValue={"Ghana"}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <p className="text-[20px] mb-6">Sending Country</p>
          <div
            className="flex gap-6 flex-wrap 
            "
          >
            {[...countriesrate].map((data, i) => (
              <Countrycard
                key={i}
                image={data.image}
                rate={data.rate}
                name={data.name}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-[20px] mb-6">Receiving Country</p>
          <div
            className="flex gap-6 flex-wrap 
            "
          >
            {[...countriesrate, ...countriesrate].map((data, i) => (
              <Countrycard
                key={i}
                image={data.image}
                rate={data.rate}
                name={data.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FxRates;
