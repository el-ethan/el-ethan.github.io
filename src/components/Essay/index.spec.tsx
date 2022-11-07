import React from 'react'
import { render } from '@testing-library/react'
import { buildSectionId, OpeningParagraph } from '.'

describe('buildSectionId', () => {
    it('should remove special characters', () => {
        expect(buildSectionId('what is a "warg"?')).toBe('what-is-a-warg')
    })

    it('should create a dash separated result', () => {
        expect(buildSectionId('what is a warg')).toBe('what-is-a-warg')
    })

    it('should lower case the the id', () => {
        expect(buildSectionId('What is a Warg?')).toBe('what-is-a-warg')
    })
})

describe('OpeningParagraph', () => {
    it('Applies special styling to the first letter of the paragraph', () => {
        const { getByText } = render(<OpeningParagraph>{`Test sentence`}</OpeningParagraph>)
        expect(getByText('T')).toBeDefined()
        expect(getByText('est sentence')).toBeDefined()
    })
})
