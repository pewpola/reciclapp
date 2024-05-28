import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import HeaderPrincipal from '../../components/header-principal';
import TabNavigator from '../../components/tab-navigator';
import { useNavigation } from '@react-navigation/native';

const CallSupportScreen = () => {
  const [tipoProblema, setTipoProblema] = useState('');
  const [descricaoProblema, setDescricaoProblema] = useState('');

  const navigation = useNavigation();

  const handleChamarSuporte = () => {
    if (tipoProblema && descricaoProblema) {
      navigation.navigate('CallSupportSuccess');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderPrincipal />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chamar Suporte</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Tipo de Problema:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o tipo de problema"
          value={tipoProblema}
          onChangeText={setTipoProblema}
        />
        <Text style={styles.label}>Descrição do Problema:</Text>
        <TextInput
          style={styles.input}
          placeholder="Descreva o problema"
          value={descricaoProblema}
          onChangeText={setDescricaoProblema}
        />
        <TouchableOpacity style={styles.supportButton} onPress={handleChamarSuporte}>
          <Text style={styles.supportButtonText}>Chamar Suporte</Text>
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
  supportButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  supportButtonText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default CallSupportScreen;
