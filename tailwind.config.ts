import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#013DAD",
        secondary: "#393939",
      },
      backgroundImage: {
        landingbg: "url('/img/landingpage2.png')",
        visaisland: "url('/img/visaisland.png')",
        financeside: "url('/img/financeside.svg')",
      },
      fontFamily: {
        publicsans: ["var(--font-public-sans)"],
        urbanist: ["var(--font-urbanist)"],
        lexadeca: ["var(--font-lexend)"],
      },
      boxShadow: {
        testimonial: "0px 0px 35px -1px #DBDBDB91",
        blogcard: " 0px 0px 40px -2px #CFCBCB91",
      },
      backgroundSize: {
        smaller: "130px", // Custom background size
      },
    },
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      sxl: { max: "1100px" },
      lg: { max: "1024px" },
      slg: { max: "900px" },
      md: { max: "768px" },
      smd: { max: "600px" },
      sm: { max: "425px" },
      xsm: { max: "375px" },
    },
  },
  variants: {
    extend: {
      textUnderlineOffset: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".listicon::before": {
          content: '""',
          display: "block",
          width: "11px",
          height: "11px",
          backgroundColor: "#393939",
          border: "4px solid white",
          borderRadius: "100px",
          boxShadow: " 0 0 0 1px #393939",
          boxSizing: "border-box",
        },
        ".smallunderline": {
          position: "relative",
        },
        ".smallunderline::before": {
          content: '""',
          position: "absolute",
          width: "50px",
          height: "2px",
          backgroundColor: "white",
          bottom: "-10px",
          left: "0",
        },
        ".financedesign": {
          position: "relative",
          display: "inline-block",
        },
        ".financedesign::before": {
          content: '""',
          backgroundImage: "url('/img/financeround.svg')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          width: "190%",
          height: "190%",
          bottom: "-33px",
          left: "-104px",
        },
      });
    }),
  ],
};
export default config;
