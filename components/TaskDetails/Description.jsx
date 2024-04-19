import React from 'react'

const Description = ({description}) => {
  return (
    <div className='flex flex-col w-full gap-[10px]'>
        <h4 className='text-sm font-medium text-[#475467]'>Description</h4>
        <p className='text-xs text-[#475467]'>{description}</p>
    </div>
  )
}

export default Description