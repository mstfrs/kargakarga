'use client'
import React, { useEffect, useState } from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbRotateRectangle } from "react-icons/tb";
import DetailModal from '../DetailModal/DetailModal';

const TaskCard = ({task}) => {
  const [visible, setVisible] = useState(false);
  console.log(task)
  useEffect(() => {
  
  }, [visible,setVisible])
  
  return (
    <div onClick={()=>setVisible(true)} className='w-[309px] h-[265px] rounded-md border border-[#EAECF0] p-3 cursor-pointer flex flex-col justify-between'>
        <h4 className='text-[12px font-medium] text-[#067647] mb-1'>{task?.name}</h4>
        <div className='flex gap-3 items-start justify-between pr-3'>
            <p className='font-medium text-[13px] text-[#475467]'>{task?.description}</p>
            <img src={`https://randomuser.me/api/portraits/men/${task?.createdUserId}.jpg`} alt="" className='w-8 h-8 rounded-full'/>
        </div>
        <div className='flex items-center text-[#98A2B3] text-[11px] my-3'>
        <MdOutlineCalendarMonth size={18} className='mr-1' />
        <p>{task?.startDate} </p> -
        <p> {task?.endDate}</p>
        </div>
        <div className='flex gap-2 items-center text-[#98A2B3] text-[11px]'>
        <TbRotateRectangle size={18} />
        <p>
        Milestone Name
        </p>
        <img src="/images/redflag.png" alt="" />
        </div>
        <DetailModal  visible={visible} setVisible={setVisible}/>
    </div>
  )
}

export default TaskCard