import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Modal from "./modals/Modal";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useLogin } from "./contexts/LoginProvider";

function Layout() {
  const { isModalOpen, handleClose, isLogin } = useLogin();

  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        title={isLogin ? "Login" : "Register"}
        body={
          isLogin ? (
            <LoginPage
              actionLabel="Login"
              onSubmit={() => {
                console.log("Login Successful");
                handleClose();
              }}
            />
          ) : (
            <RegisterPage
              actionLabel="Register"
              onSubmit={() => {
                console.log("Registered");
                handleClose();
              }}
            />
          )
        }
      />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
