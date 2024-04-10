import { createContext,useContext,useReducer,useEffect } from "react";
import products from "../data/Products";
import CartReducer from "../reducer/CartReducer";
import { type } from "@testing-library/user-event/dist/type";
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
    function removeItem(id) {
        console.log("ลบ id:" + id);
        dispatch({type:"REMOVE",payload:id})
    }
    function addQuantity(id) {
        console.log("เพิ่มปริมาณสินค้า id:" + id);
        dispatch({type:"ADD_QUANTITY",payload:id})
    }
    useEffect(()=>{
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.products])
    return (
        <CartContext.Provider value={{...state,formatMoney,removeItem,addQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>{
    return useContext(CartContext);
}