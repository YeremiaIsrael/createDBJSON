import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,TextInput as Input, StyleSheet,TouchableOpacity} from 'react-native'
import Axios from 'axios'
import ListItems from '../../src/components/ListItem.js'

const Forms = () => {
  const [fullname,setFullname]=useState('')
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [country,setCountry]=useState('')
  const [college,setCollege]=useState('')

  const submit =()=>{
    const datas = {
      fullname,username,email,country,college
    }

    Axios.post('http://192.168.1.4:3000/users',datas)
    .then(res=>{
      console.log(res);
    })
  }

  return (
    <ScrollView>
      <View style={{padding:20}}>
        <Text>Fullname: </Text>
        <Input placeholder="input full name" style={style.inputs} value={fullname} onChangeText={(value)=>setFullname(value)}/>
        <Text>Username: </Text>
        <Input placeholder="input username" style={style.inputs} value={username} onChangeText={(value)=>setUsername(value)}/>
        <Text>Email: </Text>
        <Input placeholder="your Email" style={style.inputs} value={email} onChangeText={(value)=>setEmail(value)}/>
        <Text>Country: </Text>
        <Input placeholder="your country" style={style.inputs} value={country} onChangeText={(value)=>setCountry(value)}/>
        <Text>College: </Text>
        <Input placeholder="input your college" style={style.inputs} value={college} onChangeText={(value)=>setCollege(value)}/>
        <TouchableOpacity onPress={submit} style={style.btnTouch}>
          <Text style={{color:"#444",fontWeight:'bold'}}>Submit Data</Text>
        </TouchableOpacity>
        <View style={style.line}/>
      </View>
    </ScrollView>
  )
}

export default Forms;

const style = StyleSheet.create({
  inputs:{borderRadius:20,borderColor: "#666",borderWidth:1,padding:7,marginVertical:7,paddingHorizontal:20},
  line:{height:2,backgroundColor:'#000',marginVertical:20},
  btnTouch:{height:35,backgroundColor:"lightblue",alignItems:'center',justifyContent:'center',borderRadius:20,marginTop:10}
})
