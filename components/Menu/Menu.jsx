import React from 'react'
import { PanelMenu } from 'primereact/panelmenu';
import { FaTimes } from 'react-icons/fa';

const Menu = ({isOpen,setIsOpen}) => {
    
    
    
    const items = [     
        {
            label: 'Proje 1',
           
            items: [
             
                    {
                        label: 'Overview',                  
                    },
                    {
                        label: 'Notifications',                   
                    },
             
                {
                    label: 'Analytics',                        
                },
                {
                    label: 'Reports',                        
                }
            ]
        },
        {
            label: 'Proje 2',
           
            items: [
             
                    {
                        label: 'Overview',                  
                    },
                    {
                        label: 'Notifications',                   
                    },
             
                {
                    label: 'Analytics',                        
                },
                {
                    label: 'Reports',                        
                }
            ]
        },
        {
            label: 'Proje 3',
           
            items: [
             
                    {
                        label: 'Overview',                  
                    },
                    {
                        label: 'Notifications',                   
                    },
             
                {
                    label: 'Analytics',                        
                },
                {
                    label: 'Reports',                        
                }
            ]
        },
        {
            label: 'Proje 4',
           
            items: [
             
                    {
                        label: 'Overview',                  
                    },
                    {
                        label: 'Notifications',                   
                    },
             
                {
                    label: 'Analytics',                        
                },
                {
                    label: 'Reports',                        
                }
            ]
        },
        
    ];
  return (
    <div id='sidebar' className={`${isOpen?'block':'hidden'} flex flex-col justify-between h-full absolute top-0 md:left-[72px] w-full md:w-[282px]  bg-white text-black p-4 pt-9`}>
        <div>
        <div className='md:hidden w-full flex items-end justify-end mb-4'>
        <FaTimes size={25} onClick={()=>setIsOpen(!isOpen)} className='text-right'/>
        </div>
        
        <h3 className='font-medium text-[#101828] mb-4'>Projeler</h3>
        <PanelMenu model={items} className="w-full md:w-20rem" onClick={(item)=>console.log(item)} />
        </div>
        <div>
            <h4 className='font-semibold text-sm text-[#101828]'>Mustafa ÖRS</h4>
            <h5 className='text-sm text-[#475467]'>mstfrs68@gmail.com</h5>
        </div>
    </div>
  )
}

export default Menu