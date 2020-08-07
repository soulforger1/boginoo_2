import React from 'react';

export const Input = (props) => {
    const { className, id, value, placeholder, onChange } = props;

    return (
        <input className={className} id={id} value={value} placeholder={placeholder} onChange={onChange} />
    )
}