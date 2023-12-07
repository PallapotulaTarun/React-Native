import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { bRed } from './Constants';
import Field from './Field';
import Btn from './Btn';


const Login = () => {
    return (
       
             <View style={styles.Loginbg}>
            <Text style={{ marginVertical: 30, fontSize: 40, fontWeight: 'bold', textAlign: 'center',color:'white' }}>
                Login
            </Text>
            <View
            style={{
                backgroundColor:'white',
                height:700,
                width:460,
                borderTopLeftRadius:100,
                paddingTop:100,
                alignItems:'center',
                
            }}>
            <Text style={{fontSize:30,fontWeight:'bold',color:bRed,}}>WelCome Back</Text>
            <Text style={{fontSize:15,color:'grey',fontWeight:'bold',marginTop:10}}>Login to your account</Text>
           <Text> <Field placeholder="Email/Username" keyboardType={'eamil-address'}/></Text>
           <Text> <Field placeholder="Password" secureTextEntry={true} /></Text>
           <View>
            <Text style={{fontWeight:'bold',paddingRight:10}}>
                Forgot Password?
            </Text>
           </View>
           <Btn width='70%' textColor='white' btnLable={'Login'} bgColor={bRed}/>
            </View>
            
        </View>
       
       

    )
}
export default Login;
const styles = StyleSheet.create({
    Loginbg:{
        backgroundColor:bRed,
        flex:12
    }

})