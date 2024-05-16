import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface RecyclingServicesProps {
    navigation: StackNavigationProp<any, 'RecyclingServices'>;
}

export default function RecyclingServices({ navigation }: RecyclingServicesProps) {
    const [serviceType, setServiceType] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');

    const handleAddService = () => {
        if (serviceType && description && address) {
            navigation.navigate('SuccessScreen');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    return (
        <View style={styles.container}>
            <HeaderPrincipal />
            <Text style={styles.label}>Tipo do serviço:</Text>
            <TextInput
                style={styles.input}
                value={serviceType}
                onChangeText={setServiceType}
            />

            <Text style={styles.label}>Descrição:</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                value={description}
                onChangeText={setDescription}
                multiline
            />

            <Text style={styles.label}>Endereço:</Text>
            <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
            />

            <TouchableOpacity style={styles.button} onPress={handleAddService}>
                <Text style={styles.buttonText}>Adicionar Serviço</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    label: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#7DDB5C',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 18,
        color: '#FFFFFF',
    },
});
