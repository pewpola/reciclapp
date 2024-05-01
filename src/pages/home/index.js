import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import Header from '../../components/header-principal';

export default function Home() {
    return (
        <View style={styles.home}>
            <HeaderP
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
    },
});