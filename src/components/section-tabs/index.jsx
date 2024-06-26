import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'

Promise.resolve().then(()=>{
    return new Error(123123)
}).then(res=>{
    console.log('res:');
}).catch(err=>{
    console.log('err',err);
})

const SectionTabs = memo((props) => {
    const { nameArr, onChangeTab } = props
    const [activeIndex,setActiveIndex] = useState(0)
    function changeTabHandle(index,name){
        setActiveIndex(index)
        onChangeTab(name)
    }
    return (
        <TabsWrapper>
            {nameArr?.map((item, index) => {
                return (
                    <div className={classNames("tab",{'active':activeIndex===index})} onClick={()=>changeTabHandle(index,item)} key={item}>{item}</div>
                )
            })}
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    nameArr: PropTypes.array,
    onChangeTab:PropTypes.func
}

export default SectionTabs