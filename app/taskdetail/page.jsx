'use client'
import ActivityCard from '@/components/Cards/ActivityCard'
import Content from '@/components/TaskDetails/Content'
import Info from '@/components/TaskDetails/Info'
import LeftBar from '@/components/TaskDetails/LeftBar'
import Menu from '@/components/TaskDetails/Menu'
import React, { useState } from 'react'

const TaskDetail = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex w-full'>
    
       <Content/>
     
       
      
    <div className=''>
    <LeftBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
      
  
     
       
    </div>
  )
}

export default TaskDetail