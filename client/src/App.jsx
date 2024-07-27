import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./components/Layout";
import AccountPage from "./pages/AccountPage";
import axios from "axios";
import PlaceDetails from "./components/PlaceDetails";
import Categories from "./components/Navbar/Categories";
import SamplePlaces from "./components/SamplePlaces";
import Cancel from "./components/Cancel";
import SuccessPage from "./components/SuccessPage";

axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
        <Route path="/account/:subpage/:action" element={<AccountPage />} />
        <Route path="/places/:id" element={<PlaceDetails />} />
        <Route path="/bookings/:id" element={<SamplePlaces />} />
        <Route path="/splaces/:id" element={<SamplePlaces />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<Cancel />} />
      </Route>
    </Routes>
  );
}

export default App;
