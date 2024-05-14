import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


const TOKEN_KEY = 'ims-api-key';
export const API_URL =  'https://api.apollo-towers.com'
const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({token: null, authenticated: false});

    useEffect(() => {
        const loadToken = async () => {
            const token = await AsyncStorage.getItem(TOKEN_KEY);
            if(token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setAuthState({
                    token: token,
                    authenticated: true
                });
            }
        };
        loadToken();
    }, [])

    const register = () => {
        return;
    }

    const login = async ({email, password}) => {
        // axios.post(`api.apollo-towers.com/auth/login`, {
        //     email,
        //     password
        // }, {
        //     headers: {
        //         'Content-Type': 'aplication/json'
        //     }
        // })
        // .then(async (res) => {
        //     console.log('result', res.data);
            // axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
            // await AsyncStorage.setItem(TOKEN_KEY, res.data.token);
            const localToken = "oat_MTE3.YW95Y2pZNUVoTEtqRlFfTmYzMWNrM05tektWVmFpck1DTjJJa3hMbDM5Mzc0Nzg1NTg";
            axios.defaults.headers.common['Authorization'] = `Bearer ${localToken}`;
            await AsyncStorage.setItem(TOKEN_KEY, localToken);
        // })
        // .catch((err) => {
        //     console.log('error', err)
        // });
    }

    const logout = async () => {
        await AsyncStorage.removeItem(TOKEN_KEY);

        setAuthState({
            token: null,
            authenticated: false
        });

        axios.defaults.headers.common['Authorization'] = '';
    }

    const value = {
        authState,
        onRegister: register, 
        onLogin: login, 
        onLogout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}