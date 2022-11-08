import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface HandleModalsProviderProps {
  children: ReactNode;
}

interface HandleModalsProviderData {
  openProduct: boolean;
  setOpenProduct: (props: boolean) => void;
  openNewUser: boolean;
  setOpenNewUser: (props: boolean) => void;
  isAdmManager: string;
  setIsAdmManager: (props: string) => void;
  openUpdate: boolean;
  setOpenUpdate: (props: boolean) => void;
  openNewProduct: boolean;
  setOpenNewProduct: (props: boolean) => void;
  openRecoveryPassword: boolean;
  setOpenRecoveryPassword: (props: boolean) => void;
  search: string;
  setSearch: (props: string) => void;
  // recoveryPassword: boolean;
  // setRecoveryPassword: (props:boolean)=>void
}

const HandleModalsContext = createContext<HandleModalsProviderData>(
  {} as HandleModalsProviderData
);

export const HandleModalsProvider = ({
  children,
}: HandleModalsProviderProps) => {
  //modal produto
  const [openProduct, setOpenProduct] = useState<boolean>(false);

  //modal cadastrar novo usuário
  const [openNewUser, setOpenNewUser] = useState<boolean>(false);
  const [isAdmManager, setIsAdmManager] = useState<string>("");

  //modal atualização em massa
  const [openUpdate, setOpenUpdate] = useState<boolean>(false);

  //modal para adicionar novo produto
  const [openNewProduct, setOpenNewProduct] = useState<boolean>(false);

  //controle de State direcionado a pesquisa da navbar para as paginas home e product
  const [search, setSearch] = useState<string>("");

  //modal para alterar senha
  const [openRecoveryPassword, setOpenRecoveryPassword] =
    useState<boolean>(false);

  return (
    <HandleModalsContext.Provider
      value={{
        openProduct,
        setOpenProduct,
        openNewUser,
        setOpenNewUser,
        isAdmManager,
        setIsAdmManager,
        openUpdate,
        setOpenUpdate,
        openNewProduct,
        setOpenNewProduct,
        search,
        setSearch,
        openRecoveryPassword,
        setOpenRecoveryPassword,
      }}
    >
      {children}
    </HandleModalsContext.Provider>
  );
};

export const useHandleModals = () => useContext(HandleModalsContext);
