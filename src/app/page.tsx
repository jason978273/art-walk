import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="theme-bg-primary">
        <Carousel />
      </div>
    </div>
  );
}
