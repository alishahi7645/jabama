import React, { useContext } from 'react'
import CityDwopDown from '../dropdowns/CityDwopDown'
import PropertyDropdown from '../dropdowns/PropertyDropdown'
import PriceDropDowns from '../dropdowns/PriceDropDowns'
import { CiSearch } from "react-icons/ci";
import { HouseContext } from '../context/HouseContext';

function Search() {
  const {handleClick} = useContext(HouseContext);
  return (
    <div className='text-gray-100 px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 backdrop-blur-[2px] lg:bg-transparent lg:backdrop-blur rounded'>
      <CityDwopDown/>
      <PropertyDropdown/>
      <PriceDropDowns/>
      <button onClick={() => handleClick()} className='bg-red-500 hover:bg-red-600 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center'><CiSearch /></button>
    </div>
  )
}

export default Search
