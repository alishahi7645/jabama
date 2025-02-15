import { createContext } from "react";


export const HouseContext = createContext()

const HouseContextProvider = ({children}) =>{
    return(
        <HouseContext.Provider value={""}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContextProvider