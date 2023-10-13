import React from 'react'
import Container from './Container'
import Image from 'next/image'
import BannerImg from "../assest/banner-img.jpg"
const Banner = () => {
  return (
   <Container className='px-4' >
    <div className='flex items-center gap-5 flex-col sm:flex-row '>
        <div className='w-full sm:w-1/2 flex-col justify-center gap-3 '>         
            <h2 className='text-2xl font-semibold'>Akhi Akther</h2>
            <p className='text-lg font-semibold'>Mern Stack Devloper</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente similique placeat odio inventore! Culpa rem qui ad porro dignissimos corporis cumque voluptas distinctio aperiam, repellat consequuntur sit 

            </p>
            <a href="/resume.pdf" target='_blank'>
            <button className='bg-pink-900 p-2 rounded-md text-pink-200 hover:text-white duration-200 cursor-pointer'>Hire Me</button>
            </a>
        </div>
        <div className='w-full sm:w-1/2 flex items-center justify-center'>
            <Image src={BannerImg} alt='Banner Image' className='w-[400px] h-[400px]  object-contain'/>
        </div>
    </div>
   </Container>
  )
}

export default Banner