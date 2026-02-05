import Home from "../pages/Home";
import Analytics from "../pages/Analytics";
import News from "../pages/News";
import Schedule from "../pages/Schedule";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Logout from "../pages/Logout";

function Content({ activePage }) {
  return (
    <main className="flex-1 bg-white overflow-y-auto ">
      {activePage === "home" && <Home />}
      {activePage === "analytics" && <Analytics />}
      {activePage === "news" && <News />}
      {activePage === "schedule" && <Schedule />}
      {activePage === "profile" && <Profile />}
      {activePage === "settings" && <Settings />}
      {activePage === "logout" && <Logout />}
    </main>
  );
}

export default Content;
