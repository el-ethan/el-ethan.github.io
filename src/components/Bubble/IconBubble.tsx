import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faStackOverflow,
    faGoodreads,
    faLinkedin,
    faSpotify,
    IconDefinition,
    faSoundcloud,
    faInstagram,
    faBandcamp,
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
    stackoverflow: { icon: faStackOverflow, link: 'https://stackoverflow.com/users/3642398/elethan?tab=profile', color: '#f07178' },
    goodreads: { icon: faGoodreads, link: 'https://www.goodreads.com/user/show/75031232-ethan', color: '#c792ea' },
    spotify: { icon: faSpotify, link: 'https://open.spotify.com/artist/2ax0J2OsLpsH9kgAT6eqng', color: '#1ED760'},
    soundcloud: { icon: faSoundcloud, link: 'https://soundcloud.com/thousand-arms', color: '#f50'},
    instagram: { icon: faInstagram, link: 'https://www.instagram.com/thousand_armed_kannon/', color: '#FEDA75'},
    bandcamp: { icon: faBandcamp, link: 'https://thousand-armed-kannon.bandcamp.com/', color: '#4C9EBF'}

}

interface IconBubbleProps {
    label: keyof typeof IconBubbleConfigs
}

const IconBubble = ({ label }: IconBubbleProps) => {
    const config: IconBubbleConfig = IconBubbleConfigs[label]

    return (
        <div className={iconBubbleContainer}>
            <a className={bubble} href={config.link} aria-label={`Link to Ethan's ${label}`} target="_blank" rel="noreferrer">
                <FontAwesomeIcon color={config.color} icon={config.icon}></FontAwesomeIcon>
            </a>
        </div>
    )
}

export default IconBubble
