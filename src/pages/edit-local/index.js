import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';
import TabNavigator from '../../components/tab-navigator';
import { useNavigation } from '@react-navigation/native';

const EditarLocalizacaoScreen = () => {
  const navigation = useNavigation();

  const handleEditarLocalizacao = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <Text style={styles.title}>Editar Localização</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="CEP" />
        <TextInput style={styles.input} placeholder="Endereço" />
        <TextInput style={styles.input} placeholder="Número" />
        <TextInput style={styles.input} placeholder="Complemento" />
        <TextInput style={styles.input} placeholder="Cidade" />
        <TextInput style={styles.input} placeholder="Estado" />
        <TouchableOpacity style={styles.button} onPress={handleEditarLocalizacao}>
          <Text style={styles.buttonText}>Editar Localização</Text>
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
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 20,
  },
  form: {
    flex: 1,
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

export default EditarLocalizacaoScreen;
