import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderPrincipal = () => {
  const navigation = useNavigation();

  const handleLogoPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
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
