import React from 'react'
import { css } from 'emotion'

const getRandomNumber = () => Math.floor(Math.random() * 100)

const defaultSize = '30px'

function getDefaultStyles() {
    return css`
        @keyframes onward {
            to {
                left: 50%;
                right: 50%;
                top: 50%;
            }
        }
        position: absolute;
        left: ${getRandomNumber()}%;
        top: ${getRandomNumber()}%;
        right: ${getRandomNumber()}%;
        bottom: ${getRandomNumber()}%;
        animation: ${getRandomNumber()}s onward;
        opacity: 0.5;
    `
}

export function Triangle() {
    return (
        <div
            className={css`
                width: 0;
                height: 0;
                border-left: ${defaultSize} solid transparent;
                border-right: ${defaultSize} solid transparent;
                border-bottom: ${defaultSize} solid #c3e88d;
                ${getDefaultStyles()}
            `}
        ></div>
    )
}

export function Square() {
    return (
        <div
            className={css`
                width: ${defaultSize};
                height: ${defaultSize};
                background: #ffcb6b;
                ${getDefaultStyles()}
            `}
        ></div>
    )
}

export function Circle() {
    return (
        <div
            className={css`
                width: ${defaultSize};
                height: ${defaultSize};
                border-radius: 50%;
                background: #c792ea;
                ${getDefaultStyles()}
            `}
        ></div>
    )
}

export function Squiggle() {
    return (
        <span
            className={css`
                text-decoration-line: underline;
                text-decoration-style: wavy;
                text-decoration-color: #f07178;
                color: #292d3e !important;
                font-size: ${defaultSize};
                transform: rotate(${getRandomNumber()}deg);
                ${getDefaultStyles()}
            `}
        >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
    )
}

export function AllTheShapes() {
    const twentyFiveTimes = [...Array(50).keys()]

    return (
        <div>
            {twentyFiveTimes.map(_ => {
                return (
                    <>
                        <Triangle />
                        <Square />
                        <Circle />
                        <Squiggle />
                    </>
                )
            })}
        </div>
    )
}
