import { Menu } from '@headlessui/react'
import React, { useContext, useState } from 'react'
import { HiMiniMapPin } from 'react-icons/hi2'
import { HouseContext } from '../context/HouseContext';
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

function PriceDropDowns() {
  const { price , setPrice } = useContext(HouseContext);
  const [ isOpen , setIsOpen ] = useState(false);
  const prices = [
    {
      value: ' قیمت (همه)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '20000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
  ];

  return (
     <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'> فیلتر محدوده قیمت </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer rounded-full px-2 py-2 hover:bg-red-500 transition'
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default PriceDropDowns;
