import styled from 'styled-components'

export const ActiveItem = styled.div<
    { active?: boolean;}
    >`
    position: relative;
    border: 2px solid ${p => p.active ? '#4191ff' : 'transparent'};
    border-radius: ${p => p.active ? '5px' : 'none'};
    box-sizing: border-box;

    & .item {
        ${p => p.active ? 'display: block;' : 'display: none;'}
        position: absolute;
        right: 0;
        top: -30px;
        width: 60px;
        height: 30px;
        border-left-top-radius: 5px;
        border-right-top-radius: 5px;
        background-color: #4191ff;
    }
`