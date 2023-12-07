import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

export default function Btn({bgColor, btnLable, textColor,Press }) {
    return (
        <TouchableOpacity onPress={Press} style={{
            backgroundColor: bgColor, borderRadius: 100, alignItems: 'center', width: 300,paddingVertical:10,marginVertical:10
        }}>
            <Text style={{ color: textColor, fontSize: 23, fontWeight: 'bold' }}>
                {btnLable}

            </Text>

        </TouchableOpacity>
    )
}
