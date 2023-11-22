import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../features/AmountSlice"
import nameReducer from "../features/NameList/Name"






export const store = configureStore({
    reducer:{
        AMT: amountReducer,
        NAME: nameReducer,
    },
})