import { createContext, useEffect, useState } from "react";
import { housesData } from "../../data";

export const HouseContext = createContext()

const HouseContextProvider = ({children}) =>{
    const [houses , setHouses] = useState(housesData);
    const [city , setCity] = useState('مقاصد (همه)');
    const [cities , setCities] = useState([]);
    const [property , setProperty] = useState('خانه ها (همه)');
    const [properties , setProperties] = useState([]);
    const [price , setPrice] = useState('قیمت ها (همه)');
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        const allcities = houses.map((house) => {
            return house.city
        })
        const uniqueCities = ['مقاصد (همه)' , ...new Set(allcities)];
        setCities(uniqueCities)
    },[])
    useEffect(() => {
        const allproperties = houses.map((house) => {
            return house.type
        })
        const uniqueProperties = ['خانه (همه)' , ...new Set(allproperties)];
        setProperties(uniqueProperties)
    },[])

    return(
        <HouseContext.Provider value={{
            houses,
            setHouses,
            city,
            setCity,
            cities,
            setCities,
            property,
            setProperty,
            properties,
            setProperties,
            price,
            setPrice,
            loading,
            setLoading
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContextProvider