import React from 'react'
import Countdown from 'react-countdown'

const Mystery = () => {
    const date = new Date('2022-02-25').getTime()

    return (
        <div
            style={{
                fontSize: '4em',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                padding: '5em',
                color: 'white',
            }}
        >
            <div>
                <Countdown date={date + 6.048e8} />
            </div>
            <div>
                <a
                    href="https://youtu.be/wO61D9x6lNY"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none', color: '#c792ea' }}
                >
                    Can you turn a sphere inside out?
                </a>
            </div>
        </div>
    )
}

export default Mystery
