import {View, Text, StyleSheet, Alert} from 'react-native' ;
import React, { useContext, useLayoutEffect, useState } from 'react' ;
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import IconBtn from '../components/UI/IconBtn';
import { expenseContext } from '../context/context';
import ExpenseForm from '../components/Form/ExpenseForm';

const isExpenseValid = (expense) => {
    console.log(expense.date)
    if(isNaN(expense.amount) || expense.amount <= 0) return false;
    if(new Date(expense.date) === "Invalid Date" || isNaN(new Date(expense.date))) return false;
    if(expense.description.trim() === '') return false;
    return true;
}


const ManageExpenses = ({route, navigation}) => {
    const {expenses, dispatch} = useContext(expenseContext);
    const [isValid, setIsValid] = useState(true);
    const expenseId = route?.params?.expenseId;
    const isEditing = !!expenseId;

    let expense;

    if(isEditing) expense = expenses.find(({id}) => id === expenseId);

    const onCancelHandler = () => {
        navigation.goBack();
    };

    const onDeleteHandler = () => {
        dispatch({type: 'DELETE_EXPENSE', payload: {id: expenseId}});
        navigation.goBack();
    }

    const onUpdateHandler = (newExpense) => {
        const expense = transformFormData(newExpense);
        if(isExpenseValid(expense)){
            setIsValid(true);
            dispatch({type: 'UPDATE_EXPENSE', payload: {id: expenseId,newExpense: expense}});
            navigation.goBack();
            return;
        }
        setIsValid(false);
    }

    const onAddingHandler = (newExpense) => {
        console.log(newExpense);
        const expense = transformFormData(newExpense);
        console.log(expense)
        if(isExpenseValid(expense)){
            setIsValid(true);
            dispatch({type: 'ADD_EXPENSE', payload: {newExpense: expense}});
            navigation.goBack();
            return;
        }
        setIsValid(false);
    }

    const transformFormData = (formData) => {
        return {
            ...formData,
            date: new Date(formData.date),
            amount: +formData.amount
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Editing Expense' : 'Adding Expense'
        });
    }, [isEditing, expenseId])

    return <View style={styles.container}>
            <ExpenseForm
              isValid={isValid}
              sumbitLabel={isEditing ? 'Update' : 'Add'}
              onSumbitHandler={isEditing ? onUpdateHandler : onAddingHandler}
              onCancelHandler={onCancelHandler}
              onDeleteHandler={onDeleteHandler}
              defaultValues={isEditing ? expense : null} />
          </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});

export default ManageExpenses;