import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = (view) => {
    setIsModalOpen(true);
    setIsLogin(view === "login");
  };

  return (
    <LoginContext.Provider
      value={{ isModalOpen, isLogin, handleClose, handleOpen }}
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
