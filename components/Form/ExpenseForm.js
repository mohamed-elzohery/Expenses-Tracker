import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import FormInput from "./FormInput";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";
import IconBtn from "../UI/IconBtn";
import { formatDate } from "../../utils/date";

const ExpenseForm = ({onCancelHandler, sumbitLabel, onSumbitHandler, onDeleteHandler, defaultValues, isValid}) => {
    const [formData, setFormData] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : 0,
        date: defaultValues ? formatDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    });

    const onInputChangeHandler = (inputIdentifier, enteredValue) => {
        setFormData(prevData => ({...prevData, [inputIdentifier]: enteredValue}));
    }

    return <View style={styles.formContainer}>

        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.formGroup}>
            <FormInput label="Amount" style={styles.inlineInput} inputProps={{
                placeholder: 'amount',
                onChangeText: onInputChangeHandler.bind(this, 'amount'),
                keyboardType: 'decimal-pad',
                value: formData.amount
            }}/>

            <FormInput label="Date" style={styles.inlineInput} inputProps={{
                placeholder:'YYYY-MM-DD',
                keyboardType: 'number-pad',
                maxLength:10,
                onChangeText: onInputChangeHandler.bind(this, 'date'),
                value: formData.date
            }}/>
        </View>

        <FormInput label="Description" inputProps={{
            placeholder:'description',
            multiline:true,
            onChangeText: onInputChangeHandler.bind(this, 'description'),
            value: formData.description
        }}/>
        {!isValid && <View style={styles.errContainer}>
            <Text style={styles.errTxt}>Error data you entered is not valid</Text>
        </View>}
        <View style={styles.btnsContainer}>
            <Button modifier='flat' customStyle={styles.btn} onPress={onCancelHandler}>Cancel</Button>
            <Button onPress={onSumbitHandler.bind(this, formData)} customStyle={styles.btn}>{sumbitLabel === 'Update' ? 'Update' : 'Add'}</Button>
        </View>
        {sumbitLabel === 'Update' && <View style={styles.deleteContainer}>
            <IconBtn  onPress={onDeleteHandler} container={styles.icnBtn} color={GlobalStyles.colors.error500} icon="trash" size={36} />
        </View>  }
            

    </View>
}

const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: 24,
        marginTop: 80,
    },
    inlineInput: {
        flex: 1
    },
    formGroup: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 25
    },
    btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    btn: {
        marginHorizontal: 8
    },
    deleteContainer: {
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        margin: 24,
        alignItems: 'center'
    },
    icnBtn: {
        marginTop: 20
    },
    errContainer: {
        marginVertical: 16
    },
    errTxt: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500
    }
});

export default ExpenseForm;