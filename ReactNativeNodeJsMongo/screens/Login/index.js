import React, { useState } from 'react';
import {  View,  Image,KeyboardAvoidingView,} from 'react-native';
import {
 
  Titulo,  
  Input,
  styles
    
} from './style';
import {  Button,   ButtonText } from '../Home/style';

const Login = () => {
  const [enableshift, setenableShift] = useState(false);
  const [email, onChangeEmail] = useState('');
  const [senha, onChangePass] = useState('');
  return (
    <KeyboardAvoidingView
    behavior="position"
    style={styles.root}
    enabled={enableshift}
  >
      <View  style={styles.wrap}>
        <View  style={styles.center}>
            <Image
              style={styles.image}
              source={require('../../assets/images/login.png')}
            />
            <Titulo>Faça seu login</Titulo>
        </View>
        <View>
          <Input
              value={email}
              onChangeText={onChangeEmail}
              placeholder="E-mail"
              label="E-mail"
              placeholderTextColor="#8B8585"
            onFocus={() => setenableShift(true)}/>
            <Input
              value={senha}
              onChangeText={onChangePass}
              placeholder="Senha"
              label="Senha"
              secureTextEntry={true}
              placeholderTextColor="#8B8585"
            onFocus={() => setenableShift(true)}/>
        
          <Button><ButtonText>Entrar</ButtonText></Button>
        
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;


