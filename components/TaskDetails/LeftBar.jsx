'use client'
import React, { useState } from 'react'
import { BiMessageDetail } from "react-icons/bi";
import { FaPlus } from 'react-icons/fa';
import { Sidebar } from 'primereact/sidebar';
import { LiaSearchSolid } from "react-icons/lia";
import { RiMenu5Line } from "react-icons/ri";
import ActivityCard from '../Cards/ActivityCard';

const LeftBar = ({isOpen, setIsOpen}) => {
    const [visibleRight, setVisibleRight] = useState(false);
    const leftBarLinks=[
        {
            id:1,
            title:"Activity",
            icon:<BiMessageDetail size={25} />,
        },
        {
            id:2,
            title:"Condition",
            icon:<BiMessageDetail size={25} />,
        },
        {
            id:3,
            title:"QA",
            icon:<BiMessageDetail size={25} />,
        },
        {
            id:4,
            title:"Meetings",
            icon:<BiMessageDetail size={25} />,
        },
        {
            id:5,
            title:"Docs",
            icon:<BiMessageDetail size={25} />,
        },
    ]
  return (
    <div className='flex flex-row-reverse '>
  
    <div className='relative h-auto items-center w-[60px] border border-1 border-[#EAECF0] flex flex-col gap-5 py-3 px-1'>
            {
            leftBarLinks.map((link)=>(
               <div onClick={() => setIsOpen(!isOpen)}  key={link.id} className='cursor-pointer flex-col flex gap-4 items-center text-[10px] text-[#98A2B3]'>  {link.icon}
               <span>{link.title}</span></div> 
               
            ))
        }
        <div className='border border-1 border-[#EAECF0] w-full'>


        </div>
        <FaPlus size={25} className='text-[#98A2B3] cursor-pointer'/>
       
    </div>
    <div  className={`${isOpen?'flex':'hidden'}  flex-col right-0 top-0 bg-[#F3F6FD] h-full w-[328px]`} >
            <div className='flex p-4 justify-between items-center bg-white'><h3 className='text-[#145389] font-semibold'>Activity</h3>
            <div className='flex gap-9 items-center text-[#98A2B3]'>

            <LiaSearchSolid size={25} className='cursor-pointer'/>
            <RiMenu5Line size={25} className='cursor-pointer'/>
            </div>
            </div>
            <div className='p-3'>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>

            </div>
            </div>
    </div>
  )
}

export default LeftBar