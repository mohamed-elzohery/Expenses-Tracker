import { useState, createContext } from "react";

export const UIContext = createContext({
    expenses: [],
    addExpense: ({date, description, amount}) => {},
    deleteExpense: ({id}) => {},
    updateExpense: ({id, newExpense}) => {},
});

const initialState = true;

const UIContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);

    return <UIContext.Provider value={{isLoading, setIsLoading}}>{children}</UIContext.Provider>
}

export default UIContextProvider;