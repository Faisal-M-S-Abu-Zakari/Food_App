import { configureStore } from "@reduxjs/toolkit";
import searchProduct from './searchProduct'
import Products from './Products'
export const store = configureStore({
    reducer:{
        search : searchProduct ,
        Products : Products
    }
})