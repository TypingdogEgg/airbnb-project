import React, { memo, useEffect } from 'react'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import HomeBanner from './child-components/home-banner'
import HomeSectionV1 from './child-components/home-section-v1'
import SectionHeader from '../../components/section-header'
import SectionRooms from '../../components/section-rooms'

const Home = memo(() => {
  const dispatch = useDispatch()
  // 获取store (浅拷贝 state改变才会更新store)
  const { goodPriceData,highScoreData,discountData } = useSelector((state) => state.home, shallowEqual)
  // 发起请求
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount" style={{marginTop:'30px'}}>
          <SectionHeader title={discountData.title} subtitle={discountData.subtitle} />
          <SectionRooms roomData={discountData.dest_list?.['成都']} itemWidth='33.3333%' />
        </div>
        <HomeSectionV1 sectionData={goodPriceData}></HomeSectionV1>
        <HomeSectionV1 sectionData={highScoreData}></HomeSectionV1>
      </div>
    </HomeWrapper>
  )
})

export default Home