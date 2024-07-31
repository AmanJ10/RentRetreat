import { useCallback, useState } from "react";
import Heading from "../components/Heading";
import axios from "axios";
import Button from "../components/Button";
import { useLogin } from "../components/contexts/LoginProvider";

function RegisterPage({ actionLabel, disabled, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleOpen } = useLogin();

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  async function registerUser(e) {
    e.preventDefault();
    axios
      .post("https://rentretreat.onrender.com/register", {
        name,
        email,
        password,
      })
      .then(() => {
        handleSubmit();
        alert("Registration Successful. Now you can log in");
      })
      .catch(() => {
        alert("Registration failed. Please try again later.");
      });
  }

  return (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <form className="space-y-6" onSubmit={registerUser}>
        <div className="relative">
          <input
            className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition
            disabled:opacity-70 disabled:cursor-not-allowed"
            type="text"
            placeholder=" "
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-4 text-md duration-150 transform -translate-y-3 origin-[0]
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-4"
          >
            Enter Name
          </label>
        </div>
        <div className="relative">
          <input
            className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition
            disabled:opacity-70 disabled:cursor-not-allowed"
            type="email"
            placeholder=" "
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
      <div className="text-center py-2 text-gray-500">
        Already a member?
        <div
          className="underline text-black"
          onClick={() => handleOpen("login")}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
