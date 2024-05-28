import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';
import TabNavigator from '../../components/tab-navigator';
import { useNavigation } from '@react-navigation/native';

const EditarLocalizacaoScreen = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const navigation = useNavigation();

  const handleEditarLocalizacao = () => {
    if (cep && endereco && numero && complemento && cidade && estado) {
      navigation.navigate('EditLocalSuccess');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <Text style={styles.title}>Editar Localização</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          value={numero}
          onChangeText={setNumero}
        />
        <TextInput
          style={styles.input}
          placeholder="Complemento"
          value={complemento}
          onChangeText={setComplemento}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          value={estado}
          onChangeText={setEstado}
        />
        <TouchableOpacity style={styles.button} onPress={handleEditarLocalizacao}>
          <Text style={styles.buttonText}>Editar Localização</Text>
        </TouchableOpacity>
      </View>
      <TabNavigator navigation={navigation} />
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

export default EditarLocalizacaoScreen;
