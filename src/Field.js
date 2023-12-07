import { } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web';
import { bRed } from './Constants';

const Field = props => {
    return (
        <TextInput
            {...props}
            style={{ borderRadius: 200,color: bRed, paddingHorizontal: 10, width: 80,backgroundColor:'rgb(220,220, 200)',width:'80%',marginTop:10,paddingVertical:10}} placeholderTextColor={bRed}>

        </TextInput>


    )
}
export default Field;