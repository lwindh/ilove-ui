import React from 'react'
import classNames from 'classnames'
import Menu, { IMenuProps } from './Menu'

export interface IMenuItemProps {
    index?: number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem: React.FC<IMenuProps> = (props) => {
    const { index, disabled, className, style, children } = props
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled
    })
    return (
        <li className = {classes} style = {style}>
            {children}
        </li>
    )
}

export default MenuItem;