'use client'
import React, { useState } from 'react'
import { CiCircleMore } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa'
import TaskCard from '../Cards/TaskCard'
import TaskCreateModal from '../TaskCreateModal/TaskCreateModal'

const Board = ({item}) => {
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false)
  return (
    <div className='border border-[#EAECF0] w-[319px] flex flex-col  h-[90%] items-center gap-[6px] bg-white rounded-xl'>
        <div className='w-full border-b border-[#EAECF0] flex justify-between p-4 rounded-xl'>
        <div className='flex items-center gap-3 '>
            <h4 className='text-[#4E5BA6]'>{item.name}</h4>
            <span className='text-[#175CD3] bg-[#EFF8FF] border border-[#B2DDFF] rounded-full w-5 h-5 flex items-center justify-center'>{item?.tasks?.length}</span>
        </div>
        <div className='flex items-center gap-3 text-[#98A2B3]'>
            <h4><FaPlus /></h4>
            <span><CiCircleMore size={20} /></span>
        </div>
        </div >

<div className='overflow-y-auto scroll-smooth flex flex-col items-center h-screen'>
{
          item?.tasks?.length>0?
          item?.tasks?.map((task,index)=>(
            <TaskCard task={task} key={index}/>
          )):
          <div className='h-full w-[309px] flex items-center relative group justify-center flex-col'>
<img src="/images/karga.png" alt="" className='group' />
<h4 className='hidden absolute top-2/3 group-hover:block text-teal-950 cursor-pointer text-3xl' onClick={()=>setCreateTaskModalOpen(true)}>Add Task</h4>
          </div>
          
        }
</div>
        
     
       

      <TaskCreateModal createTaskModalOpen={createTaskModalOpen} setCreateTaskModalOpen={setCreateTaskModalOpen} />
       
    </div>
  )
}

export default Board