import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import button from '@components/Botton/style';

import Botton from '@components/Botton';

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontFamily: 'SpaceGrotesk-Medium', fontSize: 32}}>
        SplashScreen
      </Text>
      <Icon name={'visibility-off'} size={20} color={'#000'} />
      <Botton
        boton={button.solid}
        // image={require('../../assets/facebook.png')}
        colortext={button.textsolid}
        title={'Boton'}
      />
      <Botton
        boton={button.basic}
        image={require('../../assets/facebook.png')}
        colortext={button.textbasic}
        title={'Boton'}
      />
      <Botton
        boton={button.disable}
        // image={require('../../assets/facebook.png')}
        colortext={button.textsolid}
        title={'Boton'}
        disable={true}
      />
    </SafeAreaView>
  );
};
export default SplashScreen;
