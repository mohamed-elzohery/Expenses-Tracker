import ExpensesList from './ExpensesList';
import { View, StyleSheet, Text } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';
import { useContext } from 'react';
import { UIContext } from '../../context/UICtx/context';
import Overlay from '../UI/Overlay';
import { ErrorCTX } from '../../context/error/ErrorCtx';
import ErrorOverlay from '../UI/ErrorOverlay';


const ExpensesOutput = ({expenses, expensesPeriod}) => {
    const {isLoading} = useContext(UIContext);
    const {isError} = useContext(ErrorCTX);
    console.log(isLoading)
    if(isLoading) return <Overlay />;
    if(isError){return <ErrorOverlay />};
    return <View style={styles.container}>
        <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
        {expenses.length === 0 ? <View style={styles.noExpContainer}>
            {expensesPeriod === 'Total' ? 
            <Text style={styles.txtNoExp}>
                No expenses found!
            </Text>:
            <Text style={styles.txtNoExp}>
                No expenses for the last 7 days
            </Text>
}
        </View>: <ExpensesList expesnes={expenses} />}
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        paddingHorizontal: 24,
        paddingBottom: 12,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1
    },
    noExpContainer: {
        flex: 1,
    },
    txtNoExp: {
        color: '#FFF',
        textAlign: 'center'
    }
});

export default ExpensesOutput;