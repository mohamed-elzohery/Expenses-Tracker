import React, { useContext, useEffect } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { expenseContext } from '../context/expenseCtx/context';
import { getDateDayeAgo } from '../utils/date';
import { getExpenses } from '../API/expensesAPIs';
import { UIContext } from '../context/UICtx/context';
import { ErrorCTX } from '../context/error/ErrorCtx';

const RecentExpenses = () => {
    const {expenses, dispatch} = useContext(expenseContext);
    const {setIsLoading} = useContext(UIContext);
    const {setIsError} = useContext(ErrorCTX);

    useEffect(() => {
        const getRecentExpenses = async () => {
            setIsLoading(true);
            try{
                const expenses = await getExpenses();
                dispatch({type: 'SET_EXPENSES', payload: expenses});
                setIsError(false);
            }catch(err){
                setIsError(true);
            }
            setIsLoading(false);
        };
  
        getRecentExpenses();
    }, []);

    const lastSevenDaysDate = getDateDayeAgo(7);
    const lastSevenDaysExpenses =  expenses.filter(({date}) => new Date(date) > lastSevenDaysDate);
    return <ExpensesOutput expenses={lastSevenDaysExpenses} expensesPeriod="Last 7 days" />;
}

export default RecentExpenses;