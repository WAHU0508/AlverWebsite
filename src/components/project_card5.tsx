import React from 'react'
import Image from 'next/image'
import mapPin from '@//svgs/mapPin2.svg'
import ue from '@//assets/UE.png'

export default function ProjectCard() {
  return (
    <div className='w-[300px] h-[300px] lg:w-[386px] lg:h-[379px] bg-[rgba(37,40,101,0.89)] border border-[#D9D9D9] shadow-[0px_4px_4px_5px_rgba(0,0,0,0.25)]'>
      <div className='w-[300px] h-[105px] lg:w-[379px] lg:h-[133px] mt-[10px] lg:mt-[20px]'>
        <Image
          src={ue}
          alt='Solar Gen'
          width={379}
          height={133}
          className='w-[300px] h-[105px] lg:w-[379px] lg:h-[133px]'
        />
      </div>
      <p className='text-[20px] lg:text-[24px] ml-[20px] mt-[20px] text-[#000000]'>Unique Engineering</p>
      <div className='flex flex-row gap-2 ml-[20px]'>
        <Image
          src={mapPin}
          alt='Map pin'
          width={12}
          height={12}
        />
        <p className='text-[12px] text-[#000000]'>Ethiopia</p>
      </div>
      <div className="w-[158.15px] h-0 ml-[20px] mt-[20px] border-t-[5px] border-[#252865]"></div>
      <p className='text-[14px] lg:text-[20px] ml-[20px] mt-[20px] text-[#000000]'>Supply of low voltage panels.</p>
    </div>
  )
}
