import React, {useContext} from 'react' ;
import { expenseContext } from '../context/expenseCtx/context';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';


const AllExpenses = () => {
  const {expenses} = useContext(expenseContext);
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
}

export default AllExpenses;