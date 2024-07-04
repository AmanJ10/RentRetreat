import Container from "../Container";
import { useLogin } from "../contexts/LoginProvider";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

function Navbar() {
  const { handleOpen } = useLogin();

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
      <Categories />
    </div>
  );
}

export default Navbar;
