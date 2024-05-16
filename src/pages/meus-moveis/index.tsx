import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';
import { api } from '../../services/api';
import { StackNavigationProp } from '@react-navigation/stack';
import TabNavigator from '../../components/tab-navigator';

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

interface HomeProps {
  navigation: StackNavigationProp<any, 'Home'>;
}

export default function MeusMoveis({ navigation }: HomeProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  const handleProductPress = (productId: number) => {
    navigation.navigate('ProductDetail', { productId: productId });
  };

  const handleAddProduct = () => {
    navigation.navigate('AddProduct');
  };

  const handleEditProduct = (productId: number) => {
    navigation.navigate('EditProduct', { productId: productId });
  };

  const handleRemoveProduct = (productId: number) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <View style={styles.home}>
      <HeaderPrincipal />
      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>Adicionar Móvel</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {products.map((product) => (
          <View key={product.id} style={styles.container}>
            <TouchableOpacity onPress={() => handleProductPress(product.id)}>
              <Image source={{ uri: product.cover }} style={styles.cover} />
              <Text style={styles.nomeMovel}>{product.title}</Text>
              <Text style={styles.precoMovel}>R$ {product.price.toFixed(2)}</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEditProduct(product.id)}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveProduct(product.id)}>
                <Text style={styles.buttonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TabNavigator navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
    width: '48%',
    padding: 22,
  },
  cover: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  nomeMovel: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
    overflow: 'hidden',
    marginBottom: 10,
  },
  precoMovel: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 30,
    color: '#000000',
    overflow: 'hidden',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#7DDB5C',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  addButtonText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 5,
  },
  removeButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
