import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
// import { TextInput, TouchableOpacity } from 'react-native-web';
import Header from '../../components/header';

export default function CreateAccount({ navigation }) {
  return (
    <View style={styles.telaDeLogin}>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.nomeDoUsuarioOuEmail}>Nome de Usuário</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite seu usuário"
        />
        <Text style={styles.nomeDoUsuarioOuEmail}>E-mail:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <Text style={styles.nomeDoUsuarioOuEmail}>Senha:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="No mínimo 8 caracteres"
          secureTextEntry={true}
        />
        <Text style={styles.nomeDoUsuarioOuEmail}>Confirmar Senha</Text>
        <TextInput
          style={styles.textInput}
          placeholder="No mínimo 8 caracteres"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
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
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 20,
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
    marginVertical: 6,
    overflowWrap: 'break-word',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
  },
  textInput: {
    borderRadius: 16,
    backgroundColor: '#D9D9D9',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    width: '80%',
    height: 50,
  },
  button: {
    borderRadius: 16,
    backgroundColor: '#7DDB5C',
    position: 'relative',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 1.8,
    width: '60%',
    boxSizing: 'border-box',
    height: 60,
  },
  buttonText: {
    overflowWrap: 'break-word',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
  },
  novoNoReciclApp: {
    marginRight: 8.3,
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
