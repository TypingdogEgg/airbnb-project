import hyRequest from '../index'

export const getHomeGoodPriceData = ()=>{
    return hyRequest.get({
        url:'/home/goodprice'
    })
}

export const getHomeHighScoreData = ()=>{
    return hyRequest.get({
        url:'/home/highscore'
    })
}

export const getHomeDiscountData = ()=>{
    return hyRequest.get({
        url:'/home/discount',
    })
}