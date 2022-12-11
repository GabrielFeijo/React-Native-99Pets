import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Titulo, Text } from '../ListPets/style';
import { styles } from './style';
import { NineMenu } from '../Menu';
import { CardEquipe } from '../Card';

const ListSquad = (props) => {
  return (
    <>
      <NineMenu />
      <View style={styles.wrap}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <Titulo>Conheça a nossa equipe!</Titulo>
          <Text>
            Somos uma equipe apaixonada por Pets que possuem o objetivo de dar
            um conforto maior do Tutor ao Pet.
          </Text>

          <CardEquipe
            nome={'Gabriel Feijó'}
            info={'Desenvolvedor'}
            url={require(`../../assets/images/squad/gg.png`)}
          />

          <CardEquipe
            nome={'Aynoã dos Santos'}
            info={'Designer'}
            url={require(`../../assets/images/squad/aynoa.png`)}
          />

          <CardEquipe
            nome={'Raphael Torres'}
            info={'Testes'}
            url={require(`../../assets/images/squad/torres.png`)}
          />
          <CardEquipe
            nome={'Maria Rita'}
            info={'Designer'}
            url={require(`../../assets/images/squad/rita.png`)}
          />
          <CardEquipe
            nome={'Wendel Pedro'}
            info={'Documentação'}
            url={require(`../../assets/images/squad/wendel.png`)}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default ListSquad;
