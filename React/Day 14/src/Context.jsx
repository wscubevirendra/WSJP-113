import React, { createContext, useState } from 'react'
const StoreContext = createContext();

export default function Context({ children }) {
    const [count, setCount] = useState(10);
    function countHandler() {
        setCount(count + 1)
    }
    return (
        <StoreContext.Provider value={{ count, countHandler }}>
            {children}
        </StoreContext.Provider>
    )
}



export { StoreContext }

