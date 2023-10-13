import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logowhite from "../assest/logo-white-img.png"
import { contacts, navigation, services } from '@/constants/data'
import Link from 'next/link'

const Footer = () => {
  return (
  <div className="bg-pink-900 text-zinc-200">
     <Container className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:place-items-center px-4 xl:px-0' >
     <div>
            <Image src={logowhite} alt={"logo Image"} className='w-28 mb-5'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis doloremque accusamus ducimus iure praesentium officia vel omnis? Porro labore,</p>
        </div>
        <ul className='flex flex-col items-start justify-center gap-5'>
            {
                navigation.map((item)=>(
                    <Link key={item.title} href={item.href}>
            
                    <li className='font-semibold  text-zinc-300 hover:text-white cursor-pointer duration-300 relative group overflow-hidden'>{item.title}
                        <span className='h-[1px] w-full inline-flex bg-white absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'/>
                        </li>
                    </Link>
                ))
            }
       
           
           </ul>
           <ul className='flex flex-col items-start justify-center gap-5'>
            {
                services.map((item)=>(
                    <li key={item.title} className='font-semibold  text-zinc-300 hover:text-white cursor-pointer duration-300 relative group overflow-hidden'>{item.title}
                        <span className='h-[1px] w-full inline-flex bg-white absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'/>
                        </li>
                ))
            }
       
           
           </ul>
        <div className='flex flex-col items-center justify-center gap-5'>
            <p>Reach with me</p>
          <ul className='flex gap-4'>
            {
                contacts.map((item)=>(
                    <a key={item.title} href={item.href} target='_blank' className=''>
                    <li className='w-9 h-9 bg-zinc-200 text-pink-900 rounded-full flex items-center justify-center mb-4 hover:text-white hover:bg-pink-700'>{<item.icon/>}</li>
                    <p className='font-seminold'>{item.title}</p>
                </a>
                ))
            }
           
          </ul>
        </div>
   </Container>
  </div>
  )
}

export default Footer