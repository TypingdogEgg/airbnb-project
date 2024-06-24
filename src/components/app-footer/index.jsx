import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from '@/assets/data/footer.json'
const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className="list">
        {footerData.map((item,index) => {
          return (
            <div className='column' key={index}>
              <div className="name">{item.name}</div>
              {item.list.map((row,index) => {
                return (
                  <div className="row" key={index}>
                    {row}
                  </div>)
              })}
            </div>)
        })}
      </div>
      <div className="under">
        <p>2022 Airbnb, Inc. All rights reserved.条款·隐私政策·网站地图·全国旅游投诉渠道 12301</p>
      </div>
    </FooterWrapper>
  )
})

export default Footer