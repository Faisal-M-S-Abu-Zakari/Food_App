import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('Products/fetchProducts' , async(searchTerm)=>{
    const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchTerm}`) ;
    const data = await res.json()
    return data.recipes
})

const Products = createSlice({
    initialState: { // Correctly define initialState
    recipes: [],
    Fav :[] ,
  },
    name : 'Products' ,
    reducers:{
        addToFavourite:(state , action)=>{
            const exists = state.Fav.some(item => item.recipe_id === action.payload.recipe_id);
            if (!exists) {
                state.Fav.push(action.payload);
            }
        },
         removeFromFavourite:(state , action)=>{
            state.Fav= state.Fav.filter((fav) => fav.recipe_id !== action.payload);
        } ,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled , (state , action)=>{
            state.recipes = [...action.payload];
        })
    }
})

export const {addToFavourite , removeFromFavourite , changingExist} = Products.actions
export default Products.reducer