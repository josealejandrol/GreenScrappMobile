import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';

import button from './style';

const Botton = ({disable, boton, image, colortext, title}) => {
  return (
    <TouchableOpacity disabled={disable} style={boton}>
      <View style={button.image}>
        <Image source={image} style={{width: 25, height: 25}} />
      </View>
      <View style={button.content}>
        <Text style={colortext}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Botton;
