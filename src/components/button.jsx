import React from 'react'

export const Button = (props) => {
    const { className, id, value, ...other } = props;

    return (
        <button className={className} id={id} other >{value}</button>
    )
}