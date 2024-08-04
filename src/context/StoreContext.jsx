import { createContext, useState,useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreConstext = createContext(null)

const StoreConstextProvider = (props) =>{

    const [cartItems,setCartItems] = useState({});

    const addToCart = (itemID) => {
        if (!cartItems[itemID]) {
            setCartItems((prev)=>({...prev,[itemID]:1}))
        }
        else{
            setCartItems((prev) => ({...prev,[itemID]:prev[itemID]+1}))
        }
    }

    const removeFromCart = (itemID) =>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }

    
    useEffect(() => {
      console.log(cartItems);
    },[cartItems])
    

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreConstext.Provider value={contextValue}>
            {props.children}
        </StoreConstext.Provider>
    )
}

export default StoreConstextProvider