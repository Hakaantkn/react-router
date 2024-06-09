import { AuthContext } from "./context"
import { useState } from "react";

export const AuthProvider = ({children}) => {
    const [name, setName] = useState('');
    return (
        <AuthContext.Provider value={{
            token: null,
            name,
            setName,}}>
            {children}
        </AuthContext.Provider>
    ) 
}