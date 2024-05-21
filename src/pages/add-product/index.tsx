import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { api } from '../../services/api';
import HeaderPrincipal from '../../components/header-principal';

export default function AddProduct({ navigation }) {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCover, setProductCover] = useState('');

    const handleAddProduct = async () => {
        if (!productName || !productPrice || !productDescription || !productCover) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            const productId = Math.floor(Math.random() * 10000) + 1;

            await api.post("/products", {
                id: productId,
                title: productName,
                description: productDescription,
                price: parseFloat(productPrice),
                cover: productCover
            });

            setProductName('');
            setProductPrice('');
            setProductDescription('');
            setProductCover('');

            navigation.navigate('Home');
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
        }
    }

    return (
        <View style={styles.container}>
            <HeaderPrincipal />
            <Text style={styles.label}>Nome do móvel:</Text>
            <TextInput
                style={styles.input}
                value={productName}
                onChangeText={setProductName}
            />

            <Text style={styles.label}>Preço:</Text>
            <TextInput
                style={styles.input}
                value={productPrice}
                onChangeText={setProductPrice}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Descrição:</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                value={productDescription}
                onChangeText={setProductDescription}
                multiline
            />

            <Text style={styles.label}>Link da foto:</Text>
            <TextInput
                style={styles.input}
                value={productCover}
                onChangeText={setProductCover}
            />

            <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                <Text style={styles.buttonText}>Adicionar</Text>
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
