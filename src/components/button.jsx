import React from 'react'

export const Button = (props) => {
    const { className, id, value, onClick, ...others } = props;

    return (
        <button className={className} id={id} onClick={onClick}  {...others}>{value}</button>
    )
}