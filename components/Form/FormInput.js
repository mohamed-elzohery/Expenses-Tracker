import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";


const FormInput = ({label, style, inputProps}) => {

    return <View style={[styles.inputContainer, style]}>
        <Text style={styles.inputLabel} >{label}</Text>
        <TextInput 
        {...inputProps}  
        style={[styles.txtInput, inputProps?.multiline && styles.multiline]} 
        selectionColor={GlobalStyles.colors.primary700} 
        />
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
        marginHorizontal: 4,
    },
    inputLabel: {
        color: GlobalStyles.colors.primary100,
        fontSize: 12,
        marginBottom: 4
    },
    txtInput: {
        borderRadius: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        fontSize: 18
    },
    multiline: {
        minHeight: 120,
        textAlignVertical: 'top'
    }
});

export default FormInput;