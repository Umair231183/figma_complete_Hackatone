import Cards from "@/components/Cards";
import Ceramics from "@/components/Ceramics";
import End from "@/components/End";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <Ceramics />
      <Products />
      <SignUp />
      <End />
    </div>
  );
}
