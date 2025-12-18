import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
    </>
  );
};

export default page;
