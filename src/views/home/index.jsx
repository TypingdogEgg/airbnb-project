import React, { memo, useEffect } from 'react'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import HomeBanner from './child-components/home-banner'
import SecondHeader from '../../components/second-header'

const Home = memo(() => {
  const dispatch = useDispatch()
  // 获取store (浅拷贝 state改变才会更新store)
  const {goodPriceData} = useSelector((state)=>state.home,shallowEqual)
  // 发起请求
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SecondHeader title={goodPriceData.title} subtitle={'ewfewf'} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home