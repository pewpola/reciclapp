import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';
import TabNavigator from '../../components/tab-navigator';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const navigateToEdit = () => {
    navigation.navigate('EditarLocalizacaoScreen');
  };

  const navigateToContact = () => {
    navigation.navigate('EditarMeiosDeContatoScreen');
  };

  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={navigateToEdit}>
          <Text style={styles.optionText}>Editar Localização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={navigateToContact}>
          <Text style={styles.optionText}>Editar Meios de Contato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Chamar Suporte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleLogout}>
          <Text style={styles.optionText}>Sair da Conta</Text>
        </TouchableOpacity>
      </View>
      <TabNavigator navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
  },
});

export default ProfileScreen;
