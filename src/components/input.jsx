import React from 'react';

export const Input = (props) => {
    const { className, id, value, ...other } = props;

    return (
        <input className={className} id={id} value={value} other />
    )
}