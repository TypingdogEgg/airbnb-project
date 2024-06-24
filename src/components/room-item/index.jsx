// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rate } from 'antd'

const RoomItem = memo((props) => {
    const {itemData,itemWidth} = props
    return (
        <ItemWrapper itemWidth={itemWidth}>
            <div className='inner'>
                <div className='cover'>
                    <img src={itemData.picture_url} alt="" />
                </div>
                <div className='desc'>{itemData.verify_info.messages.join("·")}</div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>¥{itemData.price}/晚</div>
                <div className='bottom'>
                    <Rate disabled 
                        defaultValue={itemData.star_rating ?? 5}
                        className='rate' />
                    <span className='count'>{itemData.reviews_count}</span>
                    {itemData.bottom_info && <span>·{itemData.bottom_info.content}</span>}
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {

}

export default RoomItem