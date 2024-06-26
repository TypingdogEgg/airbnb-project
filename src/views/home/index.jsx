import React, { memo, useEffect } from 'react'
import { fetchHomeDataAction } from '@/store/modules/home'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import HomeBanner from './child-components/home-banner'
import HomeSectionV1 from './child-components/home-section-v1'
import HomeSectionV2 from './child-components/home-section-v2'
import {isEmptyObject} from '@/utils/index.js'

const Home = memo(() => {
  const dispatch = useDispatch()
  // 获取store (浅拷贝 state改变才会更新store)
  const { goodPriceData,highScoreData,discountData,recommendData } = useSelector((state) => state.home, shallowEqual)
  // 发起请求
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 折扣 */}
        {isEmptyObject(discountData) && <HomeSectionV2 sectionData={discountData} />}
        {/* 推荐 */}
        {isEmptyObject(recommendData) && <HomeSectionV2 sectionData={recommendData} />}
        {/* 好价 */}
        {isEmptyObject(goodPriceData) && <HomeSectionV1 sectionData={goodPriceData}></HomeSectionV1>}
        {/* 高分 */}
        {isEmptyObject(highScoreData) && <HomeSectionV1 sectionData={highScoreData}></HomeSectionV1>}
      </div>
      <div style={{height:'100px'}}></div>
    </HomeWrapper>
  )
})

export default Home