'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import electricalsImg from './assets/electricals.png'
import switchboardImg from './assets/switchboard.png'
import solarpanelImg from './assets/solarpanel.png'
import avrImg from './assets/AVR.png'
import Carousel from './components/image_carousel'
import externalLink from './svgs/external_link.svg'
import ProductCard1 from './components/products_card1'
import ProductCard2 from './components/products_card2'
import ProductCard3 from './components/products_card3'
import ProjectCard1 from './components/project_card1'
import ProjectCard2 from './components/project_card2'
import ProjectCard3 from './components/project_card3'

export default function HomePage() { 
  const router = useRouter();
  
  const about_us = () => {
    router.push('/about_us');
  }
  const products_and_services = () => {
    router.push('/products_and_services');
  }
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <section className='w-full flex items-center justify-center'>
      <div className='lg:p-4 md:p-2 p-1 lg:w-[1300px] md:w-full w-full flex flex-col'>
        {/*Image section*/}
        <div className='hidden lg:flex lg:flex-row lg:gap-6 md:flex md:flex-row gap-2 justify-center'>
          <Image 
            src={solarpanelImg}
            alt='Solar Panels Image'
            width={250}
            height={250}
          />
          <Image 
            src={electricalsImg}
            alt='Electricals Image'
            width={250}
            height={250}
          />
          <Image 
            src={switchboardImg}
            alt='Switchboard Image'
            width={250}
            height={250}
          />
          <Image 
            src={avrImg}
            alt='AVR Image'
            width={250}
            height={250}
          />
        </div>
        {/*Small Screen*/}
        <div className='lg:hidden md:hidden flex items-center justify-center'>
          <Carousel />
        </div>
        
        <h1 className='w-full flex lg:items-center lg:justify-center md:items-center md:justify-center text-[#FF0105] text-[16px] lg:text-[32px] md:text-[28px]'>Powering Innovation, Ensuring Reliability</h1>
        <p className='w-full lg:w-[1186px] flex lg:items-center lg:justify-center md:items-center md:justify-center text-center text-[#000000] text-[12px] lg:text-[24px] md:text-[20px]'>
          Alver Power Systems Ltd is your trusted partner for innovative electrical and renewable energy solutions across Kenya and East Africa.
We specialize in high-quality electrical installations, solar energy solutions and custom switchboard manufacturing. We also offer end to end services that include engineering, procurement, construction (EPC) and maintenance.
        </p>
        
        <div className='w-full flex flex-row items-center justify-center lg:gap-[200px] md:gap-[150px] gap-[50px] mt-[20px]'>
          {/*Button 1*/}
          <div className="relative w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px]">
            {/* Rectangle 9 - blurred background box */}
            <div className="absolute w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
            {/* Rectangle 8 - foreground box */}
            <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[24px] md:text-[24px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2"
                    onClick={products_and_services}
              >
              Explore our products
              <Image
                src={externalLink}
                alt='Explore'
                width={18}
                height={18}
                className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
              />
            </button>
          </div>

          {/*Button 2*/}
          <div className="relative w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px]">
            {/* Rectangle 9 - blurred background box */}
            <div className="absolute w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
            {/* Rectangle 8 - foreground box */}
            <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[24px] md:text-[24px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2"
                   onClick={openModal}
              >
              Get a Quote
              <Image
                src={externalLink}
                alt='Get Quote'
                width={18}
                height={18}
                className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
              />
            </button>
          </div>
        </div>
        
        {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            {/* Modal Header with close button */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Modal Title</h2>
              <button
                className="text-xl text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                &times; {/* "X" to close */}
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-4">
              <p>This is the content of the modal.</p>
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
        

        
        {/*Get To Know Us*/}
        <div className='flex flex-col mt-[40px]'>
            <div className='w-full flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center'>
              <div className="w-[25px] h-0 top-[745px] left-[625px] bg-[#D9D9D9] border-b-[5px] border-[#252865]"></div>
              <div className="text-black font-inter font-normal text-[14px] lg:text-[24px] md:text-[24px]">
                Get to know us
              </div>
            </div>
            <div className=" w-full flex flex-row lg:items-center lg:justify-center md:items-center md:justify-center gap-[10px] text-[16px] lg:text-[32px] md:text-[28px]">
              <p className='text-[#FF0105]'>Who</p>
              <p className='text-[#252865]'>We are</p>
            </div>
            <p className='w-full lg:w-[1186px] flex lg:items-center lg:justify-center md:items-center md:justify-center text-center text-[#000000] text-[12px] lg:text-[24px] md:text-[20px]'>Alver power systems is a manufacturing company that  specializes in electrical installations solar energy solutions and switchboard manufacturing.
                Mission: Our mission is to build lasting, mutually beneficial relationships with each of our esteemed clients by continually exceeding their expectations and earning their confidence.
                Vision: Being the most skilled and reputable commercial electrical contractor service provider in east Africa 
            </p>
          
            <div className='w-full flex items-center justify-center mt-[20px]'>
              <div className="relative w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px]">
                {/* Rectangle 9 - blurred background box */}
                <div className="absolute w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
                {/* Rectangle 8 - foreground box */}
                <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[24px] md:text-[24px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2"
                        onClick={about_us}
                  >
                  Learn More
                  <Image
                    src={externalLink}
                    alt='Get Quote'
                    width={18}
                    height={18}
                    className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
                  />
                </button>
              </div>
            </div>

          {/*Product Cards*/}
          <div className='flex flex-col mt-[40px]'>
            <div className='w-full flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center'>
              <div className="w-[25px] h-0 top-[745px] left-[625px] bg-[#D9D9D9] border-b-[5px] border-[#252865]"></div>
              <div className="text-black font-inter font-normal text-[14px] lg:text-[24px] md:text-[24px]">
                What we do
              </div>
            </div>
            <div className=" w-full flex flex-row lg:items-center lg:justify-center md:items-center md:justify-center gap-[10px] text-[16px] lg:text-[32px] md:text-[28px]">
              <p className='text-[#FF0105]'>Our</p>
              <p className='text-[#252865]'>Products and Services</p>
            </div>
          
            <div className="w-full overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden">
            <div className="flex lg:grid gap-4 items-center justify-start lg:grid-cols-3 min-w-max">
              <ProductCard1 />
              <ProductCard2 />
              <ProductCard3 />
            </div>
          </div>


             <div className='w-full flex items-center justify-center mt-[20px]'>
              <div className="relative w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px]">
                {/* Rectangle 9 - blurred background box */}
                <div className="absolute w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
                {/* Rectangle 8 - foreground box */}
                <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[145px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[24px] md:text-[24px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2"
                         onClick={products_and_services}
                  >
                  Explore our products
                  <Image
                    src={externalLink}
                    alt='Explore'
                    width={18}
                    height={18}
                    className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
                  />
                </button>
              </div>
          </div>
          
          {/*Why us*/}
          <div className='flex flex-col mt-[40px]'>
            <div className='w-full flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center'>
              <div className="w-[25px] h-0 top-[745px] left-[625px] bg-[#D9D9D9] border-b-[5px] border-[#252865]"></div>
              <div className="text-black font-inter font-normal text-[14px] lg:text-[24px] md:text-[24px]">
                Why Us?
              </div>
            </div>
            <div className=" w-full flex flex-row lg:items-center lg:justify-center md:items-center md:justify-center gap-[10px] text-[16px] lg:text-[32px] md:text-[28px]">
              <p className='text-[#FF0105]'>Why</p>
              <p className='text-[#252865]'>Alver Power Systems Ltd.</p>
            </div>
            <div className='w-full flex flex-col items-center justify-center'>
              <ul className='list-disc list-inside md:w-[700px] lg:w-[1004px] text-[12px] md:text-[20px] lg:text-[24px] text-black text-left'>
                <li>High quality manufacturing - Durable and efficient products</li>
                <li>Sustainability Focused - Commited to eco-friendly energy solutions</li>
                <li>Customer Satisfaction - Creating a better and long-term relation with our clients while ensuring excellent service.</li>
                <li>Expert Team -  Our team comprises of the following:
                  <ul className="ml-[50px] md:ml-[150px] lg:ml-[150px] list-inside">
                    <li>
                      <span className="mr-2">✓</span>
                      Highly qualified Electrical Engineers.</li>
                    <li>
                      <span className="mr-2">✓</span>
                      Vastly experienced draftsmen.</li>
                    <li>
                      <span className="mr-2">✓</span>
                      Highly dedicated sales personnel.</li>
                    <li>
                      <span className="mr-2">✓</span>
                      Highly skilled technical staff.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
            
          {/*Projects*/}
          <div className='flex flex-col mt-[40px]'>
            <div className='w-full flex flex-row items-center lg:items-center lg:justify-center md:items-center md:justify-center'>
              <div className="w-[25px] h-0 top-[745px] left-[625px] bg-[#D9D9D9] border-b-[5px] border-[#252865]"></div>
              <div className="text-black font-inter font-normal text-[14px] lg:text-[24px] md:text-[24px]">
                Portfolio
              </div>
            </div>
            <div className=" w-full flex flex-row lg:items-center lg:justify-center md:items-center md:justify-center gap-[10px] text-[16px] lg:text-[32px] md:text-[28px]">
              <p className='text-[#FF0105]'>Our</p>
              <p className='text-[#252865]'>Projects</p>
            </div>
          </div>
          <div className="w-full overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden">
            <div className="flex lg:grid gap-4 items-center justify-start lg:grid-cols-3 min-w-max">
              <ProjectCard1 />
              <ProjectCard2 />
              <ProjectCard3 />
            </div>
          </div>


         <div className='w-full flex items-center justify-center mt-[20px]'>
              <div className="relative w-[123px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px]">
                {/* Rectangle 9 - blurred background box */}
                <div className="absolute w-[123px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] inset-0 border-[2px] border-[#252865] rounded-[15px] blur-[8.25px]"></div>
                {/* Rectangle 8 - foreground box */}
                <button className="absolute text-black hover:bg-[#252865] hover:text-white active:bg-[#252865] active:text-white w-[123px] h-[30px] lg:w-[290px] lg:h-[46px] md:w-[290px] md:h-[46px] text-[10px] lg:text-[24px] md:text-[24px] inset-0 border-[2px] border-[#252865] rounded-[15px] flex flex-row items-center justify-center lg:items-center lg:justify-center md:items-center md:justify-center gap-2 lg:gap-2 md:gap-2">
                  See More
                  <Image
                    src={externalLink}
                    alt='Get Quote'
                    width={18}
                    height={18}
                    className='w-[10px] h-[10px] lg:w-[18px] lg:h-[18px] md:w-[18px] md:h-[18px]'
                  />
                </button>
              </div>
            </div>
          {/*Projects*/} 
         </div> 
        </div>
      </div>
    </section>
  );
}
