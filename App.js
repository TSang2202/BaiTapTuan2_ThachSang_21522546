import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default function App() {
  const [check, setCheck] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Onpress = () =>{
   if (username.localeCompare('user') == 0 && password.localeCompare('123456') == 0){
      setCheck(1);
      //alert(check)
    }else{
      alert('Username or Password incorrect!')
    }
  }

  const canCle = () =>{
    setCheck(0)
  }

  if(check == 0)
  {
    return (
      <View style={styles.container}>
        <View style={styles.groupLogin}>
          <Text style={styles.titleLogin}>LOGIN</Text>
        </View>
  
        <View style={styles.group}>
          <Text style={styles.title}> Username</Text>
          <TextInput
            onChangeText={(username) => setUsername(username)}
            style={styles.input}
  
          />
        </View>
  
        <View style={styles.group}>
          <Text style={styles.title}> Password</Text>
          <TextInput 
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            style={styles.input}
  
          />
        </View>
  
        <View style={styles.groupBtn}>
          <TouchableOpacity style={styles.touchBtn}
            onPress = {Onpress}
          >
            
            <Text style={styles.titleBtn}>LOGIN</Text>
          </TouchableOpacity>
          
        </View>
  
      </View>
    );
  }else{
    return(
    <View style={styles.groupSuccess}>
      <Text style={styles.titleSuccess}>LOGIN SUCCESS!</Text>
      <View style={styles.groupBtn}>
          <TouchableOpacity style={styles.touchBtn}
            onPress = {canCle}
          >
            
            <Text style={styles.titleBtn}>CANCLE</Text>
          </TouchableOpacity>
          
        </View>
    </View>


    )
      
  }
 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    
  },
  group:{
    marginTop: 30,
    marginHorizontal: 30
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  }, 
  input:{
      marginTop: 10,
      height: 40,
      width: '100%',
      backgroundColor: 'lightgrey',
      fontSize: 15
  },
  groupLogin:{
    alignItems:'center'
  },
  titleLogin:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  groupBtn:{
    alignItems: 'center',
    marginTop: 30,
  },
  touchBtn:{
    alignItems:'center',
    justifyContent: 'center',
    height: 30,
    width: 110,
    backgroundColor: 'green',
    borderRadius: 20,
   
  },
  titleBtn:{
    color: 'white',
    fontWeight: 'bold',
    textAlignVertical: 'center'
  },
  groupSuccess:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleSuccess:{
    fontSize: 30,
    fontWeight: 'bold'
  }
});
