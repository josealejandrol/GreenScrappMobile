import React from 'react';
import {Text,View,TouchableOpacity,Image,ImageBackground} from 'react-native'

//stules
import styleHeader from '@components/Header/style'


export default function Header(props) {
    return (
       <View style={styleHeader.container}>
            <ImageBackground  source={require('../../assets/fondo.png')} style={styleHeader.background}>
                <TouchableOpacity  style={styleHeader.back} onPress={props.back}>
                    <Image source={props.icoback} style={{width: 25, height: 25}}/>
                </TouchableOpacity>
                <View style={styleHeader.logocontainer}>
                    <Image source={props.logo} style={{width: 115, height: 60}}/>
                </View>
                <TouchableOpacity style={styleHeader.plus} onPress={props.alternativeButton}>
                    <Image source={props.icoplus}/>
                    <Text style={styleHeader.textalternative}>{props.alternativeText}</Text>
                </TouchableOpacity>
            </ImageBackground>
            <Text style={styleHeader.title}>{props.title}</Text>
       </View>
    )
}