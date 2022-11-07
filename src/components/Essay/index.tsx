import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import { container, headerLinkIcon, headerLink, firstLetter } from './Essay.module.css'

export const buildSectionId = headerText => {
    const textWithoutSpaces = headerText.split(' ').join('-')
    const textWithoutSpecialCharacters = textWithoutSpaces.replace(/[^A-Za-z0-9-]/g, '')
    return textWithoutSpecialCharacters.toLowerCase()
}

function SectionWithHeader({ headerText, children }) {
    const id = buildSectionId(headerText)

    return (
        <section id={id}>
            <h2>
                <a href={`#${id}`} className={headerLink}>
                    {headerText} <FontAwesomeIcon icon={faLink} className={headerLinkIcon} />
                </a>
            </h2>
            {children}
        </section>
    )
}

export function OpeningParagraph({ children }: { children: string }) {
    const [firstCharacter, ...theRest] = children

    return (
        <p>
            <span className={firstLetter}>{firstCharacter}</span>
            {theRest}
        </p>
    )
}

function Essay() {
    return (
        <main className={container}>
            <h1>A guide to effective, humane code review</h1>
            <SectionWithHeader headerText={'Use screenshots'}>
                <OpeningParagraph>Screenshots of your changes </OpeningParagraph>
            </SectionWithHeader>
            <SectionWithHeader headerText={'Smaller is better'}></SectionWithHeader>
            <SectionWithHeader headerText={'Review it yourself'}></SectionWithHeader>
            <SectionWithHeader headerText={'Use the "viewed" checkbox UI'}></SectionWithHeader>
        </main>
    )
}

export { Essay }
