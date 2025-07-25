import { StyleSheet} from 'react-native'
import { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


type AuthContextType = {
    userToken:string | null;
    login:(token:string) => void;
    logout:() => void;
    isLoggedIn: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [userToken, setUserToken] = useState<string | null>(null);
    const login = (token: string) => {
        setUserToken(token);
        AsyncStorage.setItem('userToken', token);
    }
    const logout = async () => {
        setUserToken(null);
        await AsyncStorage.removeItem('userToken');
    }
    // Load user token from AsyncStorage on initial load
    const isLoggedIn = async () => {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            setUserToken(token);
        }
    }
    useEffect(() => {
        isLoggedIn();
    }, []);
  return (
    <AuthContext.Provider value={{ userToken, login, logout , isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

const styles = StyleSheet.create({})