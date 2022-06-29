import { useState, createContext } from "react";

export const UIContext = createContext({
    isLoading: false,
    setIsLoading: () => {}
});


const UIContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);

    return <UIContext.Provider value={{isLoading, setIsLoading}}>{children}</UIContext.Provider>
}

export default UIContextProvider;