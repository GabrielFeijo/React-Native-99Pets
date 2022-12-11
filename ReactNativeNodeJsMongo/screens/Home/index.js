import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, ButtonText, LoginText, Line, styles } from './style';

const Home = (props) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <View>
        <LoginText> Já tenho uma conta</LoginText>

        <Button
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <ButtonText>Entrar</ButtonText>
        </Button>

        <LoginText>Ainda não tenho conta</LoginText>
        <Button
          onPress={() => {
            props.navigation.navigate('Cadastro');
          }}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default Home;

// .logo{
//     height: 30vh;
//     border-radius:50% ;
//     display: block;
//     margin: auto;

// }
