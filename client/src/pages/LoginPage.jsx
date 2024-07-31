import { useCallback, useState } from "react";
import Heading from "../components/Heading";
import { useLogin } from "../components/contexts/LoginProvider";
import Button from "../components/Button";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useUsers } from "../components/contexts/UserContext";

function LoginPage({ actionLabel, onSubmit, disabled }) {
  const { handleOpen } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUser } = useUsers();

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://rentretreat.onrender.com/login",
        {
          email,
          password,
        }
      );
      setUser(response.data);
      alert("Login Successful");
      setRedirect(true);
      handleSubmit();
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  }

  if (redirect) return <Navigate to={"/"} />;

  return (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Login to your account!" />
      <form className="space-y-6" onSubmit={handleLoginSubmit}>
        <div className="relative">
          <input
            className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition
            disabled:opacity-70 disabled:cursor-not-allowed"
            type="email"
            placeholder=" "
            id="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-md duration-150 transform -translate-y-3 origin-[0]
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4"
          >
            Enter Email
          </label>
        </div>
        <div className="relative">
          <input
            className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition
            disabled:opacity-70 disabled:cursor-not-allowed"
            type="password"
            placeholder=" "
            id="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-4 text-md duration-150 transform -translate-y-3 origin-[0]
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4"
          >
            Enter Password
          </label>
        </div>
        <div className="flex flex-col fap-2">
          <div className="flex flex-row items-center gap-4 w-full">
            <Button type="submit" disabled={disabled} label={actionLabel} />
          </div>
        </div>
      </form>

      <div className="text-center py-2">
        Don&apos;t have an account yet?
        <div
          className="underline text-black"
          onClick={() => handleOpen("register")}
        >
          Register Now
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
