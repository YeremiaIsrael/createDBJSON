import React from 'react'
import {View,Text,ScrollView,
  TextInput as Input} from 'react-native'
import ListItems from '../../src/components/ListItem.js'

const Forms = () => {
  return (
    <ScrollView>
      <View>
        <Text>Fullname: </Text>
        <Input placeholder="input full name"/>
        <Text>Username: </Text>
        <Input placeholder="input username"/>
        <Text>Email: </Text>
        <Input placeholder="your Email"/>
        <Text>Country: </Text>
        <Input placeholder="your country"/>
        <Text>College: </Text>
        <Input placeholder="input your college"/>
        <View style={{marginVertical:30}}/>
        <ListItems/>
      </View>
    </ScrollView>
  )
}

export default Forms
