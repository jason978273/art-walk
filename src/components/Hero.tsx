import Image from "next/image";

interface HeroProps {
  img?:string;
  photoCredit?: string;
}

export default function Hero({ 
  img = "/images/hero-bg.jpg", 
  photoCredit = "Photo by Paul McGrath / North Shore News"
}: HeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src={img}
        alt="Hero Background"
        fill
        className="object-cover -z-10"
        />
      <div className="absolute inset-0 hero-gradient -z-10"></div>

      <div className="max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Discover West Vancouver&apos;s Public Art
        </h1>
      </div>

      <div className="absolute bottom-4 right-4 text-xs text-white/70 px-2 py-1 rounded">
        {photoCredit}
      </div>
    </div>
  )
}