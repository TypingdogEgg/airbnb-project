import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionWrapper } from './style'
import SectionHeader from '../../../../components/section-header'
import SectionRooms from '../../../../components/section-rooms'

const HomeSectionV1 = memo((props) => {
  const { sectionData } = props
  return (
    <SectionWrapper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle ?? ''} />
      <SectionRooms roomData={sectionData.list} itemWidth={'25%'} />
    </SectionWrapper>
  )
})

HomeSectionV1.propTypes = {}

export default HomeSectionV1