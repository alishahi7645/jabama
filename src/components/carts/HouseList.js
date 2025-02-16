import React, { useContext } from 'react'
import { HouseContext } from '../context/HouseContext'
import {ImSpinner2} from 'react-icons/im'
import { Link } from 'react-router-dom';
import House from './House';

function HouseList() {
    const {houses , loading} = useContext(HouseContext);

    if(loading) {
        return(
            <ImSpinner2 className='mx-auto animate-spin text-red-600 text-4xl mt-[200px]'/>
        )
    }
    if(houses.length < 1){
        return(
            <div className='text-center text-3xl text-red-700 mt-48'>
                متاسفانه موردی پیدا نشد !
            </div>
        )
    }
  return (
    <section className='mb-20'>
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                {
                    houses.map((house , index) => {
                        return(
                            <Link to={`/property/${house.id}`} key={index}>
                                <House house={house}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default HouseList
