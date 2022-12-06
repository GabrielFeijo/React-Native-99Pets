import React, { useState } from 'react';
import {  View,  Image,KeyboardAvoidingView,} from 'react-native';
import {  Titulo,  Input} from '../Login/style';
import {  Button,   ButtonText } from '../Home/style';
import { styles } from './style';


const Register = (props) => {
  const [enableshift, setenableShift] = useState(false);
  const [nome, onChangeNome] = useState('');
  const [email, onChangeEmail] = useState('');
  const [senha, onChangePass] = useState('');
  const [confirmSenha, onChangeConfirmSenha] = useState('');
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
              source={require('../../assets/images/register.png')}
            />
            <Titulo>Faça seu Cadastro</Titulo>
        </View>
        <View>
          <Input
            value={nome}
            onChangeText={onChangeNome}
            placeholder="Nome Completo"
            label="Nome Completo"
            placeholderTextColor="#8B8585"
            onFocus={() => setenableShift(true)}
          />
          <Input
              value={email}
              onChangeText={onChangeEmail}
              placeholder="E-mail"
              label="E-mail"
              placeholderTextColor="#8B8585"
              onFocus={() => setenableShift(true)}
            />
            <Input
              value={senha}
              onChangeText={onChangePass}
              placeholder="Senha"
              label="Senha"
              secureTextEntry={true}
              placeholderTextColor="#8B8585"
              onFocus={() => setenableShift(true)}
            />
            <Input
              value={confirmSenha}
              onChangeText={onChangeConfirmSenha}
              placeholder="Confirme a senha"
              label="Confirme a senha"
              secureTextEntry={true}
              placeholderTextColor="#8B8585"
              onFocus={() => setenableShift(true)}
            />
        
          <Button onPress={() => { props.navigation.navigate("CadastroPet")}}><ButtonText>Próximo</ButtonText></Button>
        
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;


