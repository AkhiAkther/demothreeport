'use client'
import React, { useState } from 'react'
import logowhite from "../assest/logo-white-img.png"
import Image from 'next/image'
import Link from 'next/link'
import { navigation } from '@/constants/data'
import {Menu,X} from 'lucide-react'

const Header = () => {
    const [show, setShow]=useState(false)
    console.log(show);
    
  return (
    
    <div className='w-full h-20 bg-pink-900 sticky top-0 z-50'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between h-full px-4 relative'>
            <Link href={"/"}>
            <Image src={logowhite} alt='logo Image' className='w-28'/>
            </Link>
          <ul className=' hidden md:flex items-center justify-center gap-5'>
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
           <div onClick={()=>setShow(!show)} className='inline-flex md:hidden text-zinc-300 hover:text-white cursor-pointer duration-200 '>
               {
                show ? <X/>:<Menu/>
               }
           </div>
          {
            show && (
                <ul className='absolute right-0 px-10 py-6 top-20 inline-flex md:hidden flex-col bg-pink-900 items-start justify-center gap-5 text-white'>
                {
                    navigation.map((item)=>(
                        <Link key={item.title} href={item.href}>
                
                        <li className='font-semibold  hover:text-white cursor-pointer duration-300 relative group overflow-hidden'>{item.title}
                            <span className='h-[1px] w-full inline-flex bg-white absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'/>
                            </li>
                        </Link>
                    ))
                }
           
               
               </ul>
            )         
         }
        </div>
    </div>
  )
}

export default Header