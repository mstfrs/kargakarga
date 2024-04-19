import React from 'react'
import { CiSettings } from "react-icons/ci";


const SidebarFooter = () => {
    const headerLinks=[
        {
            id:1,
            title:"Settings",
            icon:<CiSettings  size={30} />,
        },
      
     
      
    ]
    

  return (
    <div className='flex md:flex-col  gap-2 pr-2 md:gap-5 items-center text-[#667085]'>
    {
        headerLinks.map((link)=>(
           <div key={link.id} className='cursor-pointer'>{link.icon}</div> 
        ))
    }
    <img className='w-12 h-12' src="https://avatar.iran.liara.run/public/15" alt="" />
</div>
  )
}

export default SidebarFooter