import { StyleSheet } from "react-native";

const basic = StyleSheet.create(
    {
        textbasic:{fontFamily:'SpaceGrotesk',
        color:'#07A004',
        fontWeight:'bold'
        },
        basic:{
            flexDirection:'row',
            backgroundColor:'#FFFFFF',
            height: '10%',
            width: '90%' ,
            borderColor:'#07A004',
            borderRadius:8,
            borderWidth:1.5
        },
        content:{
            width:'80%',
            justifyContent: 'center',
            alignItems:'center'
        },
        image:{
            width:'20%',
            justifyContent: 'center',
            alignItems:'center'
        },
        solid:{
            flexDirection:'row',
            backgroundColor:'#07A004',
            height: '10%',
            width: '90%' ,
            borderColor:'#07A004',
            borderRadius:8,
            borderWidth:1.5
        },
        textsolid:{
            fontFamily:'SpaceGrotesk',
            color:'#FFF',
            fontWeight:'bold'
        },


    }
)

export default basic;
