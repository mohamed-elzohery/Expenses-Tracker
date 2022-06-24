import React, { useContext } from 'react';
import {View, Text} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { expenseContext } from '../context/context';
import { getDateDayeAgo } from '../utils/date';

const RecentExpenses = () => {
    const {expenses} = useContext(expenseContext);
    const lastSevenDaysDate = getDateDayeAgo(7);
    const lastSevenDaysExpenses =  expenses.filter(({date}) => date > lastSevenDaysDate);
    return <ExpensesOutput expenses={lastSevenDaysExpenses} expensesPeriod="Last 7 days" />;
}

export default RecentExpenses;