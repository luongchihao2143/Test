import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native'

import { Entypo } from '@expo/vector-icons';
import color from '../constant/color';
import Card from '../components/Card';

const Home = () => {
    const data = [
        { id: 0, name: 'Corporis' },
        { id: 1, name: 'Enim' },
        { id: 2, name: 'Voluz' },
        { id: 3, name: 'Quaerat' }
    ]
    return (
        <View style={styles.screenContainer}>
            <View style={styles.navCateogories} >
                <FlatList
                    horizontal
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity >
                                <Text style={styles.categoriesTitle}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <TouchableOpacity >
                <View style={styles.btnAdd} >
                    <Entypo name="plus" size={25} color={color.textHeader} />
                    <Text style={styles.textBtnAdd}> Ad veniam</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.veniamItem} >
                <Card
                    row1="Molestiae"
                    row2="lure Reprehenderit Qui"
                    row3Left="Temora Incidunt"
                    row3Right="2017"
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.veniamItem} >
                <Card
                    style={styles.card2}
                    row1="Numquam Eius Modi"
                    row2="Commodi Consequatur"
                    row3Left="Laudantium"
                    row3Right="2012"
                />
                <View style={styles.initialCard}>
                    <View style={styles.innierInitiialCard}>
                    <Text style={styles.initialCardText}>Beatae</Text>
                    <Text style={styles.initialCardText}>Washington</Text>
                    <Text style={styles.initialCardText}>United States</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.veniamItem} >
                <Card
                    row1="Aspernatur"
                    row2="Sinclair Conseqiu Natila"
                    row3Left="Applied Science"
                    row3Right="2010"
                />

            </TouchableOpacity>

            

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,

    },

    navCateogories: {
        margin: 20,
    },

    categoriesTitle: {
        fontSize: 18,
        paddingRight: 20,
        color:color.textTouch
    },

    btnAdd: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 40
    },

    textBtnAdd: {
        color: color.textTouch,
        fontSize: 18
    },

    veniamItem:{
        marginVertical: 10
    },

    card2:{
        borderBottomColor: color.textHeader,
        borderBottomWidth: 2,

    },

    initialCard:{
        backgroundColor: color.backgroundCard,
        width: '90%',
    },

    innierInitiialCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },

    initialCardText:{
        color: color.textTouch,
        fontSize: 15,
    },
})

