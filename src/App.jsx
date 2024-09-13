import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./Contexts/UserContext";
import User from "./Components/User/User";
import ProtectedRoute from "./Interface/ProtectedRoute";
import Photo from "./Components/Photo/Photo"
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Interface/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
            <Route path="photo/:id" element={<Photo />} />
            <Route path="profile/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
