import { Facebook,Instagram,Twitter,Linkedin,AppWindow, FileJson, AlertCircle, PenSquare, ShoppingBag,Brush  } from "lucide-react"
import XYZImg from '@/assest/exprience/xyz.jpg'
import BrainStation from '@/assest/exprience/brain station.png'
import ollyoImg from '@/assest/exprience/ollyo.png'
export const navigation=[
    {title:"Home", href:"/"},
    {title:"Portfolio", href:"/portfolio"},
    {title:"Services", href:"/services"},
    {title:"Blog", href:"/blog"},
    {title:"Resume", href:"/resume.pdf" ,target:"_"},
    {title:"Contact", href:"/contact"}
]
    

export const services = [
    {title:"Web Design"},
    {title:"Web Devlopment"},
    {title:"Mern Stack Devlopment"},
    {title:"Creating Articles"},
    {title:"E-Commerce Project"},
    {title:"UI Design"}
]
export const contacts = [
    {title:"Facebook",icon:Facebook, href:"https://www.facebook.com/profile.php?id=100064316097104"},
    {title:"Instagram",icon:Instagram, href:"https://WWW.instagram.com/_akhi_akther_?igshid=OGQ5ZDc2ODk2ZA=="},
    {title:"Twitter",icon:Twitter},
    {title:"Linkdin",icon:Linkedin},
   
]
export const servicesDetails =[
    {title:"Web Design",
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem inventore ipsam amet rem expedita facilis vel suscipit illo tempora, minus error earum odit libero nobis id beatae corporis ut doloribus nesciunt fugit debitis iure? Quaerat sequi unde veritatis cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon:AppWindow,
},
    {title:"Web Devlopment",
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem inventore ipsam amet rem expedita facilis vel suscipit illo tempora, minus error earum odit libero nobis id beatae corporis ut doloribus nesciunt fugit debitis iure? Quaerat sequi unde veritatis cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon:FileJson,
},
    {title:"Mern Stack Devlopment",
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem inventore ipsam amet rem expedita facilis vel suscipit illo tempora, minus error earum odit libero nobis id beatae corporis ut doloribus nesciunt fugit debitis iure? Quaerat sequi unde veritatis cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon:AlertCircle,
},
    {title:"Creating Articles",
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem inventore ipsam amet rem expedita facilis vel suscipit illo tempora, minus error earum odit libero nobis id beatae corporis ut doloribus nesciunt fugit debitis iure? Quaerat sequi unde veritatis cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon:PenSquare,
},
    {title:"E-Commerce Project",
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem inventore ipsam amet rem expedita facilis vel suscipit illo tempora, minus error earum odit libero nobis id beatae corporis ut doloribus nesciunt fugit debitis iure? Quaerat sequi unde veritatis cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon:ShoppingBag,
},
    {title:"UI Design",
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem inventore ipsam amet rem expedita facilis vel suscipit illo tempora, minus error earum odit libero nobis id beatae corporis ut doloribus nesciunt fugit debitis iure? Quaerat sequi unde veritatis cupiditate!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon:Brush,
},
   

]
export const experience =[
    {title:"Web Devloper",
    position:"Intern",
   company:"XYZ.com",
   duration:"January 2022-June 2022",
   logo:XYZImg,
   href:''

},
    {title:"Front-end Developer",
    position:"Intern",
   company:"Brain Station",
   duration:"July 2022-December 2022",
   logo:BrainStation,
   href:''

},
    {title:"Full-Stack Developer",
    position:"Intern",
   company:"ollyo",
   duration:"January2023-March-2023",
   logo:ollyoImg,
   href:""

},
]