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
        landingbg: "url('/img/landingpage.png')",
        visaisland: "url('/img/visaisland.png')",
        financeside: "url('/img/financeside.svg')",
      },
      fontFamily: {
        publicsans: ["var(--font-public-sans)"],
      },
      boxShadow: {
        testimonial: "0px 0px 35px -1px #DBDBDB91",
        blogcard: " 0px 0px 40px -2px #CFCBCB91",
      },
    },
  },
  variants: {
    extend: {
      textUnderlineOffset: ["hover", "focus"],
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      require("@tailwindcss/forms"),
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
