import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LoginSignUp } from "./pages/LoginSignUp.jsx";
import LikeNotLike from "./pages/LikeNotLike";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swipe" element={<LikeNotLike />} />
          <Route path="/loginsignup" element={<LoginSignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
