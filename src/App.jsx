import { BrowserRouter as Router } from "react-router-dom";
import L_Sidebar from "./components/L_Sidebar";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import { useState } from "react";


function App() {
  return (
    <div className="flex h-screen w-screen">
      <L_Sidebar/>

      <div className="flex flex-col flex-1">
        <TopBar/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
