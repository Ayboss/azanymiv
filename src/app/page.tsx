import Image from "next/image";
import FxRates from "@/components/FxRates";
import Header from "@/components/Header";
import VisaIsland from "@/components/VisaIsland";
import Testimonial from "@/components/Testimonial";
import Download from "@/components/Download";
import Partner from "@/components/Partner";
import FinancialConcepts from "@/components/FinancialConcepts";
import Footer from "@/components/Footer";
import CardSwiper from "@/components/CardSwiper";

export default function Home() {
  return (
    <>
      <Header />
      <FxRates />
      <VisaIsland />
      <Testimonial />
      <Download />
      <Partner />
      <FinancialConcepts />
      <CardSwiper />
      <Footer />
    </>
  );
}
