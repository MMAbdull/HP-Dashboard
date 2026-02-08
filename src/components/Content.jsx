import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Analytics from "../pages/Analytics";
import News from "../pages/News";
import Schedule from "../pages/Schedule";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Logout from "../pages/Logout";

function Content() {
  return (
    <main className="flex-1 bg-white overflow-y-auto ">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/schedule" element={<Schedule/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </main>
  );
}

export default Content;
