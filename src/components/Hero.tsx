import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero Background"
        fill
        className="object-cover -z-10"
        />
      <div className="absolute inset-0 hero-gradient -z-10"></div>

      <div className="max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Discover West Vancouver's Public Art
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Explore curated walking routes through the city's best public art and sculptures.
        </p>
      </div>
    </div>

  )
}