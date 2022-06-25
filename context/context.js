import { createContext, useReducer, useEffect } from "react";
import { reducer as expenseReducer } from "./reducers";
import { getExpenses } from "../API/expensesAPIs";

export const expenseContext = createContext({
    expenses: [],
    addExpense: ({date, description, amount}) => {},
    deleteExpense: ({id}) => {},
    updateExpense: ({id, newExpense}) => {},
});

const initialState = [];

const ExpenseContextProvider = ({children}) => {
    const [expenses, dispatch] = useReducer(expenseReducer, initialState);

    useEffect(() => {
      const getRecentExpenses = async () => {
          const expenses = await getExpenses();
          dispatch({type: 'SET_EXPENSES', payload: expenses});
      };

      getRecentExpenses();
  }, []);


    return <expenseContext.Provider value={{expenses, dispatch}}>{children}</expenseContext.Provider>
}

export default ExpenseContextProvider;