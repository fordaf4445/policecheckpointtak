import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

interface AuthContextProps {
    children: ReactNode;
};

interface AuthState {
    user: FirebaseAuthTypes.User | null;
    isLoading: boolean;
};

interface AuthContextType {
    user: FirebaseAuthTypes.User | null;
    isLoading: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [autState, setAuthState] = useState<AuthState>({
        user: null,
        isLoading: true,
    });

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            setAuthState({ user, isLoading: false });
        })

        return () => {
            unsubscribe();
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log(autState , 'login successful');
            
        } catch (error) {
            console.error('Login error: ' + error);
        }
    };

    const logout = async () => {
        try{
            await auth().signOut();
            console.log(autState , 'logOut successful');
        } catch (error) {
            console.error('Logount error' + error)
        }
    };

    const contextValue: AuthContextType = {
        user : autState.user,
        isLoading:autState.isLoading,
        login,
        logout,
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};