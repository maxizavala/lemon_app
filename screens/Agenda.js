import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AntDesign } from '@expo/vector-icons';
import { loadAddress } from '../store/actions/address.actions'
import { removeAddress } from "../store/actions/address.actions";

const Agenda = () => {

    const dispatch = useDispatch()
    const address = useSelector(state => state.address.addresses)

    useEffect(() => {
        dispatch(loadAddress())
    }, [])

    const handleEliminarDireccion = (id) => {
        dispatch(removeAddress(id));
        dispatch(loadAddress())
      };

    return(
        <View style={{flex: 1}}>

            <FlatList
                data={address}
                keyExtractor={item => item.id}
                renderItem={data => {
                    return (
                        <View style={styles.itemList}>
                            <View style={styles.item}>
                                <Text>
                                    {data.item.name} - {data.item.address} 
                                </Text>
                                <TouchableOpacity onPress={() => handleEliminarDireccion(data.item.id)}>
                                    <AntDesign name="delete" size={24} color="red" />
                                </TouchableOpacity>
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