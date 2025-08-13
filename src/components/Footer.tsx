import Image from 'next/image'
import React from 'react'
import { Mail, Globe } from 'lucide-react'
import { SiFacebook, SiInstagram, SiX } from '@icons-pack/react-simple-icons'

export default function Footer() {
  const sponsors = [
    { src: "/images/westvan.jpg", alt: "District of West Vancouver" },
    { src: "/images/adbia.png", alt: "Amberside and Dundarave Business Improvement Association" },
    { src: "/images/canada.jpg", alt: "Government of Canada" },
  ];

  const socialLinks = [
    { icon: SiFacebook, href: "https://www.facebook.com/wvartscouncil/", label: "Facebook" },
    { icon: SiInstagram, href: "https://www.instagram.com/wvartscouncil", label: "Instagram" },
    { icon: SiX, href: "https://x.com/WVArtsCouncil", label: "X (Twitter)" },
  ];
  
  return (
    <footer className='bg-white border-t border-gray-300 mt-auto py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='sponsors mb-8 text-center'>
          <h4 className='font-semibold mb-4 text-gray-700'>Our Partners and Sponsors</h4>
          <div className=' gap-4 justify-items-center grid grid-cols-2 md:grid-cols-3 mx-auto max-w-4xl'>
            {sponsors.map((sponsor, index) => (
              <div key={index} className='flex items-center justify-center w-[140px] h-[70px] rounded-md p-2'>
                <Image 
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={120}
                  height={0}
                  style={{ height: "auto" }}
                  className='opacity-80 hover:opacity-100 transition-opacity max-w-full max-h-full object-contain' 
                />
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-6'>
          <div className='contact text-center md:text-left min-h-[200px] flex flex-col justify-end'>
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
                    publicart.wvcac@shaw.ca
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

          <div className='social text-center md:text-right min-h-[200px] flex flex-col justify-end'>
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
              © {new Date().getFullYear()} West Vancouver Community Arts Council. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}