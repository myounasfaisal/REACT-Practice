import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
    value: 0
};

// Create the counter slice
export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        multiply: (state, action) => {
            
            state.value =state.value * action.payload;
   
        }
    }
});

// Export the actions
export const { increment, decrement, multiply } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
