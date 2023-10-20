import React from 'react'
import Container from './Container'
import Title from './Title'
import { experience } from '@/constants/data'
import Image from 'next/image'

const Exprience = () => {
  return (
    <section>
        <Container className='bg-zinc-100 '>
            <Title title='My Expriences'></Title>
            <hr className='hrStyle'></hr>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-10 px-4' >
              {
                experience.map((item)=>(
                  
                  <div key={item.title} className='border border-lime-900 bg-pink-800 text-zinc-100 hover:bg-white hover:text-black duration-200 p-5 shadow-2xl  shadow-black hover:shadow-none'>
                      <div className=''>
                      <p className='text-lg font-bold'>{item.title}</p>
                      <p>{item.position}</p>
                      <div className='flex items-center justify-between'>
                        <p>{item.company}</p>
                        <a href={item.href} target='_blank'>
                        <Image src={item.logo} alt='company logo' className='w-10 h-10 rounded-full object-fill'/>
                        </a>
                      </div>
                      <p>Duration:{item.duration}</p>
                    </div>
                   
                  </div>
                   
                  
                ))
              }
            </div>
        </Container>
    </section>
  )
}

export default Exprience