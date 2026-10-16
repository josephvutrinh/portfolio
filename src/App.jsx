import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Layout from "./components/Layout";
import Hermes from "./pages/Hermes";
import HermesPrivacy from "./pages/HermesPrivacy";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/hermes" element={<Hermes />} />
                    <Route path="/hermes/privacy" element={<HermesPrivacy />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
