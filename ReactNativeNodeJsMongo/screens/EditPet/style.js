import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const MainButton = styled.TouchableOpacity`
  

    width: 297px;
    padding: 10px;
    background-color: #FFBD59;
    border-radius: 16px;
    border: none;
    margin:10px auto;
    transition: 0.5s;
}
`;

export const ButtonDelete = styled.TouchableOpacity`
    width: 297px;
    padding: 10px;
    background-color: #F2F2F2;
    border:2px solid #FFBD59;
    border-radius: 16px;
   
    margin:10px auto;
    transition: 0.5s;

}
`;

export const Text = styled.Text`
  font-family: Montserrat_400Regular; 
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.57);

`;

export const styles = StyleSheet.create({
  loadingScreen: {
    position: 'absolute',
    width: '100%',
    height: '110%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0008',
    opacity: 1,
    zIndex: 9999,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },

  wrap: {
    minWidth: 350,
    maxHeight: 240,
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },

  center: {
    marginTop: 20,
  },

  button: {
    width: 150,
    height: 50,
  },
  color: {
    color: '#FFBD59',
  },
  input: {
    width: 350,
    marginTop: 0,
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginTop: 20,
    marginBottom: 2,
  },
  text: {
    margin: 5,
  },
  image: {
    marginTop: 10,
    fontSize: 16,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: 'white',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
