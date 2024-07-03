import { useEffect } from "react";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import PageNotFound from "./components/PageNotFound";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  const isLogin = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {}, [navigate]);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      {isLogin && <Route path="/" element={<Home />} />}
      {/* <Route path="*" element={<Auth />} /> */}
    </Routes>
  );
}

export default App;
