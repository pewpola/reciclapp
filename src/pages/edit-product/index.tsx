import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { api } from '../../services/api';
import HeaderPrincipal from '../../components/header-principal';

export default function EditProduct({ route, navigation }) {
    const { productId } = route.params;

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCover, setProductCover] = useState('');

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await api.get(`/products/${productId}`);
                const product = response.data;
                setProductName(product.title);
                setProductPrice(product.price.toString());
                setProductDescription(product.description);
                setProductCover(product.cover);
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        }

        fetchProduct();
    }, [productId]);

    const handleEditProduct = async () => {
        try {
            await api.put(`/products/${productId}`, {
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
            console.error("Erro ao editar produto:", error);
        }
    }

    return (
        <View style={styles.container}>
            <HeaderPrincipal/>
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

            <TouchableOpacity style={styles.button} onPress={handleEditProduct}>
                <Text style={styles.buttonText}>Editar</Text>
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
        backgroundColor: '#FFA500',
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
