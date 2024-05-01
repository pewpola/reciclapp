import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';

export default function Home() {
  return (
    <View style={styles.home}>
      <HeaderPrincipal />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.nomeMovel}>
            Mesa quebrada para reciclagem
          </Text>
          <Text style={styles.precoMovel}>
            R$ 30,00
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.nomeMovel}>
            Cadeira quebrada para reciclagem
          </Text>
          <Text style={styles.precoMovel}>
            R$ 50,00
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.nomeMovel}>
            Cadeira quebrada para reciclagem
          </Text>
          <Text style={styles.precoMovel}>
            R$ 50,00
          </Text>
        </View>
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
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 30,
    color: '#000000',
    overflowWrap: 'break-word',
  },
});
