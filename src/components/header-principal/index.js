import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderPrincipal = () => {
  const navigation = useNavigation();

  const handleLogoPress = () => {
    navigation.navigate('Home');
  };

  const handlePerfilPress = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleLogoPress} style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePerfilPress} style={styles.perfilContainer}>
        <Image
          source={require('../../../assets/perfil.png')}
          style={styles.perfil}
        />
      </TouchableOpacity>
      <View style={styles.hrAbaixoLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 30,
    flexDirection: 'row',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  perfilContainer: {
    position: 'absolute',
    right: 20,
    top: 0,
    zIndex: 1,
  },
  perfil: {
    width: 50,
    height: 50,
  },
  hrAbaixoLogo: {
    backgroundColor: '#74DA0E',
    width: '100%',
    height: 5,
    position: 'absolute',
    bottom: -20,
  },
});

export default HeaderPrincipal;
