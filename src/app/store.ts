import { configureStore } from "@reduxjs/toolkit";
import resevationsliceReducer from '../features/resevationslice'

export const store=configureStore({
    reducer:{
        resevationslice:resevationsliceReducer
    }
})

export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch