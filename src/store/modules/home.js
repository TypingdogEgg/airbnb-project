import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/service";

export const fetchHomeDataAction = createAsyncThunk('fetchdata',async()=>{
    const res = await getHomeGoodPriceData()
    return res
})

const homeSlice = createSlice({
    name:'home',
    initialState:{
        goodPriceData:[],
    },
    reducers:{
        changeGoodPriceDataAction(state,{payload}){
            state.goodPriceData = payload
        }
    },
    // 添加异步请求与state关系
    extraReducers:(builder)=>{
        builder.addCase(fetchHomeDataAction.fulfilled,(state,{payload})=>{
            state.goodPriceData = payload
        })
    }
})
export const {changeGoodPriceDataAction, } = homeSlice.actions
export default homeSlice.reducer