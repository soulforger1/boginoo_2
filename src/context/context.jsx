import React, { createContext } from 'react';

export const mainContext = createContext({
    user: '',
    history: []
})

export const Provider = ({ children }) => {

    
    return (
        <mainContext.Provider>
            {children}
        </mainContext.Provider>
    )
}