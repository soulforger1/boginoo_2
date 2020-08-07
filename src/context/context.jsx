import React, { createContext, useState } from 'react';

export const mainContext = createContext({ user: '' })

export const Provider = ({ children }) => {
    const [userInformation, setUserInformation] = useState({ user: '' })

    return (
        <mainContext.Provider value={{userInformation, setUserInformation}}>
            {children}
        </mainContext.Provider>
    )
}