import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
function Logo() {
  return (
    <Link to={"/"}>
      <img
        src={logo}
        alt="logo"
        className="hidden md:block cursor-pointer h-20 w-35"
      />
    </Link>
  );
}

export default Logo;
