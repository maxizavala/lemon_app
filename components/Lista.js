import { Button, FlatList, StyleSheet, Text, View } from "react-native"

import React from "react"
import { deleteOrder } from "../store/actions/orders.actions"
import { useDispatch } from "react-redux"

const Lista = (props) => {

    const dispatch = useDispatch()
    const eliminar = (id) => dispatch(deleteOrder(id))
    

    return (
        <FlatList
            data={props.lista}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return (
                    <View style={styles.itemList}>
                        <View style={styles.item}>
                            <View>
                                <Text>{item.order.fecha} - {item.order.orden} </Text>
                            </View>
                            <View>
                                <Text>monto: ${item.order.monto} - cotización: ${item.order.cotizacion}</Text>
                            </View>
                            <View>
                            <Button
                                onPress={() => eliminar(item.id)}
                                title="Eliminar"
                            />
                            </View>
                        </View>
                    </View>
                )
            }}
        />
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
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
  })

export default Lista