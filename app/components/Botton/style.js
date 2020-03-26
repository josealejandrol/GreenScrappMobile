import { StyleSheet } from "react-native";

const button = StyleSheet.create(
    {
        textbasic:{
            fontFamily:'SpaceGrotesk-Bold',
            color:'#07A004',
            fontWeight:'bold',
            marginRight: '20%'
        },
        basic:{
            flexDirection:'row',
            backgroundColor:'#FFFFFF',
            height: '9%',
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
            height: '9%',
            width: '90%' ,
            borderColor:'#07A004',
            borderRadius:8,
            borderWidth:1.5
        },
        textsolid:{
            fontFamily:'SpaceGrotesk-Bold',
            color:'#FFFFFF',
            fontWeight:'bold',
            marginRight: '20%'
        },
        disable:{
            flexDirection:'row',
            backgroundColor:'#E0E0E0',
            height: '9%',
            width: '90%' ,
            borderColor:'#E0E0E0',
            borderRadius:8,
            borderWidth:1.5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        }


    }
)

export default button;
