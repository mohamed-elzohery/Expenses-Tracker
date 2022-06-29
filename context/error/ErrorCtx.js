import { useState, createContext } from "react";

export const ErrorCTX = createContext({
    isError: false,
    setIsError: () => {}
});


const ErrorCTXProvider = ({children}) => {
    const [isError, setIsError] = useState(false);

    return <ErrorCTX.Provider value={{isError, setIsError}}>{children}</ErrorCTX.Provider>
}

export default ErrorCTXProvider;