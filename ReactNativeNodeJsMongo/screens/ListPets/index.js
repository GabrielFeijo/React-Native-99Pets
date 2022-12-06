import React, { useState } from 'react';
import {  View,ScrollView} from 'react-native';
import { Titulo,Text,styles } from './style';
import { Icon } from 'react-native-elements'
import { NineMenu } from '../Menu'
import Card from '../Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PhotoPet = (props) => {
 
 return (
     <>
        <NineMenu/>
        <View  style={styles.wrap}>

        <ScrollView   showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} > 
            <Titulo>Qual pet vamos cuidar hoje?</Titulo>
            <Text onPress={() => { props.navigation.navigate("ServicePet")}}>Se o seu pet não estiver na lista, pode adicioná-lo clicando no botão abaixo.</Text>
          
            <Card onPress={() => { props.navigation.navigate("ServicePet")}}/>
            <TouchableOpacity onPress={() => { props.navigation.navigate("ServicePet")}}>
              <Card />
            </TouchableOpacity>
            <Card/>
            <Card/>
            <Card/>
            <TouchableOpacity style={styles.icone} onPress={() => { props.navigation.navigate("CadastroPet")}}>
              <Icon name='pluscircleo' type='antdesign'/> 
              <Text style={styles.textIcone}>Adicionar novo pet</Text>
            </TouchableOpacity>
          </ScrollView >
        </View>
     </>
   
  );
};

export default PhotoPet;


