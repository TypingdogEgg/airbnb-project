import hyRequest from '../index'

export const getHomeGoodPriceData = ()=>{
    return hyRequest.get({
        url:'/home/goodprice'
    })
}