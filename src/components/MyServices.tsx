'use Client'
import React from 'react'
import Container from './Container'
import Title from './Title'
import { servicesDetails } from '@/constants/data'


const MyServices = () => {
  return (
   
    <Container className='border border-zinc-400 mt-10 bg-zinc-100 px-5'>
        <Title title='My Services'/>
        <div className='grid grid-cols-3 gap-10 mt-10 '>
            {
                servicesDetails.map((item)=>(
                    <div key={item?.title} className='border border-black p-5 rounded-md shadow-xl hover:shadow-none'>
                         <div className='flex items-center gap-2 mb-4'>
                        <p className='text-xl font-semibold'>{item?.title}</p>
                       <span className='animate-bounce'>{<item.icon/>}</span>
                       </div>
                        <p>{item.description}</p>
                        
                    </div>
                ))
            }
        </div>
    </Container>
  )
}

export default MyServices