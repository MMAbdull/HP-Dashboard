import { useState } from "react";

import L_Sidebar from "./components/L_Sidebar";
import TopBar from "./components/TopBar";
import Content from "./components/Content";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-screen overflow-hidden">

      <L_Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="flex flex-col h-full lg:ml-64">
        <TopBar setIsOpen={setIsSidebarOpen} />

        <div className="flex flex-col flex-1 min-h-0">   
          <Content />
        </div>
      </div>

    </div>
  );
}

export default App;
