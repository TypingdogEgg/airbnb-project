import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { sectionData } = props
  return (
    <SectionWrapper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle ?? ''} />
      <SectionRooms roomData={sectionData.list} itemWidth={'25%'} />
      <SectionFooter />
    </SectionWrapper>
  )
})

HomeSectionV1.propTypes = {
  sectionData: PropTypes.object,
}

export default HomeSectionV1