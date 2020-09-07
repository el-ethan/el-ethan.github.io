import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faStackOverflow, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faMugHot, faBookReader } from "@fortawesome/free-solid-svg-icons"

import { bubble } from "./Bubble.module.css"

interface IconBubbleConfig {
    icon: IconDefinition
    link: string
}

const IconBubbleConfigs = {
    github: { icon: faGithub, link: "https://github.com/el-ethan" },
    linkedin: { icon: faLinkedin, link: "https://www.linkedin.com/in/ethan-e-skinner/" },
    soWork: { icon: faStackOverflow, link: "https://stackoverflow.com/story/eskinner" },
    stackoverflow: { icon: faStackOverflow, link: "https://stackoverflow.com/users/3642398/elethan?tab=profile" },
    coffee: { icon: faMugHot, link: "https://www.instagram.com/ethans_cup/" },
    books: { icon: faBookReader, link: "https://www.instagram.com/ethans_cup/" },
}

interface IconBubbleProps {
    icon: keyof typeof IconBubbleConfigs
}

const IconBubble = ({ icon }: IconBubbleProps) => {
    const config: IconBubbleConfig = IconBubbleConfigs[icon]

    return (
        <a className={bubble} href={config.link}>
            {<FontAwesomeIcon icon={config.icon}></FontAwesomeIcon>}
        </a>
    )
}

export default IconBubble
