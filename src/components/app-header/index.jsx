import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './child-components/header-left'
import HeaderCenter from './child-components/header-center'
import HeaderRight from './child-components/header-right'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader