import { Text, Pressable, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import { formatDate } from "../../utils/date";

const ExpenseItem = ({expense: {description, date, amount, id}}) => {
    const navigation = useNavigation();

    const onPressHandler = () => navigation.navigate("ManageExpenses", {expenseId: id});

    return <View style={styles.parent}>
        <Pressable 
        onPress={onPressHandler}
        style={({pressed}) => [styles.outerContainer, pressed && styles.pressed]}
        android_ripple={{color: GlobalStyles.colors.primary200}}
        >
            <View style={styles.expense}>
                <View style={styles.lftContainer}>
                    <Text style={styles.desc}>{description}</Text>
                    <Text style={styles.date}>{formatDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    </View>
};

const styles = StyleSheet.create({
    parent: {
        overflow: 'hidden',
    },
    outerContainer: {

        height: 60,
        backgroundColor: GlobalStyles.colors.primary400,
        paddingHorizontal: 12,
        marginVertical: 6,
        borderRadius: 4,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: .25,
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 3,
        justifyContent: 'center',
    },
    expense: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    desc: {
        fontSize: 16,
        color: GlobalStyles.colors.primary50,
        fontWeight: 'bold',
        marginBottom: 6
    },
    date: {
        fontSize: 12,
        color: GlobalStyles.colors.primary50,
    },
    amountContainer: {
        borderRadius: 4,
        backgroundColor: GlobalStyles.colors.primary50,
        padding: 8,
        minWidth: 60,
        alignItems: 'center',
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    },
    pressed: {
        opacity: .75
    }
});
export default ExpenseItem;