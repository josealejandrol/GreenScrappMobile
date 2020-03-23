import React from 'react';
import {TouchableOpacity,Text,Image,View} from 'react-native'

import button from './style' 



export default function Botton(props) {
    return (
        <TouchableOpacity disabled={props.disable} style={props.boton}>
            <View style={button.image}>
                <Image source={props.image} style={{width: 25, height: 25}}/>
            </View>
            <View style={button.content}>
                <Text style= {props.colortext}>{props.title}</Text>
            </View>
        </TouchableOpacity> 

    )
}