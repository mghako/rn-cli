import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import React, { useState } from 'react'
import { Button, Icon, TextInput } from 'react-native-paper'
import { useAuth } from '../context/AuthContext';

const LoginScreen = () => {

    const {onLogin} = useAuth();
    const [loginFormData,setLoginFormData] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async () => {
        try {
            // Handle successful login here
            await onLogin(loginFormData);
        } catch (error) {
            console.error('error', error);
        }
    }
    

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ alignSelf: 'center',marginVertical: 'auto', paddingHorizontal: 10, maxWidth: 400}}>
            <Image 
                source={require('../assets/ap-tower-logo-transparent.png')} 
                style={{maxHeight: 200, marginHorizontal: 'auto'}}
            />
            <TextInput 
                label={"Email"} 
                value={loginFormData.email}
                keyboardType='email-address'
                onChangeText={email => setLoginFormData(prevState => ({...prevState, email}))}
                style={{minWidth: 'auto', marginVertical: 10, marginHorizontal: 5}}
            />
            <TextInput 
                label={"Password"} 
                value={loginFormData.password}
                secureTextEntry
                onChangeText={password => setLoginFormData(prevState => ({...prevState, password}))}
                style={{minWidth: 'auto', marginVertical: 10, marginHorizontal: 5}}
            />
            <Button 
                icon={<Icon source="camera" />} 
                mode='contained' 
                onPress={handleLogin}
                style={{backgroundColor: '#3f51b5'}}
                >
                
                    Login
            </Button>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen