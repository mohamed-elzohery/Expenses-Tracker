import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const ErrorOverlay = () => {
    
    return <View style={styles.container}>
        <Text style={styles.errorTxt}>Error While Fetching Data</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    errorTxt: {
        color: "#FFF",
        textAlign: 'center',
    }
});

export default ErrorOverlay;