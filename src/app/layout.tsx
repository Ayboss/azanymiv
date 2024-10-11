import type { Metadata } from "next";
import "./globals.css";
import { public_sans, urbanist, lexadeca } from "./fonts";

export const metadata: Metadata = {
  title: "My Island Visa",
  description: "My Island Visa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>

      </Head> */}
      <body
        className={`font-publicsans ${public_sans.variable} ${urbanist.variable} ${lexadeca.variable} antialiased  `}
      >
        <main className="overflow-x-hidden w-screen">{children}</main>
      </body>
    </html>
  );
}
