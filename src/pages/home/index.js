import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function Home() {
    return (
        <View style={styles.home}>
            <View style={styles.container}>
                                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#00D455',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 11,
    paddingTop: 11,
    paddingRight: 24,
    paddingBottom: 14,
    paddingLeft: 8,
    height: '100%',
    boxSizing: 'border-box',
    },
    home: {
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 7,
        width: 744,
        boxSizing: 'border-box',
    },
});