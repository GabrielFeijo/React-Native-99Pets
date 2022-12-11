import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInfo, styles, Box, ConfirmBox, TituloBox } from './style';
import { Titulo, Text } from '../ListPets/style';
import { NineMenu } from '../Menu';
import { Icon } from 'react-native-elements';
import { Card2 } from '../Card';
import { Button, ButtonText } from '../Home/style';

const InfoLocation = (props) => {
  const [Local, setLocal] = useState(false);

  const petid = props.route.params.petid;
  const service = props.route.params.service;
  const { numero, info, quantidade, url } = props.route.params.local;

  return (
    <>
      <NineMenu />

      <View style={styles.root}>
        <View style={styles.wrap}>
          <Card2
            url={url}
            nome={'Pet Shop ' + numero}
            info={`${info} Km`}
            quantidade={quantidade}
          />

          <Titulo>Pet Shop {numero}</Titulo>
          <Text>
            Especializado em {service}, o Pet Shop {numero} é bastante
            recomendado para animais de pequeno e grande porte, proporcionando
            cortes delicados e muito bem feitos.
          </Text>
        </View>

        <View>
          <TextInfo>
            {' '}
            <Icon
              name="circle"
              type="FontAwesome"
              size={10}
              color="#FFBD59"
            />{' '}
            {service} - R$50,00{' '}
          </TextInfo>
          <Button
            onPress={() => {
              props.navigation.navigate('DriverLocation');
            }}>
            <ButtonText>Próximo</ButtonText>
          </Button>
        </View>
      </View>

      {Local && (
        <Box>
          <ConfirmBox>
            <TituloBox>Enviar localização?</TituloBox>
            <Text style={styles.center}>
              Precisamos da sua localização para que possamos localizar seu pet
            </Text>
            <Button
              onPress={() => {
                props.navigation.navigate('Locations');
              }}
              style={styles.botao}>
              <ButtonText>Enviar Localização</ButtonText>
            </Button>
          </ConfirmBox>
        </Box>
      )}
    </>
  );
};

export default InfoLocation;

{
  /* <section class="confirm-box d-none">
<div class="div-box">
    <h2>Enviar localização?</h2>
    <p>Precisamos da sua localização para que possamos localizar seu pet</p>
    <button class="btn-secondary">Enviar Localização</button>
</div>

</section> */
}
