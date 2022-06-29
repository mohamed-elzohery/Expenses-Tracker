import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Overlay = () => {
    
    return <View style={styles.container}>
        <ActivityIndicator color='#FFF' size="large" />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    }
});

export default Overlay;