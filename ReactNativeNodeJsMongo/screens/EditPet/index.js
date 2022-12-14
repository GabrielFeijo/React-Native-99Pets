import React, { useState, useEffect } from 'react';
import {
  View,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
} from 'react-native';
import { MainButton, ButtonDelete, Text, styles } from './style';
import { NineMenu } from '../Menu';
import { Card } from '../Card';
import { ButtonText } from '../Home/style';
import { Input } from '../Login/style';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';

const EditPet = (props) => {
  const [enableshift, setenableShift] = useState(false);
  const [userid, setUserId] = useState('');
  const [nome, onChangeNome] = useState('');
  const [idade, onChangIdade] = useState('');
  const [raca, onChangeRaca] = useState('');
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState('https://i.imgur.com/4LSmGYF.png');
  const [modal, setModal] = useState(false);

  const petid = props.route.params;
  const [pet, setPet] = useState([]);

  const fetchEditPet = (id) => {
    fetch('https://99-pets-api.gabrielfeijo.repl.co/onePet?id=' + id)
      .then((res) => res.json())
      .then((results) => {
        console.log(results.nome);
        setPet(results);
        onChangeNome(results.nome);
        onChangIdade(results.idade);
        onChangeRaca(results.raca);
        setPicture(results.picture);
        setUserId(results.userid);
      })
      .catch((err) => {
        Alert.alert('Algo deu errado!');
      });
  };
  useEffect(() => {
    fetchEditPet(petid);
  }, [petid]);

  function deletePet(petid) {
    fetch('https://99-Pets-Api.gabrielfeijo.repl.co/deletePet?id=' + petid, {
      method: 'DELETE',
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        setLoading(false);
        props.navigation.navigate('ListPets', { userid });
      })
      .catch((err) => {
        setLoading(false);
        Alert.alert('Algo deu errado');
      });
  }
  function updatePet(petid) {
    fetch('https://99-Pets-Api.gabrielfeijo.repl.co/updatePet?id=' + petid, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({
        userid: userid,
        nome: nome,
        idade: idade,
        raca: raca,
        picture: picture,
      }),
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        setLoading(false);
        props.navigation.navigate('ListPets', { userid });
      })
      .catch((err) => {
        setLoading(false);
        Alert.alert('Algo deu errado');
      });
  }

  const pickFromGallery = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
        setLoading(true);
      }
    } else {
      Alert.alert('voc?? precisa de permiss??o para isso');
    }
  };
  const pickFromCamera = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split('.')[1]}`,
          name: `test.${data.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
        setLoading(true);
      }
    } else {
      Alert.alert('voc?? precisa de permiss??o para isso');
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'ml_default');
    data.append('cloud_name', 'doyx0y9ek');

    fetch('https://api.cloudinary.com/v1_1/doyx0y9ek/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.url);
        setModal(false);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        Alert.alert('erro durante o upload');
      });
  };

  return (
    <>
      {loading && (
        <View style={styles.loadingScreen}>
          <ActivityIndicator color="white" size="large"></ActivityIndicator>
        </View>
      )}

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <NineMenu />
        <KeyboardAvoidingView
          behavior="position"
          style={styles.root}
          enabled={enableshift}>
          <View style={styles.wrap}>
            {pet && (
              <Card nome={nome} info={idade} info2={raca} url={picture} />
            )}
            <Text
              onPress={() => {
                props.navigation.navigate('ListPets');
              }}
              style={styles.text}>
              N??o ?? esse pet?
            </Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.description}>Nome do Pet</Text>
            <Input
              value={nome}
              onChangeText={onChangeNome}
              placeholder="Nome"
              label="Nome"
              placeholderTextColor="#8B8585"
              onFocus={() => setenableShift(true)}
              style={styles.input}
            />

            <Text style={styles.description}>Idade do Pet</Text>
            <Input
              value={raca}
              onChangeText={onChangeRaca}
              placeholder="Ra??a"
              label="Ra??a"
              placeholderTextColor="#8B8585"
              onFocus={() => setenableShift(true)}
              style={styles.input}
            />
            <Text style={styles.description}>Ra??a do Pet</Text>
            <Input
              value={idade}
              onChangeText={onChangIdade}
              placeholder="Idade"
              label="Idade"
              placeholderTextColor="#8B8585"
              onFocus={() => setenableShift(true)}
              style={styles.input}
            />
          </View>

          <View>
            <Icon
              name="camera"
              type="feather"
              style={{ marginRight: 5 }}
              onPress={() => setModal(true)}
            />
            <Text
              style={{ textAlign: 'center' }}
              onPress={() => setModal(true)}>
              Alterar Imagem
            </Text>
          </View>

          <View style={styles.flex}>
            <ButtonDelete
              onPress={() => {
                deletePet(petid);
              }}
              style={styles.button}>
              <ButtonText style={styles.color}>Deletar Pet</ButtonText>
            </ButtonDelete>
            <MainButton
              onPress={() => {
                updatePet(petid);
              }}
              style={styles.button}>
              <ButtonText>Atualizar</ButtonText>
            </MainButton>
          </View>
        </KeyboardAvoidingView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            setModal(false);
          }}>
          <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
              <Button
                icon="camera"
                theme={theme}
                mode="contained"
                onPress={() => pickFromCamera()}>
                C??mera
              </Button>
              <Button
                icon="image-area"
                mode="contained"
                theme={theme}
                onPress={() => pickFromGallery()}>
                Galeria
              </Button>
            </View>
            <Button color="black" onPress={() => setModal(false)}>
              Cancelar
            </Button>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
};

const theme = {
  colors: {
    primary: '#FFBD59',
  },
};

export default EditPet;
