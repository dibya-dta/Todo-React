import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [pageName, setPageName] = useState("Todo App")

    return <AuthContext.Provider value={{ pageName, setPageName }}>
        {children}
    </AuthContext.Provider>
}