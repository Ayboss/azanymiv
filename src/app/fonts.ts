import { Public_Sans, Urbanist, Lexend_Deca } from "next/font/google";

export const public_sans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});
export const lexadeca = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["700", "600", "500", "400", "300", "200", "100"],
});
