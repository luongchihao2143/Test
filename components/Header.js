import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import color from '../constant/color';


const Header = () => {
    return (
        <View style={styles.header}>
                <TouchableOpacity onPress={()=>{}}>
                <Ionicons name="return-up-back" size={40} color={color.textHeader} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Neque Porro</Text>           
                <Text style={styles.headerRightTitle}>Expicabo</Text>
            
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 140,
        paddingTop: 25,
        paddingHorizontal: 20,
    },


    headerTitle: {
        color: color.textHeader,
        fontSize: 35,
        fontWeight: 'bold'
    },

    headerRightTitle:{
        fontSize: 25,
        alignSelf: 'flex-end',
        fontWeight: 'bold'
    },
})
