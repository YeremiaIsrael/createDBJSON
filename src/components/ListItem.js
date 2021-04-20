import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const ListItems = ({name,username,})=>{
  return(
    <View style={style.container}>
      <Text>LocalAPI DB.JSON</Text>
    </View>
  )
}

export default ListItems;

const style = StyleSheet.create({
  container:{
    padding:20
  }
})
