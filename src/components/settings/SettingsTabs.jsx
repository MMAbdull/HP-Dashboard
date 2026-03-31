import { useRef, useEffect, useState } from "react";

export default function SettingsTabs({ activeTab, setActiveTab }) {

  const tabs = [
    { id: "preferences", label: "Preferences" },
    { id: "workouts", label: "Workouts" },
    { id: "account", label: "Account" }
  ];

  const tabRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({width: 0, left: 0});

  
  useEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
    const currentTab = tabRefs.current[activeIndex];

    if (currentTab) {
      setUnderlineStyle({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft
      });
    }
  }, [activeTab]);

  return (
    <div className="relative flex gap-8 border-b border-gray-700">

      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => (tabRefs.current[index] = el)}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-2 text-lg font-semibold transition-all duration-200
            ${activeTab === tab.id ? "text-gray-950" : "text-gray-500"}
          `}
        >
          {tab.label}
        </button>
      ))}


      <span
        className="absolute bottom-0 h-0.5 bg-gray-950 transition-all duration-300"
        style={{
          width: underlineStyle.width,
          left: underlineStyle.left
        }}
      />

    </div>
  );
}