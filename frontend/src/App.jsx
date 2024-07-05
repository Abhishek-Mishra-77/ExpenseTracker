import { useEffect } from "react";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings/Settings";
import TabSection from "./pages/TabSection/TabSection";
import { useSelector } from "react-redux";
function App() {
  const isLogin = useSelector((state) => state?.user?.isLogin);
  const navigate = useNavigate();
  useEffect(() => {}, [navigate]);

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="flex">
        {isLogin && <TabSection />}
        <Routes>
          {!isLogin && <Route path="*" element={<Auth />} />}
          {isLogin && (
            <>
              <Route path="/setting" element={<Settings />} />
              <Route path="/home" element={<Home />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
