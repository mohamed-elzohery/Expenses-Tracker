import {Pressable, View, StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const IconBtn = ({onPress, color, size, icon, container}) => {
    return <View style={container}>
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.iconContainer}>
                <Icon color={color} size={size} name={icon} />
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    pressed: {
        opacity: .75
    },
});

export default IconBtn;