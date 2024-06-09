import { createContext } from "react";
import { useContext } from "react";

export const AuthContext = createContext(null);

export default function useAuth() {
    return useContext(AuthContext);
}