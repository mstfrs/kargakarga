import React from 'react'
import { FaRegCircle, FaRegCopy } from 'react-icons/fa'
import Info from './Info'
import Description from './Description'

const Content = () => {
  return (
    <div className='w-full flex flex-col'>
        <div className='w-full py-8 px-12'>
            <div className='flex  justify-between w-full'>
                <div className=' flex flex-col justify-center w-[455px] h-[212px]'>

                
                <div className='flex items-center gap-5 '>
                <FaRegCircle size={30} />
                    <h2 className='text-[22px] text-[#475467] font-bold'>Bu örnek görevdir. Örnek görevin içeriğine dair açıklama detail’da bulunmaktadır.</h2>
                </div>
                <p className='flex items-center gap-2 mt-1'>ID: #435365 <span className='cursor-pointer'><FaRegCopy size={16} /></span></p>
                </div>
                <div className='text-sm flex gap-2 items-center rounded-md text-[#475467] py-[10px] px-[16px] border border-1 border-[#D0D5DD] w-fit h-10'>
                <FaRegCircle />
                <h4 className='text-sm font-medium text-[#98A2B3]'>05.02.2024 - 20.04.2024</h4>
                </div>
               
            </div>
            <Info/>
            <Description/>
        </div>
        
    </div>
  )
}

export default Content