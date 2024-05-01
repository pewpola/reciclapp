import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import Header from '../../components/header';

export default function Login({ navigation }) {
  return (
    <View style={styles.telaDeLogin}>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.nomeDoUsuarioOuEmail}>Nome de Usuário ou E-mail:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <Text style={styles.nomeDoUsuarioOuEmail}>Senha:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>
        <Text style={styles.novoNoReciclApp}>Novo no ReciclApp?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: 'rgba(0, 212, 85, 0.5)',
    position: 'relative',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 40,
    width: 'auto',
  },
  telaDeLogin: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
  },
  hrAbaixoLogo: {
    backgroundColor: '#74DA0E',
    marginBottom: 30,
    width: '100%',
    height: 5,
  },
  nomeDoUsuarioOuEmail: {
    marginVertical: 12,
    overflowWrap: 'break-word',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 30,
    color: '#FFFFFF',
  },
  textInput: {
    borderRadius: 16,
    backgroundColor: '#D9D9D9',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    width: '80%',
    height: 68,
  },
  button: {
    borderRadius: 16,
    backgroundColor: '#7DDB5C',
    position: 'relative',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 1.8,
    width: '60%',
    boxSizing: 'border-box',
    height: 70,
  },
  buttonText: {
    overflowWrap: 'break-word',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    color: '#FFFFFF',
  },
  novoNoReciclApp: {
    marginRight: 8.3,
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 24,
    color: '#FFFFFF',
  },
});
