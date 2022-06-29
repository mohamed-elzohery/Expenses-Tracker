import { createContext, useReducer, useEffect, useContext } from "react";
import { reducer as expenseReducer } from "./reducers";
import { getExpenses } from "../../API/expensesAPIs";
import { UIContext } from "../UICtx/context";

export const expenseContext = createContext({
    expenses: [],
    addExpense: ({date, description, amount}) => {},
    deleteExpense: ({id}) => {},
    updateExpense: ({id, newExpense}) => {},
});

const initialState = [];

const ExpenseContextProvider = ({children}) => {
    const [expenses, dispatch] = useReducer(expenseReducer, initialState);
    const {setIsLoading} = useContext(UIContext);

    useEffect(() => {
      const getRecentExpenses = async () => {
          setIsLoading(true);
          const expenses = await getExpenses();
          dispatch({type: 'SET_EXPENSES', payload: expenses});
          setIsLoading(false);
      };

      getRecentExpenses();
  }, []);


    return <expenseContext.Provider value={{expenses, dispatch}}>{children}</expenseContext.Provider>
}

export default ExpenseContextProvider;