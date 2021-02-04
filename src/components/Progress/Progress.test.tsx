import React from 'react'
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Progress, { ProgressProps } from './Progress'

const testProps: ProgressProps = {
    percent: 30,
    showText: true,
    theme: 'primary',
}

let wrapper: RenderResult,progressElement: HTMLElement

describe('test Progress component', () => {
    beforeEach(() => {
        wrapper = render(<Progress {...testProps}/>)
        progressElement = wrapper.getByTestId('test-progress')
    })

    it('should render correct Progress baswd on default prvops', () => {
        expect(progressElement).toBeInTheDocument()
        expect(wrapper.getByText('30%')).toBeInTheDocument()
        expect(progressElement.querySelector(":scope > div > div")).toHaveClass('lv-progress-bar-inner color-primary')
    })
})