import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "../features/counter/CounterSlice.js"; 

const Store = configureStore({
    reducer: {
        counter: CounterSlice
    }, 
})

export default Store 
