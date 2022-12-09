import React, { useState } from 'react';
import {  View,  Image,KeyboardAvoidingView,Alert,ActivityIndicator} from 'react-native';
import {  Titulo,  Input} from '../Login/style';
import {  Button,   ButtonText } from '../Home/style';
import { styles } from './style';


const Register = (props) => {
  const [enableshift, setenableShift] = useState(false);
  const [nome, onChangeNome] = useState('');
  const [email, onChangeEmail] = useState('');
  const [senha, onChangePass] = useState('');
  const [confirmSenha, onChangeConfirmSenha] = useState('');
  const [loading, setLoading] = useState(false);

  function cadastrar(props){
    if (nome != "" && email != ""&& senha != "" && confirmSenha != ""){

      if ( senha != confirmSenha ){
        Alert.alert("As senhas não conferem!")
     
      }else{ 
        onChangeNome("")
        onChangeEmail("")
        onChangePass("")
        onChangeConfirmSenha("")
        setLoading(true)
        setenableShift(false)
        fetch("https://99-Pets-Api.gabrielfeijo.repl.co/createUser", {
              method: "post",
              headers: {
                'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                nome: nome,
                email: email.toLowerCase(),
                senha: senha
              })
        })
        .then((res) => {  return res;
        })        
        .then((res) => {  
          setLoading(false)
          if (res.status == 201){
        
            let myPromise = res.json()
            myPromise.then((infos) => {  
           
              const userid = infos._id
              props.navigation.navigate("CadastroPet",userid) 
           });
          
           
          }else  if (res.status == 409){

            let myPromise = res.text()
            myPromise.then((message) => {  
              Alert.alert(message);
           });
          }
          
          
             
          
                    
        })
        .catch((err) => {
          setLoading(false)
          Alert.alert('Algo deu errado');
        });
      }

    }else{
      Alert.alert("Preencha todas as informações")
    }
  }

  return (
    <>
     {loading && (
        <View style={styles.loadingScreen}>
        <ActivityIndicator color="white" size="large"></ActivityIndicator>
        </View>
      )}
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
      
            <Button onPress={() => {cadastrar(props)}}><ButtonText>Próximo</ButtonText></Button>
      
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Register;


