import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';

export default function SuccessScreen() {
    return (
        <View style={styles.container}>
            <HeaderPrincipal />
            <View style={styles.content}>
                <Text style={styles.successText}>Serviço adicionado com sucesso!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    successText: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 20,
        color: '#000000',
    },
});
