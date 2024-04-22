import { useState } from "react";
import ToggleButton from "./Components/ToggleButton";
import Dashboard from "./Components/Dashboard";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((pervMode) => !pervMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "light" : "dark",
    );
  };

  return (
    <div
      className={`min-h-screen bg-primary-bg p-6 text-sm transition-colors duration-500 lg:px-[11.2vw] lg:pt-[2.125rem]`}
    >
      <header className="flex flex-col justify-between md:flex-row">
        <div className="border-b border-secondary-bg pb-4 md:border-none md:pb-0">
          <h1 className="text-2xl font-bold text-primary-text md:text-[1.8rem] md:leading-snug">
            Social Media Dashboard
          </h1>
          <h2 className="font-bold text-secondary-text">
            Total Followers: 23,004
          </h2>
        </div>
        <ToggleButton toggleDarkMode={toggleDarkMode} />
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
