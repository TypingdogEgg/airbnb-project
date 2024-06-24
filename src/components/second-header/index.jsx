import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right.jsx'
const SecondHeader = memo((props) => {
  return (
    <HeaderWrapper>
        <div className="content">
            <div className='titles'>
                <div className="title">{props.title}</div>
                <div className="subtitle">{props.subtitle}</div>
            </div>
            <div className="more">
                <IconArrowRight />
            </div>
        </div>
    </HeaderWrapper>
  )
})
// 配置传入prop类型
SecondHeader.propTypes = {
    title:PropTypes.string,
    subtitle:PropTypes.string
}

export default SecondHeader