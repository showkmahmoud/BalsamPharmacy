import React, {useState, createContext} from 'react';

export const Store = createContext()

const ContextProvider = ({ children }) => {
    const initialState = {
        cartCounter: 0,
        cartItems: []
    }
    const [cart, setCart] = useState(initialState)

    return (
        <Store.Provider value={{cart, setCart}}>{children}</Store.Provider>
    )
}
export default ContextProvider
