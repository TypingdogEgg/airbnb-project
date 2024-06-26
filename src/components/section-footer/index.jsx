import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right.jsx'
import theme from '@/assets/theme'
const SectionFooter = memo((props) => {
    const { footerText } = props
    let text = '查看更多'
    if(footerText){
        text = text + footerText + '房源'
    }
    return (
        <FooterWrapper color={footerText?theme.color.secondaryColor:'#000'} >
            <div className='text'>{text}</div>
            <IconArrowRight />
        </FooterWrapper>
    )
})

SectionFooter.propTypes = {
    footerText: PropTypes.string
}

export default SectionFooter