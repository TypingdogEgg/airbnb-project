import PropTypes from 'prop-types'
import React, { memo,useCallback,useState } from 'react'
import { SectionWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { sectionData } = props
  const nameArr = sectionData.dest_address?.map(item => item.name)
  const [activeName, setActiveName] = useState(nameArr?.[0] ?? '')
  const changeActiveNameHandle = useCallback((name) => {
    setActiveName(name)
  }, [])
  return (
    <SectionWrapper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle} />
      <SectionTabs nameArr={nameArr} onChangeTab={changeActiveNameHandle} />
      <SectionRooms roomData={sectionData.dest_list?.[activeName]} itemWidth='33.3333%' />
      <SectionFooter footerText={activeName} />
    </SectionWrapper>
  )
})

HomeSectionV2.propTypes = {
  sectionData:PropTypes.object,
}

export default HomeSectionV2