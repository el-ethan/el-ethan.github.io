import React, { FunctionComponent } from 'react';
import { column, row } from './CenteredContainer.module.css';


export const CenteredColumn: FunctionComponent = ({children}) => {
    return (
        <div className={column}>
            {children}
        </div>
    );
}

export const CenteredRow: FunctionComponent = ({children}) => {
    return (
        <div className={row}>
            {children}
        </div>
    );
}