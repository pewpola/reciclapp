import { View, Text, StyleSheet } from 'react-native';

const CreateAccount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      {/* Adicione os campos para criar uma nova conta aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CreateAccount;