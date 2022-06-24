import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({expesnes}) => {
    
    return <FlatList 
        data={expesnes}
        renderItem={({item}) => <ExpenseItem expense={item} />}
        keyExtractor={({id}) => id}
    />
}

export default ExpensesList;