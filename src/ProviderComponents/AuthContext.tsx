import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

interface AuthContextProps {
    children: ReactNode;
};

interface AuthState {
    user: FirebaseAuthTypes.User | null;
    isLoading: boolean;
};

interface State {
    adminLogin: boolean;
    adminLogOunt: boolean;
}

interface AuthContextType {
    user: FirebaseAuthTypes.User | null;
    isLoading: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
    state: State;
    setState: React.Dispatch<React.SetStateAction<State>>; // รวมฟังก์ชัน setState ใน context
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [autState, setAuthState] = useState<AuthState>({
        user: null,
        isLoading: false,
    });

    const [state, setState] = useState<State>({
        adminLogin: false,
        adminLogOunt: false,
    });

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            setAuthState((prevState) => ({ ...prevState, user: user }));
        })

        return () => {
            unsubscribe();
        }
    }, []);

    const login = async (email: string, password: string) => {
        await setAuthState((prevState) => ({ ...prevState, isLoading: true }));
        try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log(autState, 'login successful');
            setAuthState((prevState) => ({ ...prevState, isLoading: false }));
            setState((p) => ({ ...p, adminLogin: !state.adminLogin }));
        } catch (error) {
            console.error('Login error: ' + error);
            setAuthState((prevState) => ({ ...prevState, isLoading: false }));
        }
    };

    const logout = async () => {
        try {
            await auth().signOut();
            console.log(autState, 'logOut successful');
            setState((p) => ({ ...p, adminLogOunt: !state.adminLogOunt }))
        } catch (error) {
            console.error('Logount error' + error)
        }
    };

    const contextValue: AuthContextType = {
        user: autState.user,
        isLoading: autState.isLoading,
        login,
        logout,
        state,
        setState,
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};