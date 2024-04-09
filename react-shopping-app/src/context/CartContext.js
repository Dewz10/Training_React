import { createContext,useContext } from "react";
import products from "../data/Products";
const CartContext = createContext();
const initState={
    products:products,
    total:0,
    amount:0
}

export const useCart=()=>{
    return useContext(CartContext);
}