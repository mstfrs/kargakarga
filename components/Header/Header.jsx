import React from 'react'
import { FaBell } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between items-center h-[72px] px-6'>
        <h3 className='text-[#145389] text-[20px] font-bold'>kargakarga</h3>
        <div className='flex items-center gap-4'>
        <FaBell size={25} className='text-[#667085]' />
        <FaBell size={25} className='text-[#667085]'/>
        <img src="/images/navlogo.png" alt="" />
        </div>

    </div>
  )
}

export default Header           