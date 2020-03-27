import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '@styles/colors';

var showPassword = 'visibility';
var hidePassword = 'visibility-off';

const Input = ({
    nameLeftIcon, 
    placeholder, 
    onChangeText, 
    secureTextEntry, 
    bolGone, 
    onPress, 
    nameRightIcon}) => {
    return(
        <View style={styles.container}>
            <Icon style={styles.icon} name={nameLeftIcon} size={20} color={colors.GREENPRIMARY}/>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
                secureTextEntry={secureTextEntry}
            />
            {bolGone? 
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} >
                <Icon style={styles.icon} name={showPassword} size={20} color={secureTextEntry? colors.GRAYPRIMARY:colors.GREENPRIMARY}/>
            </TouchableOpacity>:
            <TouchableOpacity onPress={onPress} >
                <Icon style={styles.icon} name={nameRightIcon || null} size={20} color={colors.GRAYPRIMARY}/> 
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: 'green',
        borderBottomWidth: 1
    },
    icon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    btnVisibility:
      {
        height: 40,
        width: 35,
        paddingTop: 8,
        paddingLeft:5,
        paddingRight:5
      },
      btnImage:
      {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
      },
})

export default Input;