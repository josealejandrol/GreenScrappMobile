import { StyleSheet } from "react-native";

const styleHeader = StyleSheet.create(
    {
        container:{
            width:'100%',
            height:130,
            backgroundColor:'#FFFFFF'
        },
        background:{
            width:'100%',
            height:'80%',
            flexDirection:'row',
            backgroundColor:'#FFFFFF'
        },
        title:{
            height:'20%',
            fontFamily:'SpaceGrotesk-Medium',
            fontSize:25,
            marginLeft:'5%',
        },
        textalternative:{
            marginRight:'3%',
            fontFamily:'SpaceGrotesk-Bold',
            color: '#07A004',
            // textDecorationLine:'underline',
            // textDecorationColor:'#07A004'
        },
        logocontainer:{
            width:'50%',
            alignItems:"center",
            justifyContent:"center"
        },
        back:{
            marginTop:'2%',
            width:'20%',
            alignItems:"center",
            // justifyContent:"center"
        },
        plus:{
            marginTop:'2%',
            width:'30%',
            alignItems:"center",
            // justifyContent:"center"
        }

    }
)

export default styleHeader;
