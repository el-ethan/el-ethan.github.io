import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faStackOverflow,
    faInstagram,
    faGoodreads,
    faLinkedin,
    IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

import anime from 'animejs/lib/anime.es.js'

import { bubble } from './Bubble.module.css'

interface IconBubbleConfig {
    icon: IconDefinition
    link: string
}

const IconBubbleConfigs = {
    github: { icon: faGithub, link: 'https://github.com/el-ethan' },
    linkedin: { icon: faLinkedin, link: 'https://www.linkedin.com/in/ethan-e-skinner/' },
    soWork: { icon: faStackOverflow, link: 'https://stackoverflow.com/story/eskinner' },
    stackoverflow: { icon: faStackOverflow, link: 'https://stackoverflow.com/users/3642398/elethan?tab=profile' },
    instagram: { icon: faInstagram, link: 'https://www.instagram.com/ethans_cup/' },
    goodreads: { icon: faGoodreads, link: 'https://www.goodreads.com/user/show/75031232-ethan' },
}

interface IconBubbleProps {
    icon: keyof typeof IconBubbleConfigs
}

const IconBubble = ({ icon }: IconBubbleProps) => {
    const config: IconBubbleConfig = IconBubbleConfigs[icon]

    return (
        <a className={bubble} href={config.link} target="_blank">
            {<FontAwesomeIcon icon={config.icon}></FontAwesomeIcon>}
        </a>
    )
}

export default IconBubble
