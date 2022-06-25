import React, { useContext, useEffect } from 'react';
import {View, Text} from 'react-native';
import { getExpenses } from '../API/expensesAPIs';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { expenseContext } from '../context/context';
import { getDateDayeAgo } from '../utils/date';

const RecentExpenses = () => {
    const {expenses} = useContext(expenseContext);
    console.log(expenses + "dcsdcsdc")
    const lastSevenDaysDate = getDateDayeAgo(7);
    const lastSevenDaysExpenses =  expenses.filter(({date}) => new Date(date) > lastSevenDaysDate);
    return <ExpensesOutput expenses={lastSevenDaysExpenses} expensesPeriod="Last 7 days" />;
}

export default RecentExpenses;