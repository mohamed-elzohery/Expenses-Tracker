import React, { useContext, useEffect } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { expenseContext } from '../context/expenseCtx/context';
import { getDateDayeAgo } from '../utils/date';

const RecentExpenses = () => {
    const {expenses} = useContext(expenseContext);
    const lastSevenDaysDate = getDateDayeAgo(7);
    const lastSevenDaysExpenses =  expenses.filter(({date}) => new Date(date) > lastSevenDaysDate);
    return <ExpensesOutput expenses={lastSevenDaysExpenses} expensesPeriod="Last 7 days" />;
}

export default RecentExpenses;