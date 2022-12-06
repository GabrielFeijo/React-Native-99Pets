import React, { useState } from 'react';
import {  View} from 'react-native';
import { Text,styles } from './style';
import { NineMenu } from '../Menu'
import {  StyleSheet } from "react-native";
import Card from '../Card';
import {  Button,   ButtonText } from '../Home/style';

import RNPickerSelect from 'react-native-picker-select';

{/* <option value="none" selected disabled>Qual serviço?</option>
            <option value="Banho e Tosa">Banho & Tosa</option>
            <option value="Consultas veterinárias">Consultas veterinárias</option>
            <option value="Vacinas">Vacinas</option>
            <option value="Hospedagem">Hospedagem</option>
            <option value="Spa">Spa</option> */}

export const Dropdown = () => {
  return (
      <RNPickerSelect 
          onValueChange={(value) => console.log(value)}
          items={[
              { label: 'Banho e Tosa', value: 'Banho & Tosa' },
              { label: 'Consultas veterinárias', value: 'Consultas veterinárias' },
              { label: 'Vacinas', value: 'Vacinas' },
              { label: 'Hospedagem', value: 'Hospedagem' },
              { label: 'Spa', value: 'Spa' },
          ]}
          style={pickerSelectStyles}
      />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontFamily:"Montserrat_400Regular",
    width:350 ,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#2F2E41',
    backgroundColor:"#FFFFFF",
    borderRadius: 15,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontFamily:"Montserrat_400Regular",
    width:350 ,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#2F2E41',
    backgroundColor:"#FFFFFF",
    borderRadius: 15,
    color: 'black',
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});


const ServicePet = (props) => {
 
 return (
    <>
      <NineMenu/>
      
      <View style={styles.root}>
        <View style={styles.wrap}>
          <Card />        
          <Text  onPress={() => { props.navigation.navigate("ListPets")}}>Não é esse pet?</Text>   
        </View>
        <View>
          <Dropdown />   
        </View>
        <Button><ButtonText>Próximo</ButtonText></Button>
      </View>
    </>
   
  );
};

export default ServicePet;


