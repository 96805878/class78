import { Text, View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, ImageBackground, Image, Platform, Alert } from 'react-native'
import React, { Component } from 'react'
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';



export default class Isslocation extends Component {
  constructor(props){
    super(props)
this.state={
  location:{},

}
  }
  getIsslocation=()=>{
    axios.get("https://api.wheretheiss.at/v1/satellites/25544")
    .then(Response=>{
      this.setState({
        location:Response.data
      })
    })
    .catch(error=>{
      Alert.alert(error.message)

    })
    
  }
  componentDidMount()
  {
    this.getIsslocation()
    console.log(this.state.location)
  
  }
  render() {
    if(Object.keys(this.state.location).length==0){
      return(
        <View style={{
          flex:1,
          justifyContent:"center",
          alignItems:"center",

        }} >
          <Text>Loading....</Text>
        </View>
      )
    }
    else{
      
   
    return (
        <View style={styles.container} >
      <SafeAreaView style={styles.droidsafearea} />
      <ImageBackground source={require("../assets/iss_bg.jpg")} 
      style={styles.bgImage}>
      <View style={styles.titlebar} >
        <Text style={styles.titletext}>
            ISS Location
        </Text>
        </View>
         <View style={styles.mapContainer}>
      <MapView
      style={styles.map}
      region={{
        latitude:this.state.location.latitude,
        longitude:this.state.location.longitude,
        latitudeDelta:100,
        longitudeDelta:100,

      }}
      >
        <Marker  
        coordinate={{
          latitude:this.state.location.latitude,
          longitude:this.state.location.longitude,

        }}
        >
          <Image  
          source={require("../assets/iss_icon.png")}
          style={{
            height:50,
            width:50,

          }}
          />

        </Marker>
      </MapView>
         </View>
         <View style={styles.infocontainer} >
          <Text  style={styles.infotext}>
            latitude:{this.state.location.latitude}
          </Text>
          <Text  style={styles.infotext}>
            longitude:{this.state.location.longitude}
          </Text>
          <Text  style={styles.infotext}>
            altitude(km):{this.state.location.altitude}
          </Text>
          <Text  style={styles.infotext}>
            velocity(kmph):{this.state.location.velocity}
          </Text>
         </View>
        </ImageBackground>
      </View>
    )
  }
}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    droidsafearea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0,
        

    },
    titlebar:{
      flex:0.15,
      justifyContent:"center",
      alignItems:"center",

    },
    titletext:{
        fontSize:40,
        fontWeight:"bold",
        color:"white",

    },
    routeText:{
      fontSize:35,
      fontWeight:"bold",
      color:"black",
      marginTop:20,
      paddingLeft:5,

    },
    routeCard:{
      flex:0.2,
      marginLeft:10,
      marginRight:10,
      marginTop:50,
      borderRadius:30,
      backgroundColor:"rgba(52,52,52,0.5)",
     
      width:"90%",
      
    },
    bgImage:{
      flex:1,
      resizeMode:"cover"
    },
    knowMore:{
      paddingLeft:30,
      color:"red",
      fontSize:15,

    },
    bgDigit:{
      position:"absolute",
      color:"rgba(183,183,183,0.5)",
      fontSize:150,
      right:20,
      bottom:-15,
      zIndex:-1,
  
    },
    iconImage:{
      height:200,
      width:200,
      position:"absolute",
      resizeMode:"contain",
      right:20,
      top:-80,

    },
    mapContainer:{
      flex:0.6,

    },
    map:{
      width:"100%",
      height:"100%",

    },
    infocontainer:{
      flex:0.2,
      backgroundColor:"white",
      marginTop:-10,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      padding:30,
    },
    infotext:{
      fontSize:15,
      color:"black",
      fontWeight:"bold",
      
    }

  });