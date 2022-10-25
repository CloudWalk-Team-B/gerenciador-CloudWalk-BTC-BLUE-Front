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
    openUpdate: boolean;
    setOpenUpdate: (props:boolean)=>void;
}

const HandleModalsContext = createContext<HandleModalsProviderData>({} as HandleModalsProviderData);

export const HandleModalsProvider = ({children}:HandleModalsProviderProps) => {
    
    //modal produto
    const [openProduct, setOpenProduct] = useState<boolean>(false);

    //modal cadastrar novo usuário
    const [openNewUser, setOpenNewUser] = useState<boolean>(false);
    const [isAdmManager, setIsAdmManager] = useState<string>("")
    
    //modal atualização em massa
    const [openUpdate, setOpenUpdate] = useState<boolean>(false);

    return <HandleModalsContext.Provider value={{ openProduct, setOpenProduct, openNewUser, setOpenNewUser, isAdmManager, setIsAdmManager, openUpdate, setOpenUpdate }}>{children}</HandleModalsContext.Provider>
}

export const useHandleModals = () => useContext(HandleModalsContext)