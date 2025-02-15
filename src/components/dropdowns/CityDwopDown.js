import { Menu } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import { HiMiniMapPin } from 'react-icons/hi2'
import { HouseContext } from '../context/HouseContext';
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'

function CityDwopDown() {
    const {city , setCity , cities} = useContext(HouseContext)
    const [isOpen , setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
        <Menu.Button className='dropdown-btn w-full text-left' onClick={()=> setIsOpen(!isOpen)}>
            <HiMiniMapPin className='dropdown-icon-primary'/>
            <div>
                <div className='test-[15px] font-medium leading-tight'>{city}</div>
                <div className='text-[13px]'>انتخاب مقصد</div>
            </div>
            {
                isOpen ? (
                    <MdKeyboardArrowUp className='dropdown-icon-secondary'/>
                ): (
                    <MdKeyboardArrowDown className='dropdown-icon-secondary'/>
                )
            }
        </Menu.Button>
        <Menu.Items className='dropdown-menu'>
            {
                cities.map((city , index) =>{
                    return(
                        <Menu.Item key={index} as='li' onClick={() => setCity(city)} className='cursor-pointer rounded-full px-2 py-2 hover:bg-red-500 transition'>
                            {city}
                        </Menu.Item>
                    )
                })
            }
        </Menu.Items>
    </Menu>
  )
}

export default CityDwopDown
