import React from 'react'
import Image from 'next/image'
import switchboardImg from '../assets/switchboard.png'

export default function ProductCard() {
  return (
        <div className="w-[300px] h-[309px] lg:w-[386px] lg:h-[379px] border border-[#D9D9D9] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]">
          {/* Background Image with Opacity */}
          <div className='relative w-[300px] h-[250px] lg:w-[386px] lg:h-[304px] bg-[#B2B3B2]'>
            <Image
            src={switchboardImg}
            alt='Switchboard Image'
            width={386}
            height={304}
            className="absolute w-[300px] h-[250px] lg:w-[386px] lg:h-[304px] left-0 top-0 opacity-24"
          />
          <p className="absolute w-full h-[24px] left-[20px] lg:left-[35px] top-[20px] text-black lg:text-[20px]">Switchboard Manufacturing</p>
          <div className="absolute w-[158.15px] h-0 left-[20px] lg:left-[34.92px] top-[60px] border-t-[5px] border-black"></div>
          {/* Description */}
          <p className="absolute w-[250px] h-[123px] lg:w-[342px] lg:h-[168px] left-[20px] lg:left-[35px] top-[70px] text-black text-[14px] lg:text-[20px]">
            We specialize in the design and manufacturing of high-quality electrical switchboards for industrial, 
            commercial, and residential applications.
            Our switchboards are safe, efficient and reliable
          </p>
          </div>
          
            <div className='w-[300px] h-[59px] lg:w-[386px] lg:h-[76px] bg-[#B2B3B2] flex items-center'>
              <button className="w-[141px] h-[39px] ml-[20px] lg:ml-[35px] bg-[#F4A261] border-[2px] border-[#F4A261] rounded-[5px] flex items-center justify-center">
              <span className="text-black text-[16px]">
                Find out more
            </span>
             </button>
            </div>  
    </div>

  )
}
