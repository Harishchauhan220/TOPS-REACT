// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// const initialState = {amount: 10}

// const AmountSlice = createSlice({
//     name:"amount",
//     initialState,
//     reducers: {
//         decAmount: (state,action)=>{
//             state.amount--;
//         },
//     },
// })

// export default AmountSlice.reducer;
// export const {decAmount} = AmountSlice.actions;




const initialState = {amount : 10}

const AmountSlice = createSlice({
    name:"amount",
    initialState,
    reducers: {
        decAmount: (state,action)=>{
            state.amount--;
        },
    },
})

export default AmountSlice.reducer;
export const {decAmount}= AmountSlice.actions;