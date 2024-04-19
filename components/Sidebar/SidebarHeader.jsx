import React from 'react'
import { GrProjects } from "react-icons/gr";
import { FaBell } from "react-icons/fa";

const SidebarHeader = ({isOpen, setIsOpen}) => {
const headerLinks=[
    {
        id:1,
        title:"Projeler",
        icon:<GrProjects size={25} />,
    },
    {
        id:2,
        title:"Projeler",
        icon:<FaBell size={25} />,
    },
    {
        id:3,
        title:"Projeler",
        icon:<FaBell size={25} />,
    },
    {
        id:4,
        title:"Projeler",
        icon:<FaBell size={25} />,
    },
]

  return (
    <div className='md:h-1/5 flex md:flex-col gap-2 pl-2 md:gap-5 md:pt-5 items-center text-[#667085] '>
        {
            headerLinks.map((link)=>(
               <div onClick={()=>setIsOpen(!isOpen)} key={link.id} className='cursor-pointer'>  {link.icon}</div> 
            ))
        }
    </div>
  )
}

export default SidebarHeader