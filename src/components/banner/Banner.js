import React from 'react'
import Search from '../search/Search'
import bgimg from '../../assets/img/banner.jpg'


function Banner() {
    const bgimage = 'https://cdn.jabama.com/image/jabama-images/1297502/9729533f-96cd-475c-8a5b-4c7f427e34f9.jpg'
  return (
    <div className='h-[90vh] bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${bgimg})`}}>
      <div className='lg:ml-8 cl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='w-[140vh] text-3xl lg:text-[58px] font-semibold leading-none my-8 text-gray-100 backdrop-blur-[2px]'>
            <span className='text-red-500'> ویلای</span>
            ایده آلت همینجاست 
        </h1>
        <p className='max-w-[480px] my-8 mx-4 text-white text-right text-2xl backdrop-blur-[2px]'>
            <span className='text-sm'>اجاره ویلا, سوییت و اقامتگاه در شمال و سراسر ایران</span>
            <br/>
            سفر پاییزی ازتو. جاباما
        </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'></div>
      <Search/>
    </div>
  )
}

export default Banner
