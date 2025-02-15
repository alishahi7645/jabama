import { Menu } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import { HiMiniMapPin } from 'react-icons/hi2'
import { HouseContext } from '../context/HouseContext';
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'

function PropertyDropdown() {
  const { property , setProperty , properties } = useContext(HouseContext);
  const [ isOpen , setIsOpen ] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMiniMapPin className="dropdown-icon-primary" />
        <div>
          <div className="test-[15px] font-medium leading-tight">{property}</div>
          <div className="text-[13px]">نوع ملک خود را انتخاب کنید</div>
        </div>
        {isOpen ? (
          <MdKeyboardArrowUp className="dropdown-icon-secondary" />
        ) : (
          <MdKeyboardArrowDown className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              key={index}
              as="li"
              onClick={() => setProperty(property)}
              className="cursor-pointer rounded-full px-2 py-2 hover:bg-red-500 transition"
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default PropertyDropdown;
