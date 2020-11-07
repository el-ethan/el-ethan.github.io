import React from 'react'

import {css} from 'emotion'



export function ThoughtBubble() {
    return (
        <div className={css`
        right: 20%;
        position: absolute;
        top: 10%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
`}>
            <div className={css`
            border: 1px solid hotpink;
            width: 150px;
            height: 100px;
            border-radius: 50%;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            `}>
                <span>hello</span>
            </div>
            <div className={css`
                width: 25px;
                height: 25px;
                border: 1px solid hotpink;
                border-radius: 50%;
                margin: .25em;
            `}></div>
            <div className={css`
                width: 10px;
                height: 10px;
                border: 1px solid hotpink;
                border-radius: 50%;
            `}></div>
        </div>
    )
}

export default ThoughtBubble