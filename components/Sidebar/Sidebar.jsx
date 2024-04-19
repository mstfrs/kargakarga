import React from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarFooter from './SidebarFooter'
import Fade from '@/helpers/Fade'

const Sidebar = ({isOpen, setIsOpen}) => {
  return (
 
    <div className='w-[100vw] md:w-[72px] bg-[#363F72]  md:h-[100vh] md:pb-[72px] flex md:flex-col justify-between py-4'>
      
<SidebarHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
<SidebarFooter/>
    </div>

  )
}

export default Sidebar