import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";
import colors from '../constants/colors';

const ModalComponent = ({modalVisible, handleConfirm, handleCancel, text}) => {

    return(
        <Modal animationType="slide" visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
                <View style={[styles.modalContent, styles.shadow]}>
                    <Text style={styles.modalMessage}> {text} </Text>
                    <Text style={styles.modalCotizacion}> 1 btc = $61.856,40 </Text>
                    <TextInput 
                        style={styles.modalMessage}
                        placeholder="0,08083 btc"
                    />
                    <View>
                        <Button
                            onPress={handleConfirm}
                            title="CONFIRMAR"
                            color={colors.secundary}
                        />
                        <Button
                            onPress={handleCancel}
                            title="CANCELAR"
                            color={colors.secundary}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
    
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalContent: {
        padding: 30,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalMessage: {
        fontSize: 18,
      },
      modalCotizacion: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 20,
      },
      shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }
})

export default ModalComponent