import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData,getHomeRecommendData, } from "@/service";

export const fetchHomeDataAction = createAsyncThunk('fetchdata',(payload,{dispatch})=>{
    // const res = await getHomeGoodPriceData()
    // 不通过extraReducers，直接请求数据改state
    getHomeGoodPriceData().then(res=>{
        // console.log(res);
        dispatch(changeGoodPriceDataAction(res))
    })
    getHomeHighScoreData().then(res=>{
        // console.log(res);
        dispatch(changeHighScoreDataAction(res))
    })
    getHomeDiscountData().then(res=>{
        // console.log(res);
        dispatch(changeDiscountDataAction(res))
    })
    getHomeRecommendData().then(res=>{
        // console.log(res);
        dispatch(changeRecommendDataAction(res))
    })

})

const homeSlice = createSlice({
    name:'home',
    initialState:{
        goodPriceData:{},
        highScoreData:{},
        discountData:{},
        recommendData:{},
    },
    reducers:{
        changeGoodPriceDataAction(state,{payload}){
            state.goodPriceData = payload
        },
        changeHighScoreDataAction(state,{payload}){
            state.highScoreData = payload
        },
        changeDiscountDataAction(state,{payload}){
            state.discountData = payload
        },
        changeRecommendDataAction(state,{payload}){
            state.recommendData = payload
        }
    },
    // 添加异步请求与state关系
    // extraReducers:(builder)=>{
    //     builder.addCase(fetchHomeDataAction.fulfilled,(state,{payload})=>{
    //         state.goodPriceData = payload
    //     })
    // }
})
export const {changeGoodPriceDataAction,changeHighScoreDataAction,changeDiscountDataAction,changeRecommendDataAction } = homeSlice.actions
export default homeSlice.reducer