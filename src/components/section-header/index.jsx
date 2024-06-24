import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right.jsx'
const SectionHeader = memo((props) => {
    return (
        <HeaderWrapper>
            <div className="content">
                <div className='titles'>
                    <div className="title">{props.title}</div>
                    <div className="subtitle">{props.subtitle}</div>
                </div>
                <div className="more">
                    <IconArrowRight size={18} />
                </div>
            </div>
        </HeaderWrapper>
    )
})
// 配置传入prop类型
SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default SectionHeader