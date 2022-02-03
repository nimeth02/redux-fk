import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface ResevationInterface{
    value:string[]
}

const initialState:ResevationInterface={
    value:['hell boy','trr']
}

export const resevationslice=createSlice({
    name:'resevation',
    initialState,
    reducers:{
        addresevation:(state,action:PayloadAction<string>)=>{
            state.value.push(action.payload)
        }
    }
})

export const {addresevation}=resevationslice.actions

export default resevationslice.reducer