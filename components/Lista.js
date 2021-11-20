import { FlatList, StyleSheet, Text, View } from "react-native"

import React from "react"

const Lista = (props) => {

    return (
        <FlatList
            data={props.lista}
            renderItem={data => {
                return (
                    <View style={styles.itemList}>
                        <View style={styles.item}>
                            <Text>{data.item.value}</Text>
                        </View>
                    </View>
                );
            }}
            keyExtractor={item => item.id}
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
  })

export default Lista