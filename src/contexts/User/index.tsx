import { createContext, useContext, ReactNode, useState, useEffect } from "react"
import Api from "../../services/api";
import { User } from "../../types/interface";

interface UserProviderProps {
    children: ReactNode
}

interface UserProviderData{
    user: User
    setUser: (prop:User)=> void
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({children}:UserProviderProps) => {

    const [ user, setUser ] = useState<any>()

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)