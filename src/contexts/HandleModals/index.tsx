import { createContext, useContext, ReactNode, useState, useEffect } from "react"

interface HandleModalsProviderProps {
    children: ReactNode
}

interface HandleModalsProviderData{
    openProduct: boolean
    setOpenProduct: (props:boolean)=>void
}

const HandleModalsContext = createContext<HandleModalsProviderData>({} as HandleModalsProviderData);

export const HandleModalsProvider = ({children}:HandleModalsProviderProps) => {
    
    const [openProduct, setOpenProduct]= useState<boolean>(false);

    return <HandleModalsContext.Provider value={{ openProduct, setOpenProduct }}>{children}</HandleModalsContext.Provider>
}

export const useHandleModals = () => useContext(HandleModalsContext)