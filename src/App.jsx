import L_Sidebar from "./components/L_Sidebar";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import { useState } from "react";


function App() {
  const[activePage, setActivePage] = useState("home")
  return (
    <div className="flex h-screen w-screen">
      <L_Sidebar 
      activePage={activePage}
      setActivePage={setActivePage} 
      />

      <div className="flex flex-col flex-1">
        <TopBar/>
        <Content activePage={activePage}/>
      </div>
    </div>
  );
}

export default App;
