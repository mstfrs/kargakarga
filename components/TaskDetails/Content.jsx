import React, { useState } from 'react'
import { FaRegCircle, FaRegCopy } from 'react-icons/fa'
import Info from './Info'
import Description from './Description'
import { formatDate } from '@/helpers/DateFormat'
import { Dropdown } from 'primereact/dropdown'
import { deleteTask } from '@/services/serviceHelper'
import { mutate } from 'swr'

const Content = ({task, visible, setVisible}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    { name: "SİL", id: '1' },
   
];

const handleDelete=async(taskId)=>{
  const profile = JSON.parse(localStorage.getItem("Auth"));
await deleteTask(profile.data.token,taskId)
mutate('/boards')
setVisible(false)
}
  return (
    <div className='relative w-full flex flex-col'>
     
       
        <div className='w-full py-8 px-12'>
        <div className='w-full flex justify-end'>
      <Dropdown value={selectedItem} onChange={(e) => (
        setSelectedItem(e.target.value),
        handleDelete(task.code)
       )} options={items} optionLabel="name" 
    placeholder="Select" className=" text-sm " />
      </div>
            <div className='flex  justify-between w-full'>
                <div className=' flex flex-col justify-center w-[455px] h-[212px]'>

                
                <div className='flex items-center gap-5 '>
                <FaRegCircle size={30} />
                    <h2 className='text-[22px] text-[#475467] font-bold'>{task.name}</h2>
                </div>
                <p className='flex items-center gap-2 mt-1'>ID: #{task.id} <span className='cursor-pointer'><FaRegCopy size={16} /></span></p>
                </div>
                <div className='text-sm flex gap-2 items-center rounded-md text-[#475467] py-[10px] px-[16px] border border-1 border-[#D0D5DD] w-fit h-10'>
                <FaRegCircle />
                <h4 className='text-sm font-medium text-[#98A2B3]'>{formatDate(task.startDate)} - {formatDate(task.endDate)}</h4>
                </div>
               
            </div>
            <Info/>
            <Description description={task.description}/>
        </div>
        
    </div>
  )
}

export default Content