import { View, Image, StyleSheet } from 'react-native';

const HeaderPrincipal = () => {
  return (
    <View style={{justifyContent: 'center', alignItems:'center'}}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <View style={styles.hrAbaixoLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  hrAbaixoLogo: {
    backgroundColor: '#74DA0E',
    marginBottom: 30,
    width: 744,
    height: 5,
  },
});

export default HeaderPrincipal;