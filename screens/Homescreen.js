import { Text, View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, ImageBackground, Image, Platform } from 'react-native'
import React, { Component } from 'react'



export default class Homescreen extends Component {
  render() {
    return (
        <View style={styles.container} >
      <SafeAreaView style={styles.droidsafearea} />
      <ImageBackground source={require("../assets/bg_image.png")} 
      style={styles.bgImage}>
      <View style={styles.titlebar} >
        <Text style={styles.titletext}>
            ISS Tracker App
        </Text>
        </View>
        <TouchableOpacity
        style={styles.routeCard}
        onPress={()=>this.props.navigation.navigate("Isslocation")} >
            <Text style={styles.routeText}>
                ISS Location
            </Text>

            <Text style={styles.knowMore}>
                {"Know more-->"}
            </Text>

            <Text style={styles.bgDigit}>
                1
            </Text>
            <Image source={require("../assets/iss_icon.png")} style={styles.iconImage} />

        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.routeCard}
        onPress={()=>this.props.navigation.navigate("Meteor")} >
            <Text style={styles.routeText}>
               Meteor
            </Text>

            <Text style={styles.knowMore}>
                {"Know more-->"}
            </Text>

            <Text style={styles.bgDigit}>
                2
            </Text>
            <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage} />
        </TouchableOpacity>
        </ImageBackground>
      </View>
    )
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

    }

  });