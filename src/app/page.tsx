import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import MDNote from "@/components/About/MDNote";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrimeMatrix Tanzania | Engineering Secure Digital Systems",
  description: "Integrated ICT infrastructure, cybersecurity, data-protection compliance, fintech software, project delivery and mining technology for banks, MNOs, government, and enterprise.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <MDNote />
      <Brands />
      <AboutSectionOne />
      <AboutSectionThree />
      <AboutSectionTwo />
      <Video />
    </>
  );
}
