import React from 'react';
import {TouchableOpacity,Text,Image,View} from 'react-native'

import basic from './style' 



export default function Botton(props) {
    return (
        <TouchableOpacity style={props.boton}>
            <View style={basic.image}>
                <Image source={props.image} style={{width: 30, height: 30}}/>
            </View>
            <View style={basic.content}>
                <Text style= {props.colortext}>{props.title}</Text>
            </View>
        </TouchableOpacity> 

    )
}