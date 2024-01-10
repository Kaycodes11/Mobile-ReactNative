import * as React from "react";

type AuthContextType<T = boolean> = {
    isAuthenticated: T;
    setIsAutheticated: React.Dispatch<React.SetStateAction<T>>;
}


const AuthContext = React.createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAutheticated: () => { }
});

// consumer
export const useAuth = () => React.useContext(AuthContext);


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, setIsAutheticated } = useAuth();

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAutheticated }}>
            {children}
        </AuthContext.Provider>
    );
}