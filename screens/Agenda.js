import { FlatList, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { loadAddress } from '../store/actions/address.actions'

const Agenda = () => {

    const dispatch = useDispatch()
    const address = useSelector(state => state.address.addresses)

    useEffect(() => {
        dispatch(loadAddress())
    }, [])

    return(
        <View style={{flex: 1}}>

            <FlatList
                data={address}
                keyExtractor={item => item.id}
                renderItem={data => {
                    return (
                        <View style={styles.itemList}>
                            <View style={styles.item}>
                                <Text>{data.item.name} - {data.item.address}</Text>
                            </View>
                        </View>
                    )
                }}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    itemList: {
        justifyContent:'center',
        alignItems:'center',
    },
    item: {
        width: '90%',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
  })


export default Agenda