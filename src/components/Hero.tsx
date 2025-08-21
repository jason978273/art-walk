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
        className="object-cover -z-10 object-center md:object-[center_20%]"
        />
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div className="flex items-center justify-center w-full h-full px-4">
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <Image
            src={"/images/PAW_Logo.png"}
            alt="Public Art Walk Logo"
            width={800}
            height={400}
            className="w-full h-auto max-w-full object-contain"
            style = {{
              objectPosition: 'center center',
              transform: 'translateX(-12%)', // Adjust as needed for centering
            }}
            priority
          />
        </div>
      </div>
      

      <div className="absolute bottom-4 right-4 text-xs text-white/70 px-2 py-1 rounded">
        {photoCredit}
      </div>
    </div>
  )
}