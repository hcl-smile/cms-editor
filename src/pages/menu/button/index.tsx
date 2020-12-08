import React from 'react'
import { useDrag } from 'react-dnd'
import { inject, observer } from 'mobx-react'
import { render as renderAmis } from 'amis'
import { ITEM } from '../../../contant'
import ActiveItem from '../../../components/activeItem'

const schema = {
    id: 'button-id',
    type: 'button',
    label: '按钮'
}

export default inject('pageStore')(
    observer((props: any) => { 
        const [, drag] = useDrag({
            item: {
                type: ITEM,
                schema
            },
            begin(monitor) { 

            },
            end(item: any, monitor) { 
            }
        })

        return <ActiveItem ref={drag}>
            {
                renderAmis(schema)
            }
        </ActiveItem>
}))