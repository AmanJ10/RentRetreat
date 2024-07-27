import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Modal from "./modals/Modal";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { useLogin } from "./contexts/LoginProvider";
import Footer from "./Footer";

function Layout() {
  const { isModalOpen, handleClose, modalType } = useLogin();

  let modalBody;
  let modalTitle;

  if (modalType === "login") {
    modalTitle = "Login";
    modalBody = (
      <LoginPage
        actionLabel="Login"
        onSubmit={() => {
          console.log("Login Successful");
          handleClose();
        }}
      />
    );
  } else if (modalType === "register") {
    modalTitle = "Register";
    modalBody = (
      <RegisterPage
        actionLabel="Register"
        onSubmit={() => {
          console.log("Registered");
          handleClose();
        }}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleClose}
          title={modalTitle}
          body={modalBody}
        />
      )}
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
