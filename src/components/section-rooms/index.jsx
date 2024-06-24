import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
    const {roomData=[],itemWidth} = props
    console.log(props);
  return (
    <RoomsWrapper>
          {roomData.slice(0, 8)?.map((item) => {
              return (
                  <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />
              )
          })}
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
    roomData:PropTypes.array,
    itemWidth:PropTypes.string,
}

export default SectionRooms