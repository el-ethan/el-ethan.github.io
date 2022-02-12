import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faStackOverflow,
    faInstagram,
    faGoodreads,
    faLinkedin,
    IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

import { bubble, iconBubbleContainer } from './Bubble.module.css'


interface IconBubbleConfig {
    icon: IconDefinition
    link: string
    color: string
}

const IconBubbleConfigs = {
    github: { icon: faGithub, link: 'https://github.com/el-ethan', color: '#c3e88d' },
    linkedin: { icon: faLinkedin, link: 'https://www.linkedin.com/in/ethan-e-skinner/', color: '#82AAFF' },
    soWork: { icon: faStackOverflow, link: 'https://stackoverflow.com/story/eskinner', color: '#c792ea' },
    stackoverflow: { icon: faStackOverflow, link: 'https://stackoverflow.com/users/3642398/elethan?tab=profile', color: '#f07178' },
    instagram: { icon: faInstagram, link: 'https://www.instagram.com/ethans_cup/', color: '#ffcb6b' },
    goodreads: { icon: faGoodreads, link: 'https://www.goodreads.com/user/show/75031232-ethan', color: '#c792ea' },
}

interface IconBubbleProps {
    icon: keyof typeof IconBubbleConfigs
}

const IconBubble = ({ icon }: IconBubbleProps) => {
    const config: IconBubbleConfig = IconBubbleConfigs[icon]

    return (
        <div className={iconBubbleContainer}>
            <a className={bubble} href={config.link} aria-label={`Link to Ethan's ${icon}`} target="_blank">
                {<FontAwesomeIcon color={config.color} icon={config.icon}></FontAwesomeIcon>}
            </a>
        </div>
    )
}

export default IconBubble
