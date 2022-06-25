import React, {useContext} from 'react' ;
import { expenseContext } from '../context/context';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';


const AllExpenses = () => {
  const {expenses} = useContext(expenseContext);
  console.log(expenses)
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
}

export default AllExpenses;