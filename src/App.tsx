import React from "react";
import Navbar from "./assets/component/Navbar";
import Home from "./pages/home";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
