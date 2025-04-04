import React from 'react'
import Image from 'next/image'
import solarImg from '../assets/solarPanel (1).png'

export default function ProductCard() {
  return (
        <div className="w-[300px] h-[309px] lg:w-[386px] lg:h-[379px] border border-[#D9D9D9] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]">
          {/* Background Image with Opacity */}
          <div className='relative w-[300px] h-[250px] lg:w-[386px] lg:h-[304px] bg-[#252865]'>
            <Image
            src={solarImg}
            alt='Solar Image'
            width={386}
            height={304}
            className="absolute w-[300px] h-[250px] lg:w-[386px] lg:h-[304px] left-0 top-0"
          />
          <p className="absolute w-full h-[24px] left-[20px] lg:left-[35px] top-[20px] text-white lg:text-[20px]">Solar Solutions</p>
          <div className="absolute w-[158.15px] h-0 left-[20px] lg:left-[34.92px] top-[60px] border-t-[5px] border-white"></div>
          {/* Description */}
          <p className="absolute w-[250px] h-[123px] lg:w-[342px] lg:h-[168px] left-[20px] lg:left-[35px] top-[70px] text-white text-[14px] lg:text-[20px]">
            We provide cutting edge solar solutions to enhance energy efficiency and
            sustainability. Our solar technology helps businesses, communities, and
            home transition to clean, reliable and cost effective energy
          </p>
          </div>
          
            <div className='w-[300px] h-[59px] lg:w-[386px] lg:h-[76px] bg-[#172C5F] flex items-center'>
              <button className="w-[141px] h-[39px] ml-[20px] lg:ml-[35px] bg-[#F4A261] border-[2px] border-[#F4A261] rounded-[5px] flex items-center justify-center">
              <span className="text-black text-[16px]">
                Find out more
            </span>
             </button>
            </div>  
    </div>

  )
}
