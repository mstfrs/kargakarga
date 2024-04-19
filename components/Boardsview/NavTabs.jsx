import React, { useState } from 'react'

const NavTabs = () => {
    const [activeTab, setActiveTab] = useState(1)
    const tabsData=[
        {
            id:1,
            title:'Boards',
        },
        {
            id:2,
            title:'List',
        },
        {
            id:3,
            title:'Other',
        },
        {
            id:4,
            title:'Other',
        },
        {
            id:5,
            title:'Other',
        },
    ]
  return (
    <div className='flex flex-wrap rounded-md w-fit'>
    {
        tabsData.map((item)=>(
<div onClick={()=>setActiveTab(item.id)} key={item.id} className={`${activeTab===item.id?'text-[#145389] font-semibold':'text-[#344054]'} text-[#344054] text-sm py-[10px] px-4 border border-[#D0D5DD] cursor-pointer `}>
    {item.title}
</div>
        ))
    }
    </div>
  )

}

export default NavTabs