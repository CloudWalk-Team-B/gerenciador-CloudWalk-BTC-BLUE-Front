import { createContext, useContext, ReactNode, useState, useEffect } from "react"

interface OpenModalProviderProps {
    children: ReactNode
}

interface OpenModalProviderData{
    open: boolean
    setOpen: (props:boolean)=> void
}

const OpenModalContext = createContext<OpenModalProviderData>({} as OpenModalProviderData);

export const OpenModalProvider = ({children}:OpenModalProviderProps) => {
    
    const [open, setOpen]= useState<boolean>(false);

    return <OpenModalContext.Provider value={{ open, setOpen }}>{children}</OpenModalContext.Provider>
}

export const useOpenModal = () => useContext(OpenModalContext)