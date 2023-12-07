import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Btn from './Btn'
import { darkGreen, green } from './Constants'

const Home = (props) =>{
    return(
        <View style={{marginHorizontal:40, marginVertical:100}}>
            <Text style={{fontSize:50}}>Let's Start</Text>
            <Btn bgColor={darkGreen} textColor='white'  btnLable='Login' Press={()=>props.navigation.navigate('Login')}/>
            <Btn bgColor={'white'} textColor={green} btnLable='Signup' Press={()=>props.navigation.navigate('Signup')}/>

        </View>
    )
}

const styles = StyleSheet.create({
    

})

export default Home;