import { createSlice } from "@reduxjs/toolkit";

const searchProduct=createSlice({
    initialState:{
    value: '',
  },
    name : 'search',
    reducers:{
        getValue:(state , action)=>{
            state.value = action.payload
        }
    }
})

export const {getValue} = searchProduct.actions
export default searchProduct.reducer ;