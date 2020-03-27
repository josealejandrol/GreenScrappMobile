import React, {useState} from 'react';
import { SafeAreaView, Text,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import button from '@components/Botton/style';
import colors from '@styles/colors';

import Botton from '@components/Botton';
import Input from '@components/Input';

export default function SplashScreen() {
    const [hidePassword, setHidePassword] = useState(true);
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: colors.WHITEPRIMARY}}>
            <Text style={{fontFamily: 'SpaceGrotesk-Medium', fontSize: 32}}>SplashScreen</Text>
            <Input
                placeholder='Contraseña'
                bolGone={true}
                secureTextEntry={hidePassword}
                onPress={()=>setHidePassword(!hidePassword)}
                // nameRightIcon='cancel'
            />
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