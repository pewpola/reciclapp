import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { api } from '../../services/api';
import HeaderPrincipal from '../../components/header-principal';

interface ProductDetailProps {
  route: any;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const { productId } = route.params;
    async function loadProductDetails() {
      try {
        const response = await api.get(`/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao carregar detalhes do produto:", error);
      }
    }

    loadProductDetails();
  }, []);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderPrincipal/>
      <Image source={{ uri: product.cover }} style={styles.cover} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Preço: R$ {product.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cover: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000000',
    marginBottom: 10,
  },
  description: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },
  price: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
});

export default ProductDetail;
