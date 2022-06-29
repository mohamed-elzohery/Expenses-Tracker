import axios from "axios";

const baseURL = 'https://expenses-69108-default-rtdb.firebaseio.com/';

const axiosInstance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const storeExpense = (expenseData) => {
    return axiosInstance.post('expenses.json', expenseData);
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

export const updateExpense =  (id, expenseData) => {
    return axiosInstance.put(`expenses/${id}.json`, expenseData);
}

export const deleteExpense =  (id) => {
    return axiosInstance.delete(`expenses/${id}.json`);
}

