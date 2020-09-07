import React from "react"

import { emojiBubble, bubble } from "./Bubble.module.css"

interface EmojiBubbleConfig {
    emoji: string
    link: string
}

const EmojiBubbleConfigs = {
    baseball: {
        emoji: "⚾",
        link: "https://profiles.sports.yahoo.com/user/BI2Q77LX43DUS6QAILUAZIQ7HU/?sport=baseball",
    },
    coffee: { emoji: "☕", link: "https://www.instagram.com/ethans_cup/" },
    books: { emoji: "📚", link: "https://www.goodreads.com/user/show/75031232-ethan" },
}

interface EmojiBubbleProps {
    emoji: string
}

const EmojiBubble = ({ emoji }: EmojiBubbleProps) => {
    const config: EmojiBubbleConfig = EmojiBubbleConfigs[emoji]

    return (
        <div>
            <a className={bubble} href={config.link}>
                <div className={emojiBubble}>{config.emoji}</div>
            </a>
        </div>
    )
}

export default EmojiBubble
