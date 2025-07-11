import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Carousel />
    </div>
  );
}
