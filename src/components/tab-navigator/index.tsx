import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function TabNavigator( {navigation} ) {
  const handleNavigateToAddProduct = () => {
    navigation.navigate('MeusMoveis');
  };

  const handleNavigateToRecyclingServices = () => {
    navigation.navigate('ProductDetail');
  };

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabButton} onPress={handleNavigateToAddProduct}>
        <Text style={styles.tabButtonText}>Meus Móveis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton} onPress={handleNavigateToRecyclingServices}>
        <Text style={styles.tabButtonText}>Serviços de Reciclagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#7DDB5C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButtonText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default TabNavigator;
