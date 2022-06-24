import {Pressable, View, StyleSheet, Text} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Button = ({onPress, modifier, customStyle, children}) => {
    return <View style={[styles.container, modifier === 'flat' && styles.flat, customStyle]}>
        <Pressable onPress={onPress} style={({pressed}) => [pressed && styles.pressed, styles.pressable]}>
            <View style={styles.txtContainer}>
                <Text style={[styles.txtContainer, modifier !== 'flat' && {color: '#FFF'}]}>{children}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        minWidth: 120,
        backgroundColor: GlobalStyles.colors.primary400,
        borderRadius: 4,
        overflow: 'hidden'
    },
    flat: {
        backgroundColor: 'transparent',
    },
    pressed: {
        opacity: .75,
        backgroundColor: GlobalStyles.colors.primary200,
    },
    txtContainer: {
        color: GlobalStyles.colors.primary100,
        textAlign: 'center'

    },
    pressable: {
        paddingVertical: 8,

    }
});

export default Button;