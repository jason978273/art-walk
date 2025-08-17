import Image from 'next/image'
import React from 'react'
import { Mail, Globe } from 'lucide-react'
import { SiFacebook, SiInstagram, SiX } from '@icons-pack/react-simple-icons'

export default function Footer() {
    const partners = [
    { src: "/images/westvan.jpg", alt: "District of West Vancouver" },
  ]

  const sponsors = [
    { src: "/images/adbia.png", alt: "Amberside and Dundarave Business Improvement Association" },
  ]

  const funders = [
    { src: "/images/westvancouverfoundation-logo-full-color-rgb.png", alt: "West Vancouver Foundation" },
    { src: "/images/gov_canada_logo.jpg", alt: "Service Canada" },
    { src: "/images/Metro_Vancouver_Block.jpg", alt: "Metro Vancouver"},
  ]

  const socialLinks = [
    { icon: SiFacebook, href: "https://www.facebook.com/wvartscouncil/", label: "Facebook" },
    { icon: SiInstagram, href: "https://www.instagram.com/wvartscouncil", label: "Instagram" },
    { icon: SiX, href: "https://x.com/WVArtsCouncil", label: "X (Twitter)" },
  ]

  // Helper function to determine grid classes based on item count
  const getGridClasses = (itemCount: number) => {
    if (itemCount === 1) return 'grid grid-cols-1 justify-items-center'
    if (itemCount === 2) return 'grid grid-cols-2 justify-items-center'
    if (itemCount >= 3) return 'grid grid-cols-1 sm:grid-cols-3 justify-items-center'
    return 'grid grid-cols-2 md:grid-cols-3 justify-items-center'
  }
  
  return (
    <footer className='bg-white border-t border-gray-300 mt-auto py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='partners mb-8 text-center'>
          <h3 className='font-semibold mb-4 text-gray-700'>PARTNERS</h3>
          <div className={`gap-4 ${getGridClasses(partners.length)} mx-auto max-w-4xl`}>
            {partners.map((partner, index) => (
              <div key={index} className='flex items-center justify-center w-[140px] h-[70px] rounded-md p-2'>
                <Image 
                  src={partner.src}
                  alt={partner.alt}
                  width={140}
                  height={0}
                  style={{ height: "auto" }}
                  className='opacity-80 hover:opacity-100 transition-opacity max-w-full max-h-full object-contain' 
                />
              </div>
            ))}
          </div>
        </div>

        <div className='sponsors mb-8 text-center'>
          <h3 className='font-semibold mb-4 text-gray-700'>SPONSORS</h3>
          <div className={`gap-4 ${getGridClasses(sponsors.length)} mx-auto max-w-4xl`}>
            {sponsors.map((sponsor, index) => (
              <div key={index} className='flex items-center justify-center w-[140px] h-[70px] rounded-md p-2'>
                <Image 
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={140}
                  height={0}
                  style={{ height: "auto" }}
                  className='opacity-80 hover:opacity-100 transition-opacity max-w-full max-h-full object-contain' 
                />
              </div>
            ))}
          </div>
        </div>

        <div className='funders mb-8 text-center'>
          <h3 className='font-semibold mb-4 text-gray-700'>FUNDERS</h3>
          <div className={`gap-4 ${getGridClasses(funders.length)} mx-auto max-w-4xl`}>
            {funders.map((funder, index) => (
              <div key={index} className='flex items-center justify-center w-[160px] h-[70px] rounded-md p-2'>
                <Image 
                  src={funder.src}
                  alt={funder.alt}
                  width={160}
                  height={0}
                  style={{ height: "auto" }}
                  className='opacity-80 hover:opacity-100 transition-opacity max-w-full max-h-full object-contain' 
                />
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-6'>
          <div className='contact text-center md:text-left md:min-h-[200px] md:flex md:flex-col md:justify-end'>
            <div className="flex justify-center md:justify-start mb-4">
              <Image 
                src="/images/WVCAC-logo-horz_blue.jpg"
                alt="West Vancouver Community Arts Council Logo"
                width={140}
                height={0}
                style={{ height: "auto" }}
                className="opacity-90 hover:opacity-100 transition-opacity object-contain"
              />
            </div>
            
            <div>
              <h4 className='font-semibold mb-4 text-gray-700'>Contact Us</h4>
              <div className='space-y-3'>
                <div className='flex items-center justify-center md:justify-start gap-2'>
                  <Mail className='w-4 h-4 text-gray-600' />
                  <a 
                    href="mailto:publicart.wvcac@shaw.ca" 
                    className='text-sm text-gray-600 hover:text-gray-800 transition-colors'
                  >
                    westvanartscouncil@shaw.ca
                  </a>
                </div>
                <div className='flex items-center justify-center md:justify-start gap-2'>
                  <Globe className='w-4 h-4 text-gray-600' />
                  <a 
                    href="https://westvanartscouncil.ca" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-sm text-gray-600 hover:text-gray-800 transition-colors'
                  >
                    westvanartscouncil.ca
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='social text-center md:text-right md:min-h-[200px] md:flex md:flex-col md:justify-end'>
            <div>
              <h4 className='font-semibold mb-4 text-gray-700'>Follow Us</h4>
              <div className='flex gap-3 justify-center md:justify-end'>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex items-center justify-center w-8 h-8 hover:bg-gray-200 rounded-full transition-all duration-200 group'
                      aria-label={social.label}
                    >
                      <IconComponent 
                        size={16}
                        className='group-hover:scale-110 transition-all duration-200' 
                      />
                    </a>
                  );
                })}
              </div>
              <p className='text-xs text-gray-500 mt-3'>
                Stay updated with the latest events
              </p>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-200 pt-4'>
          <div className='text-center'>
            <p className='text-sm text-gray-600'>
              We acknowledge that the lands on which we gather are the traditional ancestral and unceeded territories of the the Sḵwx̱wú7mesh (Squamish) Nation. It is our privilege to celebrate arts and culture alongside them.

            </p>
            <p className='text-xs text-gray-500 mt-4'>
              © {new Date().getFullYear()} West Vancouver Community Arts Council. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}