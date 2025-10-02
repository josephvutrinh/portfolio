import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout";

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
  return (
    <Router>
      <Routes>
        <Route element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/experience" element={<Experience darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/contacts" element={<Contacts darkMode={darkMode} />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
