import React from 'react';
import {Text,View,TouchableOpacity,Image,ImageBackground} from 'react-native'

//stules
import styleHeader from '@components/Header/style'


export default function Header(props) {
   const {back, icoback, logo, alternativeButton, icoplus, alternativeText, title } = props;
    return (
       <View style={styleHeader.container}>
            <ImageBackground  source={require('../../assets/fondo.png')} style={styleHeader.background}>
                <TouchableOpacity  style={styleHeader.back} onPress={back}>
                    <Image source={icoback} style={{width: 25, height: 25}}/>
                </TouchableOpacity>
                <View style={styleHeader.logocontainer}>
                    <Image source={logo} style={{width: 115, height: 60}}/>
                </View>
                <TouchableOpacity style={styleHeader.plus} onPress={alternativeButton}>
                    <Image source={icoplus}/>
                    <Text style={styleHeader.textalternative}>{alternativeText}</Text>
                </TouchableOpacity>
            </ImageBackground>
            <Text style={styleHeader.title}>{title}</Text>
       </View>
    )
}
