import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import basic from '@components/Botton/style'

import Botton from '@components/Botton'


export default function SplashScreen() {
    return(
        <SafeAreaView style={{flex: 1}}>
            <Text>SplashScreen</Text>
            <Botton 
                    boton={basic.solid}
                    image={require('../../assets/facebook.png')}
                    colortext={basic.textsolid}
                    title={'Boton'}
                    
            />
             <Botton 
                    boton={basic.basic}
                    image={require('../../assets/facebook.png')}
                    colortext={basic.textbasic}
                    title={'Boton'}
            />
        </SafeAreaView>
    )
}