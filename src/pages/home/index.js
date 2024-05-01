import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import Header from '../../components/header-principal';
import HeaderPrincipal from '../../components/header-principal';

export default function Home() {
    return (
        <View style={styles.home}>
            <HeaderPrincipal/>
            <View style={styles.container}>
                <Text style={styles.nomeMovel}>
                    Mesa quebrada para reciclagem
                </Text>
                <Text style={styles.precoMovel}>
                    R$ 30,00
                </Text>
            </View>    
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
    container: {
        backgroundColor: '#D9D9D9',
        position: 'relative',
        marginRight: 86,
        display: 'flex',
        flexDirection: 'column',
        padding: 22,
        paddingRight: 86,
        paddingBottom: 41,
        paddingLeft: 17,
        // padding: 22, 18, 41, 17,
        boxSizing: 'border-box',
    },
    nomeMovel: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 16,
        color: '#000000',
        overflowWrap: 'break-word',
    },
    precoMovel: {
        alignSelf: 'flex-start',
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 30,
        color: '#000000',
        overflowWrap: 'break-word',
    },
});