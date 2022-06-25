import axios from "axios";

const baseURL = 'https://expenses-69108-default-rtdb.firebaseio.com/';

const axiosInstance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const storeExpense = (expenseData) => {
    axiosInstance.post('expenses.json', expenseData);
}

export const getExpenses = async () => {

    const {data} = await axiosInstance.get('expenses.json');

    const expenses = [];

    for(let key in data){
        const expense = {
            id: key,
            amount: data[key].amount,
            description: data[key].description,
            date: data[key].date,
        }
        expenses.push(expense);
    }

    return expenses;
}

