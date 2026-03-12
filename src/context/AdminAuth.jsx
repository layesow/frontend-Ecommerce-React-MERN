import { createContext, useState } from "react";
import { adminToken } from "../common/config";

export const AdminAuthContext = createContext();


export const AdminAuthProvider = ({children}) => {
    const token = adminToken();
    const [admin , setAdmin] = useState(token);

    const login = (admin) => {
        setAdmin(admin);
    }
    const logout = () => {
        setAdmin(null);
        localStorage.removeItem("adminInfo");
    }

    const isAdminLoggedIn = () => {
        return  admin ? true : false;
    }

    return (
        <AdminAuthContext.Provider value={{ admin, login, isAdminLoggedIn , logout }}>
            {children}
        </AdminAuthContext.Provider>
    )
}