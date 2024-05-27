import { useState } from "react";
import { Home, Login } from "./views";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("Login");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
