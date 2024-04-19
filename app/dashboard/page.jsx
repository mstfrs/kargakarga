'use client'
import Boardsview from '@/components/Boardsview/Boardsview'
import DetailModal from '@/components/DetailModal/DetailModal'
import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
import Sidebar from '@/components/Sidebar/Sidebar'
import React, {  useState } from 'react'

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(false);
  
    const [loading, setLoading] = useState(false)



   
    
  return (
    <div> <Header/>
    <div className='flex flex-col md:flex-row justify-start overflow-hidden'>
       
        <div className={`${isOpen?'min-w-[354px]':''} !relative`}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
        <div className='h-screen w-[100vw] py-6 px-8 bg-[#F3F6FD] overflow-y-auto'>
        <Boardsview />
        </div>
      
        </div>
    </div>
  )
}

export default Dashboard