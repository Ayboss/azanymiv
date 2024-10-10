import { Public_Sans } from "next/font/google";

export const public_sans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});
