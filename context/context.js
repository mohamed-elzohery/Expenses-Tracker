import { createContext, useReducer } from "react";
import { reducer as expenseReducer } from "./reducers";

export const expenseContext = createContext({
    expenses: [],
    addExpense: ({date, description, amount}) => {},
    deleteExpense: ({id}) => {},
    updateExpense: ({id, newExpense}) => {},
});

const initialState = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
      },
      {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05')
      },
      {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01')
      },
      {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19')
      },
      {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18')
      },
      {
          id: 'e13',
          description: 'A pair of trousers',
          amount: 89.29,
          date: new Date('2022-01-05')
        },
        {
          id: 'e6',
          description: 'Some bananas',
          amount: 5.99,
          date: new Date('2021-12-01')
        },
        {
          id: 'e7',
          description: 'A book',
          amount: 14.99,
          date: new Date('2022-02-19')
        },
        {
          id: 'e8',
          description: 'Another book',
          amount: 18.59,
          date: new Date('2022-06-20')
        },
        {
          id: 'e9',
          description: 'A pair of trousers',
          amount: 89.29,
          date: new Date('2022-01-05')
        },
        {
          id: 'e10',
          description: 'Some bananas',
          amount: 5.99,
          date: new Date('2022-06-23')
        },
        {
          id: 'e11',
          description: 'A book',
          amount: 14.99,
          date: new Date('2022-02-19')
        },
        {
          id: 'e12',
          description: 'Another book',
          amount: 18.59,
          date: new Date('2022-02-18')
        }
]

const ExpenseContextProvider = ({children}) => {
    const [expenses, dispatch] = useReducer(expenseReducer, initialState);
    return <expenseContext.Provider value={{expenses, dispatch}}>{children}</expenseContext.Provider>
}

export default ExpenseContextProvider;