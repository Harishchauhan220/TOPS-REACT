import { createSlice } from "@reduxjs/toolkit";


const initialState = {nameArr:[]}




const nameSlice = createSlice({
    name:"nameList",
    initialState,
    reducers: {
        addName: (state,action)=>{
            console.log("action",action);
            state.nameArr.push(action.payload)
        },
        removeName: (state,action)=>{
            state.nameArr.splice(action.payload,1)
        },
        updateName: (state,{payload})=>{
            state.nameArr.splice(payload?.index,1,payload?.newData)
        },
    },
})

export default nameSlice.reducer;
export const {addName,removeName,updateName} = nameSlice.actions;
