import React from 'react'
import { useDrop, DragObjectWithType } from 'react-dnd'
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import { render as renderAmis } from 'amis'
import { ITEM } from '../../../contant'

interface DropItem extends DragObjectWithType {
    schema: any
}

export default inject('pageStore')(
    observer((props: any) => { 
        const { pageStore: { page, appendPageBody } } = props
        const [, drop] = useDrop({
            accept: ITEM,
            hover(item, monitor) {
                
            },
            drop(item: DropItem, monitor) { 
                console.log(item, 'drop item')
                appendPageBody(item.schema)
            }
        })
        console.log(page, 'rrr eee page')

        return <div ref={drop}>{
            page.body.length ? renderAmis(toJS(page)) : '拖放到这里来'
        }</div>
}))