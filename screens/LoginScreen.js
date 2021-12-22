import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';

import colors from '../constants/colors'
import fonts from '../constants/fonts';
import { signIn } from '../store/actions/auth.actions';
import { signUp } from '../store/actions/auth.actions';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        dispatch(signUp(email, password));
    }

    const handleSignIn = () => {
        dispatch(signIn(email, password));
    }

    return (
        <KeyboardAvoidingView style={styles.screen}>
            <Text style={styles.brand}>Crypto App</Text>
            <View style={styles.container}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Clave</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonIngresar} onPress={handleSignIn}>
                        <Text style={styles.buttonIngresar}>INGRESAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRegistro} onPress={handleSignUp}>
                        <Text style={styles.buttonRegistro}>REGISTRARSE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secundary,
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    label: {
        marginVertical: 8,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonIngresar: {
        backgroundColor: colors.secundary,
        fontFamily: fonts.text,
        color: colors.primary,
        fontSize: 16,
        margin: 10,
        borderRadius: 5,
    },
    buttonRegistro: {
        backgroundColor: colors.primary,
        fontFamily: fonts.text,
        color: colors.secundary,
        fontSize: 16,
        margin: 10,
        borderRadius: 5,
    },
    brand: {
        fontSize: 42,
        color: colors.primary,
        fontFamily: fonts.title,
    }
});

export default LoginScreen;