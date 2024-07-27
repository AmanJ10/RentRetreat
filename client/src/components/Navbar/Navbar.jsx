import { useLocation } from "react-router-dom";
import Container from "../Container";
import { useLogin } from "../contexts/LoginProvider";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { useUsers } from "../contexts/UserContext";

function Navbar() {
  const { handleOpen } = useLogin();
  const location = useLocation();

  const { user } = useUsers();

  const showNavbar = location.pathname === "/";

  return (
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="py-3 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu handleOpen={handleOpen} />
          </div>
        </Container>
      </div>

      {showNavbar && <Categories />}
    </div>
  );
}

export default Navbar;
