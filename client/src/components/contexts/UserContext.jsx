import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(function () {
    if (!user) {
      axios.get("https://rentretreat.onrender.com/profile").then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        ready,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUsers() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside the UsersProvider");
  return context;
}

export { UserProvider, useUsers };
