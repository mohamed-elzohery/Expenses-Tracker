import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ExpensesSummary = ({expenses, expensesPeriod}) => {
    const totalSum = expenses.reduce((acc, exp) => acc + exp.amount, 0).toFixed(2);


    return <View style={styles.container}>
        <Text style={styles.time}>{expensesPeriod}</Text>
        <Text style={styles.sum}>${totalSum}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10
    },
    time: {
        fontSize: 14,
        color: GlobalStyles.colors.primary500,
    },
    sum: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary700
    }
})

export default ExpensesSummary;