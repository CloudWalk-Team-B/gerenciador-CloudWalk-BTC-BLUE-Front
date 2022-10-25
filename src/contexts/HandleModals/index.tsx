import { createContext, useContext, ReactNode, useState, useEffect } from "react"

interface HandleModalsProviderProps {
    children: ReactNode
}

interface HandleModalsProviderData{
    openProduct: boolean;
    setOpenProduct: (props:boolean)=>void;
    openNewUser : boolean;
    setOpenNewUser: (props:boolean)=>void;
    isAdmManager: string;
    setIsAdmManager: (props:string)=> void;
}

const HandleModalsContext = createContext<HandleModalsProviderData>({} as HandleModalsProviderData);

export const HandleModalsProvider = ({children}:HandleModalsProviderProps) => {
    
    const [openProduct, setOpenProduct] = useState<boolean>(false);
    const [openNewUser, setOpenNewUser] = useState<boolean>(false);
    const [isAdmManager, setIsAdmManager] = useState<string>("") 

    return <HandleModalsContext.Provider value={{ openProduct, setOpenProduct, openNewUser, setOpenNewUser, isAdmManager, setIsAdmManager }}>{children}</HandleModalsContext.Provider>
}

export const useHandleModals = () => useContext(HandleModalsContext)