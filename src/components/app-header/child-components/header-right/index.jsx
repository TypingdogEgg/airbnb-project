import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global.jsx'
import IconProfileMenu from '@/assets/svg/icon-profile-menu.jsx'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar.jsx'
const HeaderRight = memo(() => {
  const [panelStatus,setPanelStatus] = useState(false)
  useEffect(()=>{
    const  windowClikHandle = ()=>{
      setPanelStatus(false)
    }
    window.addEventListener('click',windowClikHandle,true)

    return ()=>{
      window.removeEventListener('click',windowClikHandle,true)
    }
  },[])

  return (
    <RightWrapper>
          <div className="global">
            <IconGlobal />
          </div>
          <div className="profile" onClick={()=>{setPanelStatus(true)}}>
            <IconProfileMenu />
            <IconProfileAvatar />

            {panelStatus && (
              <div className="panel">
                <div className="top">
                  <div className="item register">注册</div>
                  <div className="item login">登录</div>
                </div>
                <div className="bottom">
                  <div className="item help">帮助中心</div>
                </div>
              </div>
            )}
          </div>
    </RightWrapper>
  )
})

export default HeaderRight