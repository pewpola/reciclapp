import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.telaDeLogin}>
      <View>
        <Image
          source={require('./assets/logo.png')}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View style={styles.hrAbaixoLogo}>
      </View>
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fazer Login</Text>
        </TouchableOpacity>
        <Text style={styles.novoNoReciclApp}>Novo no ReciclApp?</Text>
        <TouchableOpacity style={styles.button}>
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
    marginLeft: 1,
    alignItems: 'center',
    paddingVertical: 88,
    paddingHorizontal: 25,
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
    paddingVertical: 12,
    paddingHorizontal: 0,
    width: 744,
  },
  hrAbaixoLogo: {
    backgroundColor: '#74DA0E',
    marginBottom: 69,
    width: 744,
    height: 5,
  },
  nomeDoUsuarioOuEmail: {
    marginVertical: 6,
    overflowWrap: 'break-word',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 25,
    color: '#FFFFFF',
  },
  textInput: {
    borderRadius: 16,
    backgroundColor: '#D9D9D9',
    marginVertical: 53,
    marginHorizontal: 16,
    marginTop: 30,
    width: 312,
    height: 68,
  },
  button: {
    borderRadius: 16,
    backgroundColor: '#7DDB5C',
    position: 'relative',
    marginBottom: 59,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 28,
    paddingHorizontal: 1.8,
    width: 200,
    boxSizing: 'border-box',
    height: 90
  },
  buttonText: {
    overflowWrap: 'break-word',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 30,
    color: '#FFFFFF',
  },
  novoNoReciclApp: {
    marginRight: 8.3,
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 25,
    color: '#FFFFFF',
  },
});
