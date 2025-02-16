import React, { createContext, useState, useEffect } from 'react';

// import data
import { housesData } from '../../data';

// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [city, setCity] = useState(" (همه) مقاصد");
  const [cities, setCities] = useState([]);
  const [property, setProperty] = useState("(همه) خانه ها");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState( "(همه) قیمت‌ها");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // return all countries
    const allcities = houses.map((house) => {
      return house.city;
    });

    // remove duplicates
    const uniqueCountries = [' (همه) مقاصد', ...new Set(allcities)];

    // set countries state
    setCities(uniqueCountries);
  }, []);

  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = [' (همه) تمام خانه ها', ...new Set(allProperties)];

    // set countries state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(همه)');
    };

    // get first string (price) and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    // get last string (price) and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // all values are selected
      if (
        house.city === city &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      // all values are default
      if (isDefault(city) && isDefault(property) && isDefault(price)) {
        return house;
      }
      // country is not default
      if (!isDefault(city) && isDefault(property) && isDefault(price)) {
        return house.city === city;
      }
      // property is not default
      if (!isDefault(property) && isDefault(city) && isDefault(price)) {
        return house.type === property;
      }
      // price is not default
      if (!isDefault(price) && isDefault(city) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // country and property is not default
      if (!isDefault(city) && !isDefault(property) && isDefault(price)) {
        return house.city === city && house.type === property;
      }
      // country and price is not default
      if (!isDefault(city) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.city === city;
        }
      }
      // property and price is not default
      if (isDefault(city) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        city,
        setCity,
        cities,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;