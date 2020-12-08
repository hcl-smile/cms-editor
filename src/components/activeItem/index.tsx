import React from 'react'
import { ActiveItem } from './style'

export default (props) => { 
    return <ActiveItem>
        <div className={'item'} />
        <div>{ props.children}</div>
    </ActiveItem>
}