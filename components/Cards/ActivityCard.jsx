import React from 'react'

const ActivityCard = () => {
  return (
    <div className='h-[72px] flex items-start p-3  gap-3'>
        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" className='w-12 h-12 rounded-full ' />
        
        <div className='w-full'>
            <div className='flex relative  items-center w-full  gap-2'>
            <h4 className='text-[#344054] font-medium'>Lana Steiner</h4>
            <p className='text-[#475467] text-xs'><span>2</span> mins ago</p>
            <div className='bg-[#17B26A] w-2 h-2 rounded-full absolute top-0 right-0'></div>
            </div>
            <p className='text-[#475467]'>Invited <span className='text-[#6941C6] text-sm font-medium'>Alisa Hester</span>  to the team</p>
        </div>
    </div>
  )
}

export default ActivityCard