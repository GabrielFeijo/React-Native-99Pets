import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './style';
import { Titulo, Text } from '../ListPets/style';
import { Icon } from 'react-native-elements';
import { NineMenu } from '../Menu';
import { Card2 } from '../Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Locations = (props) => {
  console.log(props);

  const petid = props.route.params.petid;
  const service = props.route.params.selected;

  return (
    <>
      <NineMenu />
      <View style={styles.wrap}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Titulo>Qual petshop?</Titulo>
          <Text>
            Os petshops dessa lista são os mais indicados para o serviço
            escolhido.
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('InfoLocation', {
                petid,
                service,
                local: {
                  numero: '1',
                  info: '3.6',
                  quantidade: 4,
                  url: require(`../../assets/images/local1.png`),
                },
              });
            }}>
            <Card2
              url={require(`../../assets/images/local1.png`)}
              nome={'Pet Shop 1'}
              info={'3,6 Km'}
              quantidade={4}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('InfoLocation', {
                petid,
                service,
                local: {
                  numero: '2',
                  info: '2',
                  quantidade: 3,
                  url: require(`../../assets/images/local2.png`),
                },
              });
            }}>
            <Card2
              url={require(`../../assets/images/local2.png`)}
              nome={'Pet Shop 2'}
              info={'2 Km'}
              quantidade={3}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('InfoLocation', {
                petid,
                service,
                local: {
                  numero: '3',
                  info: '4',
                  quantidade: 5,
                  url: require(`../../assets/images/local3.png`),
                },
              });
            }}>
            <Card2
              url={require(`../../assets/images/local3.png`)}
              nome={'Pet Shop 3'}
              info={'4 Km'}
              quantidade={5}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default Locations;
