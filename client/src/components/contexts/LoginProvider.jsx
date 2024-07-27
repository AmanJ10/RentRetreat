import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <LoginContext.Provider
      value={{ isModalOpen, modalType, handleClose, handleOpen }}
    >
      {children}
    </LoginContext.Provider>
  );
}

function useLogin() {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
}

export { LoginProvider, useLogin };
