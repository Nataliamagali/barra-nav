import React, { createContext, useState } from 'react';

// Aqui se crea el contexto
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('Bob Smith'); 
    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
};
