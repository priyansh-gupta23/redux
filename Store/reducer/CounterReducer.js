import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: 0,
}

export const CounterReducer = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment:(state, action) =>{
            state.value += action.payload;
        },

        decrement:(state, action) =>{
            state.value -= action.payload;
        },
    },
});

export default CounterReducer.reducer;
export const {increment,decrement} = CounterReducer.actions;

