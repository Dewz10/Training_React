import { createContext,useContext,useReducer } from "react";
import products from "../data/Products";
import CartReducer from "../reducer/CartReducer";
const CartContext = createContext();
const initState={
    products:products,
    total:0,
    amount:0
}
export const CartProvider=({children})=>{
    const [state,dispatch] = useReducer(CartReducer,initState);
    function formatMoney(money){
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <CartContext.Provider value={{...state,formatMoney}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(CartContext);
}