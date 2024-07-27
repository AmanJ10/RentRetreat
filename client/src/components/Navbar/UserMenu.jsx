import { useEffect, useRef, useState } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useUsers } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function UserMenu({ handleOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUsers();
  const menuRef = useRef();
  const navigate = useNavigate();

  function toggleOpen() {
    if (user) navigate("/account");
    else setIsOpen((value) => !value);
  }

  function handleOnClick() {
    navigate("/account/places");
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3 ">
        <div
          onClick={() => handleOnClick()}
          className="hidden md:block text-l font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>

        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="hidden md:block">
            <Avatar />
          </div>
          {!!user && <div>{user.name}</div>}
        </div>
      </div>

      {isOpen ? (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer ">
            <>
              <MenuItem label="Login" handleOpen={() => handleOpen("login")} />
              <MenuItem
                label="Sign up"
                handleOpen={() => handleOpen("register")}
              />
            </>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default UserMenu;
