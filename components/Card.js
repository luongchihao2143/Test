import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Pressable
} from 'react-native'
import color from '../constant/color'
import { MaterialIcons } from '@expo/vector-icons';

const Card = (props) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.innerLeftCard}>
                <View style={{...styles.innerinnerLeftCard, ...props.style}}>
                <Text style={styles.row1}>{props.row1}</Text>
                <Text style={styles.row2}>{props.row2}</Text>
                <View style={styles.row3}>
                    <Text style={styles.row3Left}>{props.row3Left}</Text>
                    <Text style={styles.row3Right}>{props.row3Right}</Text>
                </View>
                </View>
            </View>

            <View style={styles.innerRightCard}>
                <MaterialIcons name="navigate-next" size={24} color={color.textHeader} />
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    innerLeftCard:{
        width: '90%',
        backgroundColor:color.backgroundCard,
    },

    innerRightCard:{
        width: '10%',
        
    },

    innerinnerLeftCard:{
        marginHorizontal: 15,
    },

    row1:{
        marginTop: 20,
        marginBottom: 5,
        fontSize: 15,
        color: color.textTouch,
    },

    row2:{
        marginBottom: 5,
        fontSize: 20,
    },

    row3:{
        marginTop: 5,
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent:'space-between',
        paddingRight: 120
    },

    row3Left:{
        color: color.textTouch,
    },

    row3Right:{
        color:color.textTouch,
        
    },
})
