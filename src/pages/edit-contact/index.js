import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';
import TabNavigator from '../../components/tab-navigator';
import { useNavigation } from '@react-navigation/native';

const EditarMeiosDeContatoScreen = () => {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const navigation = useNavigation();

  const handleEditContact = () => {
    if (email && telefone) {
      navigation.navigate('EditContactSuccess');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Editar Meios de Contato</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          value={telefone}
          onChangeText={setTelefone}
        />
        <TouchableOpacity style={styles.editButton} onPress={handleEditContact}>
          <Text style={styles.editButtonText}>Editar Contato</Text>
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
  titleContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    color: '#000000',
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#000000',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  editButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default EditarMeiosDeContatoScreen;
