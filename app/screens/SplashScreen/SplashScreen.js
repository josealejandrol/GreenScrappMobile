import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Botton from '@components/Botton'
import Header from '@components/Header/Header'

//stules
import button from '@components/Botton/style'

export default function SplashScreen() {
    return(
        <SafeAreaView style={{flex: 1}}>
            {/* <Header
                icoback={require('../../assets/close.png')}
                title={'Registrate'}
                alternativeText={'Iniciar sesión'}
                logo={require('../../assets/logo.png')}
            /> */}
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
    )
}