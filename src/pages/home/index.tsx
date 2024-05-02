import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';
import { api } from '../../services/api';

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
      async function getProducts() {
          const response = await api.get("/products")
          setProducts(response.data)
      }
      getProducts()
  }, [])

  return (
    <View style={styles.home}>
      <HeaderPrincipal />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {products.map((product) => (
          <View key={product.id} style={styles.container}>
            <img
            style={styles.cover}
            src={product.cover}
            />
            <Text style={styles.nomeMovel}>{product.title}</Text>
            <Text style={styles.precoMovel}>R$ {product.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
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
  },
});
