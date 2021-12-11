import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';

import { signUp } from '../store/actions/auth.actions';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        dispatch(signUp(email, password));
    }

    return (
        <KeyboardAvoidingView style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>Registro</Text>
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
                <TouchableOpacity onPress={handleSignUp}>
                    <Text>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default LoginScreen;